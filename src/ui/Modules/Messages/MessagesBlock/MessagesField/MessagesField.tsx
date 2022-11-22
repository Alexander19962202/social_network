import React from "react";
// @ts-expect-error TS(2307): Cannot find module './MessagesField.module.css' or... Remove this comment to see the full error message
import classes from './MessagesField.module.css'
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../common/validators/validators";
// @ts-expect-error TS(6142): Module '../../../../common/widgets/FormControl/For... Remove this comment to see the full error message
import {Textarea} from "../../../../common/widgets/FormControl/FormControl";

const maxLength30 = maxLengthCreator(30);

const AddMessagesForm = (props: any) => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <form onSubmit={props.handleSubmit}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className={classes.messagesField}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className={classes.textarea}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field placeholder='Enter new message' className={classes.textarea} component={Textarea} name={'messageText'} validate={[required, maxLength30]}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <button className={classes.button}>Send</button>
                </div>
            </div>
        </form>
    )
};

let AddMessagesReduxForm = reduxForm({form: "MessagesSendMessage"})(AddMessagesForm);

const MessagesField = (props: any) => {

    let on_sendMessage = (formData: any) => {
        props.on_sendMessage(formData.messageText);
    };

    return (
       // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
       <AddMessagesReduxForm onSubmit={on_sendMessage}/>
    );
};

export default MessagesField;