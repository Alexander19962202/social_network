import { profileAPI } from 'src/api/api';
import { stopSubmit } from 'redux-form';
import { IProfile } from 'src/store/slices/profiles/profiles.types';
import { ResultCode } from 'src/api/api.types';
import { setProfilePhoto, setProfileStatus, setUserProfile } from 'src/store/slices/profiles/profiles.slice';
import { AppDispatch, createAppAsyncThunk } from 'src/store/store';

export const getProfile = createAppAsyncThunk<number, IProfile>('profile/getProfile', (userId, { dispatch }) => {
  return profileAPI.getProfile(userId).then(data => {
    dispatch(setUserProfile({ profile: data }));
    return data;
  });
});

export const getProfileStatus = createAppAsyncThunk<number>('profile/getProfileStatus', (userId, { dispatch }) => {
  return profileAPI.getProfileStatus(userId).then(status => {
    dispatch(setProfileStatus({ status }));
  });
});

export const updateProfileStatus = createAppAsyncThunk<string>(
  'profile/updateProfileStatus',
  async (newStatus, { dispatch }) => {
    try {
      const response = await profileAPI.setProfileStatus(newStatus);
      if (response.resultCode === ResultCode.OK) {
        dispatch(setProfileStatus({ status: newStatus }));
      }
    } catch (error) {
      // TODO add toaster
    }
  },
);

export const savePhoto = createAppAsyncThunk<File>('profile/savePhoto', async (file, { dispatch }) => {
  let response = await profileAPI.setProfilePhoto(file);
  if (response.resultCode === ResultCode.OK) {
    dispatch(setProfilePhoto({ photos: response.data.photos }));
  }
});

export const saveProfile = createAppAsyncThunk<IProfile, ReturnType<AppDispatch>>(
  'profile/saveProfile',
  async (profile, { dispatch, getState }) => {
    const userId = getState().auth.authUserData.id;
    const response = await profileAPI.setProfile(profile);

    if (response.resultCode === ResultCode.OK) {
      return dispatch(getProfile(userId));
    }

    dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }));
    return Promise.reject(response.messages[0]);
  },
);
