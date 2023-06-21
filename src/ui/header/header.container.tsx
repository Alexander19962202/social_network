import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import { logout } from 'src/store/slices/auth/auth.thunks';
import Header from 'src/ui/header/header';
import { authStateIsAuth, authStateLogin } from 'src/store/slices/auth/auth.selectors';

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
