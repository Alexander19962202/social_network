import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../../widgets/Preloader";
import ProfileStatusFC from "./ProfileStatusFC";
import defaultPhoto from "./../../../../assets/images/ic_person_24px.svg"

const ProfileInfo = (props) => {

    const {profileInfoData, updateProfileStatus} = props;

    if(!profileInfoData.userProfile)
        return (
            <Preloader/>
        );

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    debugger
    return (
        <div>
            <div>
                <img src={profileInfoData.userProfile.photos.large || defaultPhoto} className={classes.mainPhoto} />
                { props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
            </div>
            <div className={classes.descriptionBlock}>
                <ProfileStatusFC status={profileInfoData.status} updateProfileStatus={updateProfileStatus}/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={profileInfoData.userProfile.photos.small || defaultPhoto} className={classes.secondPhoto}/>
                <div>{profileInfoData.userProfile.fullName}</div>
                <div>{profileInfoData.userProfile.aboutMe}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;