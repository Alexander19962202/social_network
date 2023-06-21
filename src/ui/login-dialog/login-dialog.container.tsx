import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'src/store/slices/auth/auth.thunks';
import { Navigate } from 'react-router-dom';
import LoginDialog, { LoginData } from 'src/ui/login-dialog/login-dialog';
import { AppDispatch } from 'src/store/store';
import { authStateCaptchaURL, authStateIsAuth } from 'src/store/slices/auth/auth.selectors';

const LoginDialogContainer: React.FC = () => {
  const isAuth = useSelector(authStateIsAuth);
  const captchaURL = useSelector(authStateCaptchaURL);
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
