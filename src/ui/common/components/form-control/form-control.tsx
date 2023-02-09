import React from "react";
import styles from "src/ui/common/components/form-control/form-control.module.css";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {Validator} from "src/ui/common/validators/validators";

type FormControlProps = {
  meta: WrappedFieldMetaProps
  children: React.ReactNode
}

const FormControl: React.FC<FormControlProps> = ({meta: {touched, error}, children}) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  )
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const createField = function <KeysType extends string>(placeholder: string, name: KeysType, validators: Validator[], component: React.FC<WrappedFieldProps>, props = {}, text = "") {
  return (
    <div>
      <Field placeholder={placeholder}
             name={name}
             validate={validators}
             component={component}
             {...props}
      />
      {text}
    </div>
  )
}
