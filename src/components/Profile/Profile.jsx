import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <img src='https://cs309821.vk.me/v309821389/8138/taqZMGEXKgo.jpg'/>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    );
}

export default Profile;