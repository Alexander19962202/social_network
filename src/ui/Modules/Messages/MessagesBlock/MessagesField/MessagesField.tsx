import React from "react";
import classes from './MessagesField.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "src/ui/common/validators/validators";
import {Textarea} from "src/ui/common/components/form-control/form-control";

const maxLength30 = maxLengthCreator(30);

const AddMessagesForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.messagesField}>
        <div className={classes.textarea}>
          <Field placeholder='Enter new message' className={classes.textarea} component={Textarea} name={'messageText'}
                 validate={[required, maxLength30]}/>
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
