import React from 'react';
// @ts-expect-error TS(6142): Module './ProfileInfo/ProfileInfo' was resolved to... Remove this comment to see the full error message
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// @ts-expect-error TS(6142): Module './MyPosts/MyPostsContainer' was resolved t... Remove this comment to see the full error message
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props: any) => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ProfileInfo profileInfoData={props.profileInfoData}
                         updateProfileStatus={props.updateProfileStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <MyPostsContainer />
        </div>
    );
};

export default Profile;