import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props: any) => {
    return (
        <div>
            
            <ProfileInfo profileInfoData={props.profileInfoData}
                         updateProfileStatus={props.updateProfileStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />
            
            <MyPostsContainer />
        </div>
    );
};

export default Profile;