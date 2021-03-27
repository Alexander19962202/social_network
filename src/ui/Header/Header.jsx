import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img
                src='https://yt3.ggpht.com/a/AATXAJzn-DRRHOx_J9XtPlDYbNjK3eJSVRlvzgZZCMmUmQ=s900-c-k-c0x00ffffff-no-rj'/>
            <div className={classes.loginBlock}>
                {
                    props.authUserData.isAuth ? props.authUserData.login : <NavLink to={'/login'}>LOGIN</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;