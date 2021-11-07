import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../../widgets/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if(!props.profileInfoData.userProfile)
        return (
            <Preloader/>
        );
    return (
        <div>
            <div className={classes.profileLogo}>
                <img src={props.profileInfoData.userProfile.photos.large}/>
            </div>
            <div className={classes.descriptionBlock}>
                <ProfileStatus status={props.profileInfoData.status} updateProfileStatus={props.updateProfileStatus}/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profileInfoData.userProfile.photos.small}/>
                <div>{props.profileInfoData.userProfile.fullName}</div>
                <div>{props.profileInfoData.userProfile.aboutMe}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;