import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../../common/components/preloader/preloader";
import ProfileStatusFC from "./ProfileStatusFC";
import defaultPhoto from "./../../../../assets/images/ic_person_24px.svg"
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = (props: any) => {

  const [editMode, setEditMode] = useState(false);

  const {profileInfoData, updateProfileStatus, saveProfile} = props;

  if (!profileInfoData.userProfile)
    return (
      <Preloader/>
    );

  const onMainPhotoSelected = (e: any) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const on_saveProfile = (formData: any) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  };

  return (
    <div>
      <div>
        <img src={profileInfoData.userProfile.photos.large || defaultPhoto} className={classes.mainPhoto}/>
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
      </div>
      <div className={classes.descriptionBlock}>
        <ProfileStatusFC status={profileInfoData.status} updateProfileStatus={updateProfileStatus}/>
      </div>
      <div className={classes.descriptionBlock}>
        <img src={profileInfoData.userProfile.photos.small || defaultPhoto} className={classes.secondPhoto}/>
        {editMode ?
          <ProfileDataFormReduxForm initialValues={profileInfoData.userProfile} profile={profileInfoData.userProfile}
                                    onSubmit={on_saveProfile}/> :
          <ProfileData profile={profileInfoData.userProfile} isOwner={props.isOwner} goToEditMode={() => {
            setEditMode(true)
          }}/>}
      </div>
    </div>
  );
};

const ProfileData = ({profile, isOwner, goToEditMode}: any) => {
  return <div>
    {isOwner && <div>
      <button onClick={goToEditMode}>Edit</button>
    </div>}
    <div>
      <b>Full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>About me</b>: {profile.aboutMe}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
    })}
    </div>
  </div>
};

const Contact = ({contactTitle, contactValue}: any) => {
  return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
};

export default ProfileInfo;
