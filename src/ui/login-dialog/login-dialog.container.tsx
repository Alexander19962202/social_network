import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'src/store/slices/auth/auth.thunks';
import { Navigate } from 'react-router-dom';
import LoginDialog, { LoginData } from 'src/ui/login-dialog/login-dialog';
import { AppDispatch, RootState } from 'src/store/store';

const LoginDialogContainer: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.auth.authUserData.isAuth);
  const captchaURL = useSelector((state: RootState) => state.auth.authUserData.captchaURL);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (formData: LoginData) => {
    dispatch(login(formData.email, formData.password, formData?.rememberMe, formData?.captcha));
  };
  if (isAuth) {
    return <Navigate to={'/profile'} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginDialog captchaURL={captchaURL} onSubmit={onSubmit} />
    </div>
  );
};

export default LoginDialogContainer;
