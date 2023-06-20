import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/store/store';
import { logout } from 'src/store/slices/auth/auth.thunks';
import Header from 'src/ui/header/header';

const HeaderContainer: React.FC = () => {
  const { isAuth, login } = useSelector((state: RootState) => state.auth.authUserData);
  const dispatch = useDispatch<AppDispatch>();

  const onLogout = () => {
    dispatch(logout());
  };

  return <Header isAuth={isAuth} login={login} logout={onLogout} />;
};

export default HeaderContainer;
