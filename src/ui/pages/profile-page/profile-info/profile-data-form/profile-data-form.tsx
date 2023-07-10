import React from 'react';
import { Form } from 'react-final-form';

import { IProfile } from 'src/store/slices/profiles/profiles.types';
import { createField, Input, Textarea } from 'src/ui/common/components/form-control/form-control';
import style from 'src/ui/common/components/form-control/form-control.module.scss';
import { FormSetErrorsFn } from 'src/ui/common/validators/validators';
import s from 'src/ui/pages/profile-page/profile-info/profile-info.module.scss';

type ProfileKeys = Extract<keyof IProfile, string>;

type Props = {
  initialValues: IProfile;
  profile: IProfile;
  onSubmit: (profile: IProfile, setErrors: FormSetErrorsFn) => void;
};

const ProfileDataForm: React.FC<Props> = ({ onSubmit, initialValues, profile }) => (
  <Form
    onSubmit={(values: IProfile, _, callback) => {
      onSubmit(values, callback);
    }}
    initialValues={initialValues}
  >
    {({ handleSubmit, submitError }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <button>Save</button>
        </div>
        {submitError && <div className={style.formSummaryError}>{submitError}</div>}
        <div>
          <b>Full name</b>: {createField<ProfileKeys>('Full name', 'fullName', [], Input)}
        </div>
        <div>
          <b>Looking for a job</b>: {createField<ProfileKeys>('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
        </div>
        <div>
          <b>My professional skills</b>:
          {createField<ProfileKeys>('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
          <b>About me</b>:{createField<ProfileKeys>('About me', 'aboutMe', [], Textarea)}
        </div>
        <div>
          <b>Contacts</b>:{' '}
          {Object.keys(profile.contacts).map(key => (
            <div key={key} className={s.contact}>
              <b>
                {key}: {createField(key, `contacts.${key}`, [], Input)}
              </b>
            </div>
          ))}
        </div>
      </form>
    )}
  </Form>
);

export default ProfileDataForm;
