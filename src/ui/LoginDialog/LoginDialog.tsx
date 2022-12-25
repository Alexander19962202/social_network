import React from 'react';
import {reduxForm} from "redux-form";
import {required} from "../common/validators/validators";
import {createField, Input} from "../common/widgets/form-control/form-control";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth/auth.thunks";
import {Navigate} from "react-router-dom";
import style from "./../LoginDialog/LoginDialog.module.css"

const LoginForm = ({
    handleSubmit,
    error,
    captchaURL
}: any) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField('', 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            
            { captchaURL && <img src={captchaURL} />}
            { captchaURL &&  createField("Symbols from image", "captcha", [required], Input, {}) }
            {error &&
                <div className={style.formSummaryError}>
                    {error}
                </div>
            }

            
            <div>
                
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm =  reduxForm<any, any>({form: 'Login'})(LoginForm);

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return <div>
        
        <h1>Login</h1>
        
        <LoginReduxForm captchaURL={props.captchaURL} onSubmit={onSubmit} />
    </div>
};

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.authUserData.isAuth,
    captchaURL: state.auth.authUserData.captchaURL
});

export default connect(mapStateToProps, {login} )(Login);
