import { compose } from '@reduxjs/toolkit';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { authStateCurrentUserId } from 'src/store/slices/auth/auth.selectors';
import { profilesStateProfileStatus, profilesStateUserProfile } from 'src/store/slices/profiles/profiles.selectors';
import {
  getProfile,
  getProfileStatus,
  savePhoto,
  saveProfile,
  updateProfileStatus,
} from 'src/store/slices/profiles/profiles.thunks';
import { IProfile } from 'src/store/slices/profiles/profiles.types';
import { AppDispatch } from 'src/store/store';
import withAuthRedirect from 'src/ui/common/hoc/with-auth-redirect';
import usePrevious from 'src/ui/common/hook/use-previous';
import ProfilePage from 'src/ui/pages/profile-page/profile-page';

const ProfilePageContainer: React.FC = () => {
  const userProfile = useSelector(profilesStateUserProfile);
  const profileStatus = useSelector(profilesStateProfileStatus);
  const userId = useSelector(authStateCurrentUserId);
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams<{ userID: string }>();
  const navigate = useNavigate();
  const mounted = useRef(false);

  const refreshProfile = () => {
    let userIdUrl = params?.userID ? +params.userID : null;
    if (!userIdUrl) {
      userIdUrl = userId;
      if (!userIdUrl) {
        navigate('/login');
      }
    }
    dispatch(getProfile(userIdUrl));
    dispatch(getProfileStatus(userIdUrl));
  };
  const onUpdateProfileStatus = (newStatus: string) => {
    dispatch(updateProfileStatus(newStatus));
  };
  const onSavePhoto = (file: File) => {
    dispatch(savePhoto(file));
  };
  const onSaveProfile = (profile: IProfile) =>
    dispatch(saveProfile(profile)).then(r => Promise.resolve(r.meta.requestStatus === 'fulfilled'));

  const prevParams = usePrevious(params, { userID: '' });
  useEffect(() => {
    const userIdChanged = !!(
      ((prevParams?.userID && !Number.isNaN(+prevParams.userID)) ||
        (params?.userID && !Number.isNaN(+params.userID))) &&
      prevParams?.userID !== params?.userID
    );

    if (userIdChanged || !mounted.current) {
      refreshProfile();
      if (!mounted.current) {
        mounted.current = true;
      }
    }
  }, [params]);

  return (
    <div>
      <ProfilePage
        userProfile={userProfile}
        profileStatus={profileStatus}
        updateProfileStatus={onUpdateProfileStatus}
        isOwner={!params?.userID}
        savePhoto={onSavePhoto}
        saveProfile={onSaveProfile}
      />
    </div>
  );
};

export default compose(withAuthRedirect)(ProfilePageContainer);
