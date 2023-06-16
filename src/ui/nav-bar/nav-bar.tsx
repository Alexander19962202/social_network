import React from 'react';
import classes from 'src/ui/nav-bar/nav-bar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.item}>
        <NavLink to="/profile" className={navData => (navData.isActive ? classes.activeLink : '')}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/messages" className={navData => (navData.isActive ? classes.activeLink : '')}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" className={navData => (navData.isActive ? classes.activeLink : '')}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" className={navData => (navData.isActive ? classes.activeLink : '')}>
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" className={navData => (navData.isActive ? classes.activeLink : '')}>
          Users
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" className={navData => (navData.isActive ? classes.activeLink : '')}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
