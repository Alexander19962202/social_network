import React from "react";
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "@src/ui/common/widgets/form-control/form-control"
import {reduxForm} from "redux-form";
import style from "../../..//common/widgets/form-control/form-control.module.css"

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
