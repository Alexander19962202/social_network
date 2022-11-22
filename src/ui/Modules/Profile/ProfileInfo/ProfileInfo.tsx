import React, {useState} from 'react';
// @ts-expect-error TS(2307): Cannot find module './ProfileInfo.module.css' or i... Remove this comment to see the full error message
import classes from './ProfileInfo.module.css';
// @ts-expect-error TS(6142): Module '../../../common/widgets/Preloader/Preloade... Remove this comment to see the full error message
import Preloader from "../../../common/widgets/Preloader/Preloader";
// @ts-expect-error TS(6142): Module './ProfileStatusFC' was resolved to '/home/... Remove this comment to see the full error message
import ProfileStatusFC from "./ProfileStatusFC";
// @ts-expect-error TS(2307): Cannot find module './../../../../assets/images/ic... Remove this comment to see the full error message
import defaultPhoto from "./../../../../assets/images/ic_person_24px.svg"
// @ts-expect-error TS(6142): Module './ProfileDataForm' was resolved to '/home/... Remove this comment to see the full error message
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = (props: any) => {

    const [editMode, setEditMode] = useState(false);

    const {profileInfoData, updateProfileStatus, saveProfile} = props;

    if(!profileInfoData.userProfile)
        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <img src={profileInfoData.userProfile.photos.large || defaultPhoto} className={classes.mainPhoto} />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                { props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className={classes.descriptionBlock}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ProfileStatusFC status={profileInfoData.status} updateProfileStatus={updateProfileStatus}/>
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className={classes.descriptionBlock}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <img src={profileInfoData.userProfile.photos.small || defaultPhoto} className={classes.secondPhoto}/>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                {editMode ? <ProfileDataFormReduxForm initialValues={profileInfoData.userProfile} profile={profileInfoData.userProfile} onSubmit={on_saveProfile}/> :
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <ProfileData profile={profileInfoData.userProfile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}}/>}
            </div>
        </div>
    );
};

const ProfileData = ({
    profile,
    isOwner,
    goToEditMode
}: any) => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <b>Full name</b>: {profile.fullName}
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <b>About me</b>: {profile.aboutMe}
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
};

const Contact = ({
    contactTitle,
    contactValue
}: any) => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
};

export default ProfileInfo;