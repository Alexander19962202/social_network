import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { createField, Input } from 'src/ui/common/components/form-control/form-control';
import { required } from 'src/ui/common/validators/validators';
import style from 'src/ui/login-dialog/login-dialog.module.scss';

export type LoginData = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: string;
};

export type LoginDataKeys = Extract<keyof LoginData, string>;

type OwnProps = {
  captchaURL: string | null;
};

const decorator = reduxForm<LoginData, OwnProps>({ form: 'Login' });

type Props = OwnProps & InjectedFormProps<LoginData, OwnProps>;

const LoginDialog: React.FC<Props> = ({ handleSubmit, error, captchaURL }) => (
  <form onSubmit={handleSubmit}>
    {createField<LoginDataKeys>('Email', 'email', [required], Input)}
    {createField<LoginDataKeys>('Password', 'password', [required], Input, { type: 'password' })}
    {createField<LoginDataKeys>('', 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}

    {captchaURL && <img alt="" src={captchaURL} />}
    {captchaURL && createField<LoginDataKeys>('Symbols from image', 'captcha', [required], Input, {})}
    {error && <div className={style.formSummaryError}>{error}</div>}

    <div>
      <button>Login</button>
    </div>
  </form>
);

export default decorator(LoginDialog);
