import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import {reduxForm} from "redux-form";
import {required} from "../common/validators/validators";
// @ts-expect-error TS(6142): Module '../common/widgets/FormControl/FormControl'... Remove this comment to see the full error message
import {createField, Input} from "../common/widgets/FormControl/FormControl";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth_reducer";
import {Navigate} from "react-router-dom";
// @ts-expect-error TS(2307): Cannot find module './../LoginDialog/LoginDialog.m... Remove this comment to see the full error message
import style from "./../LoginDialog/LoginDialog.module.css"

const LoginForm = ({
    handleSubmit,
    error,
    captchaURL
}: any) => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            { captchaURL && <img src={captchaURL} />}
            { captchaURL &&  createField("Symbols from image", "captcha", [required], Input, {}) }
            {error &&
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className={style.formSummaryError}>
                    {error}
                </div>
            }

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm =  reduxForm({form: 'Login'})(LoginForm);

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    if (props.isAuth) {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <Navigate to={"/profile"} />
    }

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h1>Login</h1>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LoginReduxForm captchaURL={props.captchaURL} onSubmit={onSubmit} />
    </div>
};

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.authUserData.isAuth,
    captchaURL: state.auth.authUserData.captchaURL
});

export default connect(mapStateToProps, {login} )(Login);