export type Validator = (value: any) => string | undefined

export const required: Validator = (value: string | number | undefined) => {
  if (value) {
    return undefined;
  }
  return "Field is required";
};

export const maxLengthCreator = (maxLength: number): Validator => (value: string) => {
  if (value.length > maxLength) {
    return `Max length is ${maxLength} symbols`;
  }
  return undefined;
};
