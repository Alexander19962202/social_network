import React from "react";
// @ts-expect-error TS(2307): Cannot find module './FormControl.module.css' or i... Remove this comment to see the full error message
import styles from "./FormControl.module.css";
import {Field} from "redux-form";

const FormControl =  ({
    meta: {touched, error},
    children
}: any) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            
            <div>
                {children}
            </div>
            
            { hasError && <span>{error}</span> }
        </div>
    )
};

export const Textarea = (props: any) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props: any) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const createField = (placeholder: any, name: any, validators: any, component: any, props = {}, text = "") => (
    <div>
        
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
);
