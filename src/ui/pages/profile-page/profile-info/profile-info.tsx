import React, { ChangeEvent, useState } from 'react';
import classes from 'src/ui/pages/profile-page/profile-info/profile-info.module.css';
import Preloader from 'src/ui/common/components/preloader/preloader';
import ProfileStatus from 'src/ui/pages/profile-page/profile-info/profile-status/profile-status';
import defaultPhoto from 'src/assets/images/ic_person_24px.svg';
import ProfileDataForm from 'src/ui/pages/profile-page/profile-info/profile-data-form/profile-data-form';
import ProfileData from 'src/ui/pages/profile-page/profile-info/profile-data/profile-data';
import { IProfile } from 'src/store/slices/profiles/profiles.types';

export type Props = {
  userProfile: IProfile | null;
  profileStatus: string;
  updateProfileStatus: (newStatus: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  saveProfile: (profile: IProfile) => Promise<void>;
};

const ProfileInfo: React.FC<Props> = ({
  userProfile,
  profileStatus,
  updateProfileStatus,
  saveProfile,
  savePhoto,
  isOwner,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!userProfile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSaveProfile = (profile: IProfile) => {
    // TODO refactor without .then
    saveProfile(profile).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div>
        <img alt="" src={userProfile.photos.large || defaultPhoto} className={classes.mainPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
      </div>
      <div className={classes.descriptionBlock}>
        <ProfileStatus status={profileStatus} updateProfileStatus={updateProfileStatus} isOwner={isOwner} />
      </div>
      <div className={classes.descriptionBlock}>
        <img alt="" src={userProfile.photos.small || defaultPhoto} className={classes.secondPhoto} />
        {editMode ? (
          <ProfileDataForm initialValues={userProfile} profile={userProfile} onSubmit={onSaveProfile} />
        ) : (
          <ProfileData
            profile={userProfile}
            isOwner={isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
