import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img src='https://cs309821.vk.me/v309821389/8138/taqZMGEXKgo.jpg'/>
            <div className={classes.descriptionBlock}>
                <img src='https://sun1-14.userapi.com/impf/c849228/v849228610/19cd41/WsTFkn32rmI.jpg?size=200x0&quality=96&crop=1,319,1213,1213&sign=4eed9454f39b203c3bff8b36633be047&ava=1'/>
                Alexander Evstafiadi
            </div>
        </div>
    );
}

export default ProfileInfo;