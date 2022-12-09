import React from "react";
// @ts-expect-error TS(2307): Cannot find module './MessagesField.module.css' or... Remove this comment to see the full error message
import classes from './MessagesField.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../common/validators/validators";
import {Textarea} from "../../../../common/widgets/FormControl/FormControl";

const maxLength30 = maxLengthCreator(30);

const AddMessagesForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            
            <div className={classes.messagesField}>
                
                <div className={classes.textarea}>
                    
                    <Field placeholder='Enter new message' className={classes.textarea} component={Textarea} name={'messageText'} validate={[required, maxLength30]}/>
                </div>
                
                <div>
                    
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
       <AddMessagesReduxForm onSubmit={on_sendMessage}/>
    );
};

export default MessagesField;