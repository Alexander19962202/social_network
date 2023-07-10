import React from 'react';
import { Field, Form } from 'react-final-form';

import classes from './message-input.module.scss';
import { Textarea } from 'src/ui/common/components/form-control/form-control';
import { composeValidators, maxLengthCreator, required } from 'src/ui/common/validators/validators';

const NEW_MESSAGE_FIELD_NAME = 'messageText';

const maxLength30 = maxLengthCreator(30);

type Props = {
  onSubmit: (_: string) => void;
};
const MessageInput: React.FC<Props> = ({ onSubmit }) => (
  <Form
    onSubmit={values => {
      onSubmit(values[NEW_MESSAGE_FIELD_NAME]);
    }}
  >
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className={classes.messagesField}>
          <div className={classes.messagesField__textarea}>
            <Field
              className={classes.messagesField__textarea}
              placeholder="Enter new message"
              component={Textarea}
              name={'messageText'}
              validate={composeValidators(required, maxLength30)}
            />
          </div>
          <button className={classes.messagesField__button}>Send</button>
        </div>
      </form>
    )}
  </Form>
);

export default MessageInput;
