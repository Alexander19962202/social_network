import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { IProfile } from 'src/store/slices/profiles/profiles.types';
import { createField, Input, Textarea } from 'src/ui/common/components/form-control/form-control';
import style from 'src/ui/common/components/form-control/form-control.module.scss';
import s from 'src/ui/pages/profile-page/profile-info/profile-info.module.scss';

export type ProfileKeys = Extract<keyof IProfile, string>;

type OwnProps = {
  profile: IProfile;
};

type Props = OwnProps & InjectedFormProps<IProfile, OwnProps>;

const ProfileDataForm: React.FC<Props> = ({ handleSubmit, profile, error }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <button>Save</button>
    </div>
    {error && <div className={style.formSummaryError}>{error}</div>}
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
);

const decorator = reduxForm<IProfile, OwnProps>({ form: 'edit-profile' });

export default decorator(ProfileDataForm);
