import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './NavBar.module.css' or its co... Remove this comment to see the full error message
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.item}>
                <NavLink to='/profile' className={(navData) => navData.isActive ? classes.activeLink : ''}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/messages' className={(navData) => navData.isActive ? classes.activeLink : ''}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' className={(navData) => navData.isActive ? classes.activeLink : ''}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' className={(navData) => navData.isActive ? classes.activeLink : ''}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' className={(navData) => navData.isActive ? classes.activeLink : ''}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' className={(navData) => navData.isActive ? classes.activeLink : ''}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;