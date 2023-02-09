import React from "react";
import classes from './message-input.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "src/ui/common/validators/validators";
import {Textarea} from "src/ui/common/components/form-control/form-control";

export type MessageData = {
  messageText: string
}

const maxLength30 = maxLengthCreator(30);

const decorator = reduxForm<MessageData>({form: "MessagesSendMessage"})

type Props = InjectedFormProps<MessageData>;

const MessageInput: React.FC<Props> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.messagesField}>
        <div className={classes.textarea}>
          <Field className={classes.textarea}
            placeholder='Enter new message'
            component={Textarea}
            name={'messageText'}
            validate={[required, maxLength30]}/>
        </div>
        <div>
          <button className={classes.button}>Send</button>
        </div>
      </div>
    </form>
  )
};

export default decorator(MessageInput);
