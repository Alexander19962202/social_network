import { FieldValidator } from 'final-form';
import React from 'react';
import { Field, FieldRenderProps } from 'react-final-form';

import classes from 'src/ui/common/components/form-control/form-control.module.scss';
import { composeValidators } from 'src/ui/common/validators/validators';

const FormControl: React.FC<FieldRenderProps<string>> = ({ meta: { error, submitError, touched }, children }) => {
  const hasError = touched && (error || submitError);
  return (
    <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
      <div>{children}</div>
      {hasError && <span className={classes.formControl__errorMessage}>{error}</span>}
    </div>
  );
};

export const Textarea: React.FC<FieldRenderProps<string>> = props => {
  const { input, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input: React.FC<FieldRenderProps<string>> = props => {
  const { input, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export function createField<KeysType extends string>(
  placeholder: string,
  name: KeysType,
  validators: FieldValidator<string | number>[],
  component: React.FC<FieldRenderProps<string>>,
  props = {},
  text = '',
) {
  return (
    <>
      <Field
        placeholder={placeholder}
        name={name}
        validate={composeValidators(...validators)}
        component={component}
        {...props}
      />
      {text}
    </>
  );
}
