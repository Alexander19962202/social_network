import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profileInfoData={props.profileInfoData} updateProfileStatus={props.updateProfileStatus}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;