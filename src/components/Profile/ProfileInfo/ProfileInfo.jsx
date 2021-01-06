import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img src='https://cs309821.vk.me/v309821389/8138/taqZMGEXKgo.jpg'/>
            <div className={classes.descriptionBlock}>ava + description</div>
        </div>
    );
}

export default ProfileInfo;