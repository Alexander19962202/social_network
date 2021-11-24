import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../../widgets/Preloader";
import ProfileStatusFC from "./ProfileStatusFC";

const ProfileInfo = (props) => {

    const {profileInfoData, updateProfileStatus} = props;

    if(!profileInfoData.userProfile)
        return (
            <Preloader/>
        );
    return (
        <div>
            <div className={classes.profileLogo}>
                <img src={profileInfoData.userProfile.photos.large}/>
            </div>
            <div className={classes.descriptionBlock}>
                <ProfileStatusFC status={profileInfoData.status} updateProfileStatus={updateProfileStatus}/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={profileInfoData.userProfile.photos.small}/>
                <div>{profileInfoData.userProfile.fullName}</div>
                <div>{profileInfoData.userProfile.aboutMe}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;