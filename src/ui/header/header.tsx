import React from 'react';
import classes from 'src/ui/header/header.module.css';
import { NavLink } from 'react-router-dom';

type Props = {
  logout: () => void;
  isAuth: boolean;
  login: string | null;
};

const Header: React.FC<Props> = ({ isAuth, login, logout }) => (
  <header className={classes.header}>
    <label className={classes.appName}>SOWA</label>
    <div className={classes.loginBlock}>
      {isAuth ? (
        <div>
          {login} - <button onClick={logout}>Log out</button>
        </div>
      ) : (
        <NavLink to={'/login'}>LOGIN</NavLink>
      )}
    </div>
  </header>
);

export default Header;
