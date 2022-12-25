import React from 'react';
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
