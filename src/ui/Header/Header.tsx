import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './Header.module.css' or its co... Remove this comment to see the full error message
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    return (
        <header className={classes.header}>
            
            <>
                
                <img
                    src='https://yt3.ggpht.com/a/AATXAJzn-DRRHOx_J9XtPlDYbNjK3eJSVRlvzgZZCMmUmQ=s900-c-k-c0x00ffffff-no-rj'/>
                
                <span className={classes.error}>
                    {props.errorMessage}
                </span>
            </>
            
            <div className={classes.loginBlock}>
                {
                    props.authUserData.isAuth ?
                        <div>{props.authUserData.login} - <button onClick={props.logout}>Log out</button></div> :
                        <NavLink to={'/login'}>LOGIN</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;