import React from 'react';
import { Form } from 'react-final-form';

import { createField, Input } from 'src/ui/common/components/form-control/form-control';
import { FormSetErrorsFn, required } from 'src/ui/common/validators/validators';
import style from 'src/ui/login-dialog/login-dialog.module.scss';

export type LoginData = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: string;
};

export type LoginDataKeys = Extract<keyof LoginData, string>;

type Props = {
  captchaURL: string | null;
  onSubmit: (_: LoginData, setErrors: FormSetErrorsFn) => void;
};

const LoginDialog: React.FC<Props> = ({ onSubmit, captchaURL }) => (
  <Form
    onSubmit={(values: LoginData, _, callback) => {
      onSubmit(values, callback);
    }}
  >
    {({ handleSubmit, submitError }) => (
      <form onSubmit={handleSubmit}>
        {createField<LoginDataKeys>('Email', 'email', [required], Input)}
        {createField<LoginDataKeys>('Password', 'password', [required], Input, { type: 'password' })}
        {createField<LoginDataKeys>('', 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}

        {captchaURL && <img alt="" src={captchaURL} />}
        {captchaURL && createField<LoginDataKeys>('Symbols from image', 'captcha', [required], Input, {})}
        {submitError && <div className={style.formSummaryError}>{submitError}</div>}

        <div>
          <button>Login</button>
        </div>
      </form>
    )}
  </Form>
);

export default LoginDialog;
