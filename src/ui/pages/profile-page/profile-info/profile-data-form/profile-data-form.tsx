import React from 'react';
import s from 'src/ui/pages/profile-page/profile-info/profile-info.module.css';
import { createField, Input, Textarea } from 'src/ui/common/components/form-control/form-control';
import { InjectedFormProps, reduxForm } from 'redux-form';
import style from 'src/ui/common/components/form-control/form-control.module.css';
import { IProfile } from 'src/redux/slices/profiles/profiles.types';

export type Profile = IProfile;

export type ProfileKeys = Extract<keyof Profile, string>;

type OwnProps = {
  profile: Profile;
};

type Props = OwnProps & InjectedFormProps<Profile, OwnProps>;

const ProfileDataForm: React.FC<Props> = ({ handleSubmit, profile, error }) => {
  return (
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
        {Object.keys(profile.contacts).map(key => {
          return (
            <div key={key} className={s.contact}>
              <b>
                {key}: {createField(key, 'contacts.' + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const decorator = reduxForm<Profile, OwnProps>({ form: 'edit-profile' });

export default decorator(ProfileDataForm);
