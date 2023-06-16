import React, { ChangeEvent, useState } from 'react';
import classes from 'src/ui/pages/profile-page/profile-info/profile-info.module.css';
import Preloader from 'src/ui/common/components/preloader/preloader';
import ProfileStatus from 'src/ui/pages/profile-page/profile-info/profile-status/profile-status';
import defaultPhoto from 'src/assets/images/ic_person_24px.svg';
import ProfileDataForm, { Profile } from 'src/ui/pages/profile-page/profile-info/profile-data-form/profile-data-form';
import ProfileData from 'src/ui/pages/profile-page/profile-info/profile-data/profile-data';
import { IProfile, ProfileInfoData } from 'src/redux/reducers/profiles/profiles.types';

export type Props = {
  profileInfoData: ProfileInfoData;
  updateProfileStatus: (newStatus: string) => Promise<void>;
  isOwner: boolean;
  savePhoto: (file: File) => Promise<void>;
  saveProfile: (profile: IProfile) => Promise<void>;
};

const ProfileInfo: React.FC<Props> = props => {
  const [editMode, setEditMode] = useState(false);

  const { profileInfoData, updateProfileStatus, saveProfile } = props;

  if (!profileInfoData.userProfile) return <Preloader />;

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const on_saveProfile = (profile: Profile) => {
    saveProfile(profile).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div>
        <img alt='' src={profileInfoData.userProfile.photos.large || defaultPhoto} className={classes.mainPhoto} />
        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
      </div>
      <div className={classes.descriptionBlock}>
        <ProfileStatus
          status={profileInfoData.status}
          updateProfileStatus={updateProfileStatus}
          isOwner={props.isOwner}
        />
      </div>
      <div className={classes.descriptionBlock}>
        <img alt='' src={profileInfoData.userProfile.photos.small || defaultPhoto} className={classes.secondPhoto} />
        {editMode ? (
          <ProfileDataForm
            initialValues={profileInfoData.userProfile}
            profile={profileInfoData.userProfile}
            onSubmit={on_saveProfile}
          />
        ) : (
          <ProfileData
            profile={profileInfoData.userProfile}
            isOwner={props.isOwner}
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
