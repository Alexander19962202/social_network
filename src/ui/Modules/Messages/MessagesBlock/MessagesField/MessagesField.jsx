import React from "react";
import classes from './MessagesField.module.css'
import {Field, reduxForm} from "redux-form";

const AddMessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.messagesField}>
                <div className={classes.textarea}>
                    <Field placeholder='Enter new message' className={classes.textarea} component={'textarea'} name={'messageText'}/>
                </div>
                <div>
                    <button className={classes.button}>Send</button>
                </div>
            </div>
        </form>
    )
};

let AddMessagesReduxForm = reduxForm({form: "MessagesSendMessage"})(AddMessagesForm);

const MessagesField = (props) => {

    let on_sendMessage = (formData) => {
        props.on_sendMessage(formData.messageText);
    };

    return (
       <AddMessagesReduxForm onSubmit={on_sendMessage}/>
    );
};

export default MessagesField;