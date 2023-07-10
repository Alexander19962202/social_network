import React, { ChangeEvent, useState } from 'react';

import defaultPhoto from 'src/assets/images/ic_person_24px.svg';
import { IProfile } from 'src/store/slices/profiles/profiles.types';
import Preloader from 'src/ui/common/components/preloader/preloader';
import { FormSetErrorsFn } from 'src/ui/common/validators/validators';
import ProfileData from 'src/ui/pages/profile-page/profile-info/profile-data/profile-data';
import ProfileDataForm from 'src/ui/pages/profile-page/profile-info/profile-data-form/profile-data-form';
import classes from 'src/ui/pages/profile-page/profile-info/profile-info.module.scss';
import ProfileStatus from 'src/ui/pages/profile-page/profile-info/profile-status/profile-status';

export type Props = {
  userProfile: IProfile | null;
  profileStatus: string;
  updateProfileStatus: (newStatus: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  saveProfile: (profile: IProfile, setErrors: FormSetErrorsFn) => Promise<boolean>;
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

  const onSaveProfile = (profile: IProfile, setErrors: FormSetErrorsFn) => {
    return saveProfile(profile, setErrors).then(isSuccess => {
      if (isSuccess) {
        setEditMode(false);
      }
    });
  };

  return (
    <div className={classes.profileInfo}>
      <div>
        <img alt="" src={userProfile.photos.large || defaultPhoto} className={classes.profileInfo__mainPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
      </div>
      <div className={classes.profileInfo__descriptionBlock}>
        <ProfileStatus status={profileStatus} updateProfileStatus={updateProfileStatus} isOwner={isOwner} />
      </div>
      <div className={classes.profileInfo__descriptionBlock}>
        <img alt="" src={userProfile.photos.small || defaultPhoto} className={classes.profileInfo__secondPhoto} />
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
