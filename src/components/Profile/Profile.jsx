import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    let myPostsData = [
        {text: 'How I learned Infra Hard', likeCount: 11},
        {text: 'How I learned Torba Black', likeCount: 22},
        {text: 'About Gimbarr in 2011', likeCount: 33}
    ];

    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPostData={myPostsData}/>
        </div>
    );
}

export default Profile;