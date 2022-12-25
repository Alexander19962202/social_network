import React, {ReactElement} from "react";
import styles from "./form-control.module.css";
import {Field} from "redux-form";
import {Validator} from "../../validators/validators";

type FormControlProps = {
  meta: {
    touched: boolean,
    error: string | undefined
  }
  children: ReactElement
}

type InputProps = {
  input: any,
  meta: any
}

const FormControl: React.FC<FormControlProps> = ({meta: {touched, error}, children}: FormControlProps) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  )
};

export const Textarea: React.FC<InputProps> = (props: InputProps) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const createField = (placeholder: string, name: string, validators: Validator[], component: React.FC<InputProps>, props = {}, text = "") => (
  <div>
    <Field placeholder={placeholder} name={name}
      validate={validators}
      component={component}
      {...props}
    />
    {text}
  </div>
);
