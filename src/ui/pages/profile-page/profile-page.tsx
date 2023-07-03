import React from 'react';
import ProfileInfo, { Props as ProfileInfoProps } from 'src/ui/pages/profile-page/profile-info/profile-info';
import UserPostsListContainer from 'src/ui/pages/profile-page/user-posts/user-posts-list.container';

type Props = ProfileInfoProps;

const ProfilePage: React.FC<Props> = props => {
  return (
    <div>
      <ProfileInfo
        userProfile={props.userProfile}
        profileStatus={props.profileStatus}
        updateProfileStatus={props.updateProfileStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <UserPostsListContainer />
    </div>
  );
};

export default ProfilePage;
