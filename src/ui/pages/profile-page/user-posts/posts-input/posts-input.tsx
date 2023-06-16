import { maxLengthCreator, required } from 'src/ui/common/validators/validators';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Textarea } from 'src/ui/common/components/form-control/form-control';
import React from 'react';

const maxLength10 = maxLengthCreator(10);

export type PostData = {
  newPostText: string;
};

type Props = InjectedFormProps<PostData>;

const decorator = reduxForm<PostData>({ form: 'ProfileAddNewPostForm' });

const PostsInput: React.FC<Props> = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={'newPostText'}
          component={Textarea}
          validate={[required, maxLength10]}
          placeholder={'post message'}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export default decorator(PostsInput);
