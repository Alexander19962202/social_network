import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import classes from './message-input.module.scss';
import { Textarea } from 'src/ui/common/components/form-control/form-control';
import { maxLengthCreator, required } from 'src/ui/common/validators/validators';

export type MessageData = {
  messageText: string;
};

const maxLength30 = maxLengthCreator(30);

const decorator = reduxForm<MessageData>({ form: 'MessagesSendMessage' });

type Props = InjectedFormProps<MessageData>;

const MessageInput: React.FC<Props> = props => (
  <form onSubmit={props.handleSubmit}>
    <div className={classes.messagesField}>
      <div className={classes.messagesField__textarea}>
        <Field
          className={classes.messagesField__textarea}
          placeholder="Enter new message"
          component={Textarea}
          name={'messageText'}
          validate={[required, maxLength30]}
        />
      </div>
      <button className={classes.messagesField__button}>Send</button>
    </div>
  </form>
);

export default decorator(MessageInput);
