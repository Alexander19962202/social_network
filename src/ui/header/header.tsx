import React from 'react';
import classes from 'src/ui/header/header.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/store/store';
import { logout } from 'src/store/slices/auth/auth.thunks';

const Header: React.FC = () => {
  const authUserData = useSelector((state: RootState) => state.auth.authUserData);
  const dispatch = useDispatch<AppDispatch>();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={classes.header}>
      <label className={classes.appName}>SOWA</label>
      <div className={classes.loginBlock}>
        {authUserData.isAuth ? (
          <div>
            {authUserData.login} - <button onClick={onLogout}>Log out</button>
          </div>
        ) : (
          <NavLink to={'/login'}>LOGIN</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
