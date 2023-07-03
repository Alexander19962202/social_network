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
        <NavLink to="/messenger" className={navData => (navData.isActive ? classes.activeLink : '')}>
          Messenger
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" className={navData => (navData.isActive ? classes.activeLink : '')}>
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
