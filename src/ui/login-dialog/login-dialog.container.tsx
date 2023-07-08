import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { authStateCaptchaURL, authStateIsAuth } from 'src/store/slices/auth/auth.selectors';
import { login } from 'src/store/slices/auth/auth.thunks';
import { AppDispatch } from 'src/store/store';
import LoginDialog, { LoginData } from 'src/ui/login-dialog/login-dialog';

const LoginDialogContainer: React.FC = () => {
  const isAuth = useSelector(authStateIsAuth);
  const captchaURL = useSelector(authStateCaptchaURL);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (formData: LoginData) => {
    dispatch(
      login({
        email: formData.email,
        password: formData.password,
        rememberMe: formData?.rememberMe,
        captcha: formData?.captcha,
      }),
    );
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
