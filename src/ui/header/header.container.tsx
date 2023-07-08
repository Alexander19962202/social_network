import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authStateIsAuth, authStateLogin } from 'src/store/slices/auth/auth.selectors';
import { logout } from 'src/store/slices/auth/auth.thunks';
import { AppDispatch } from 'src/store/store';
import Header from 'src/ui/header/header';

const HeaderContainer: React.FC = () => {
  const login = useSelector(authStateLogin);
  const isAuth = useSelector(authStateIsAuth);
  const dispatch = useDispatch<AppDispatch>();

  const onLogout = () => {
    dispatch(logout());
  };

  return <Header isAuth={isAuth} login={login} logout={onLogout} />;
};

export default HeaderContainer;
