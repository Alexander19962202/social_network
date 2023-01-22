import {createField, Input} from "src/ui/common/components/form-control/form-control";
import {required} from "src/ui/common/validators/validators";
import style from "src/ui/login-dialog/login-dialog.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

export type LoginData = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: string
}

type OwnProps = {
  captchaURL: string | null
  onSubmit: (data: LoginData) => void;
}

const decorator = reduxForm<LoginData, OwnProps>({form: 'Login'})

type Props = OwnProps & InjectedFormProps<LoginData, OwnProps>;

const LoginDialog: React.FC<Props> = ({
                handleSubmit,
                error,
                captchaURL
              }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required], Input)}
      {createField('Password', 'password', [required], Input, {type: 'password'})}
      {createField('', 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

      {captchaURL && <img src={captchaURL}/>}
      {captchaURL && createField("Symbols from image", "captcha", [required], Input, {})}
      {error &&
        <div className={style.formSummaryError}>
          {error}
        </div>
      }

      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

export default decorator(LoginDialog);
