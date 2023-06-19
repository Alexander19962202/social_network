import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { login } from 'src/store/slices/auth/auth.thunks';
import { Navigate } from 'react-router-dom';
import LoginDialog, { LoginData } from 'src/ui/login-dialog/login-dialog';
import { RootState } from 'src/store/store';

const mapStateToProps = (state: RootState) => ({
  isAuth: state.auth.authUserData.isAuth,
  captchaURL: state.auth.authUserData.captchaURL,
});

const connector = connect(mapStateToProps, { login });

type Props = ConnectedProps<typeof connector>;

const LoginDialogContainer: React.FC<Props> = props => {
  const onSubmit = (formData: LoginData) => {
    props.login(formData.email, formData.password, formData?.rememberMe, formData?.captcha);
  };
  if (props.isAuth) {
    return <Navigate to={'/profile'} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginDialog captchaURL={props.captchaURL} onSubmit={onSubmit} />
    </div>
  );
};

export default connector(LoginDialogContainer);
