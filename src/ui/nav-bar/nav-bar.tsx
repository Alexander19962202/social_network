import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from 'src/ui/nav-bar/nav-bar.module.scss';

const NavBar: React.FC = () => (
  <nav className={classes.navbar}>
    <div className={classes.navbar__item}>
      <NavLink to="/profile" className={navData => (navData.isActive ? classes.activeLink : '')}>
        Profile
      </NavLink>
    </div>
    <div className={classes.navbar__item}>
      <NavLink to="/messenger" className={navData => (navData.isActive ? classes.activeLink : '')}>
        Messenger
      </NavLink>
    </div>
    <div className={classes.navbar__item}>
      <NavLink to="/users" className={navData => (navData.isActive ? classes.activeLink : '')}>
        Users
      </NavLink>
    </div>
  </nav>
);

export default NavBar;
