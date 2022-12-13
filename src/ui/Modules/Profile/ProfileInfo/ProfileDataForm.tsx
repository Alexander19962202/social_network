import React from "react";
// @ts-expect-error TS(2307): Cannot find module './ProfileInfo.module.css' or i... Remove this comment to see the full error message
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../../common/widgets/FormControl/FormControl"
import {reduxForm} from "redux-form";
// @ts-expect-error TS(2307): Cannot find module '../../../common/widgets/FormCo... Remove this comment to see the full error message
import style from "../../../common/widgets/FormControl/FormControl.module.css"

const ProfileDataForm = ({
                           handleSubmit,
                           profile,
                           error
                         }: any) => {
  return <form onSubmit={handleSubmit}>
    <div>
      <button>Save</button>
    </div>
    {error && <div className={style.formSummaryError}>
      {error}
    </div>
    }
    <div>
      <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
    </div>
    <div>
      <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
    </div>
    <div>
      <b>My professional skills</b>:
      {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
    </div>
    <div>
      <b>About me</b>:
      {createField("About me", "aboutMe", [], Textarea)}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
      return <div key={key} className={s.contact}>
        <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
      </div>
    })}
    </div>
  </form>
};

const ProfileDataFormReduxForm = reduxForm<any, any>({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
