import { FieldState, FieldValidator, SubmissionErrors } from 'final-form';

type FieldValueType = string | number;

export type FormSetErrorsFn = ((errors: SubmissionErrors) => void) | undefined;

export const required: FieldValidator<FieldValueType> = value => {
  if (value) {
    return undefined;
  }
  return 'Field is required';
};

export const maxLengthCreator =
  (maxLength: number): FieldValidator<string | number> =>
  value => {
    if (value.toString()?.length && value.toString().length > maxLength) {
      return `Max length is ${maxLength} symbols`;
    }
    return undefined;
  };

export const composeValidators =
  (...validators: FieldValidator<string | number>[]) =>
  (value: string | number, allValues: object, meta?: FieldState<FieldValueType>) =>
    validators.reduce((error, validator) => error || validator(value, allValues, meta), undefined);
