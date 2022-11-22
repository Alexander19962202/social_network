import React from "react";
// @ts-expect-error TS(2307): Cannot find module './FormControl.module.css' or i... Remove this comment to see the full error message
import styles from "./FormControl.module.css";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import {Field} from "redux-form";

const FormControl =  ({
    input,
    meta: {touched, error},
    children
}: any) => {
    const hasError = touched && error;
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                {children}
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            { hasError && <span>{error}</span> }
        </div>
    )
};

export const Textarea = (props: any) => {
    const {input, meta, ...restProps} = props;
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props: any) => {
    const {input, meta, ...restProps} = props;
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const createField = (placeholder: any, name: any, validators: any, component: any, props = {}, text = "") => (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
);
