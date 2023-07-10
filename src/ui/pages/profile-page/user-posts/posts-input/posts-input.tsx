import React from 'react';
import { Field, Form } from 'react-final-form';

import { Textarea } from 'src/ui/common/components/form-control/form-control';
import { composeValidators, maxLengthCreator, required } from 'src/ui/common/validators/validators';

const NEW_POST_TEXT_FIELD_NAME = 'newPostText';

const maxLength10 = maxLengthCreator(10);

type Props = {
  onSubmit: (_: string) => void;
};
const PostsInput: React.FC<Props> = ({ onSubmit }) => (
  <Form
    onSubmit={values => {
      onSubmit(values[NEW_POST_TEXT_FIELD_NAME]);
    }}
  >
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name={NEW_POST_TEXT_FIELD_NAME}
            component={Textarea}
            validate={composeValidators(required, maxLength10)}
            placeholder={'post message'}
          />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    )}
  </Form>
);

export default PostsInput;
