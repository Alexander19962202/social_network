import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './Header.module.css' or its co... Remove this comment to see the full error message
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <header className={classes.header}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <img
                    src='https://yt3.ggpht.com/a/AATXAJzn-DRRHOx_J9XtPlDYbNjK3eJSVRlvzgZZCMmUmQ=s900-c-k-c0x00ffffff-no-rj'/>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <span className={classes.error}>
                    {props.errorMessage}
                </span>
            </>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className={classes.loginBlock}>
                {
                    props.authUserData.isAuth ?
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div>{props.authUserData.login} - <button onClick={props.logout}>Log out</button></div> :
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <NavLink to={'/login'}>LOGIN</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;