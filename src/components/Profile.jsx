import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.profile}>
            <img src='https://cs309821.vk.me/v309821389/8138/taqZMGEXKgo.jpg'/>
            <div>ava + description</div>
            <div>
                New posts:
                <div className={classes.item}>Post 1</div>
                <div className={classes.item}>Post 2</div>
            </div>
        </div>
    );
}

export default Profile;