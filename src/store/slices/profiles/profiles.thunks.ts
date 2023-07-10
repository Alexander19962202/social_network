import { FORM_ERROR } from 'final-form';

import { profileAPI } from 'src/api/api';
import { ResultCode } from 'src/api/api.types';
import { isUndefined } from 'src/common/helpers/type-guards.helper';
import { setProfilePhoto, setProfileStatus, setUserProfile } from 'src/store/slices/profiles/profiles.slice';
import { IProfile } from 'src/store/slices/profiles/profiles.types';
import { AppDispatch, createAppAsyncThunk } from 'src/store/store';
import { FormSetErrorsFn } from 'src/ui/common/validators/validators';

export const getProfile = createAppAsyncThunk<number, IProfile>('profile/getProfile', (userId, { dispatch }) =>
  profileAPI.getProfile(userId).then(data => {
    dispatch(setUserProfile({ profile: data }));
    return data;
  }),
);

export const getProfileStatus = createAppAsyncThunk<number>('profile/getProfileStatus', (userId, { dispatch }) =>
  profileAPI.getProfileStatus(userId).then(status => {
    dispatch(setProfileStatus({ status }));
  }),
);

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
  const response = await profileAPI.setProfilePhoto(file);
  if (response.resultCode === ResultCode.OK) {
    dispatch(setProfilePhoto({ photos: response.data.photos }));
  }
});

export const saveProfile = createAppAsyncThunk<
  {
    profile: IProfile;
    setErrors: FormSetErrorsFn;
  },
  ReturnType<AppDispatch>
>('profile/saveProfile', async ({ profile, setErrors }, { dispatch, getState }) => {
  const userId = getState().auth.authUserData.id;
  const response = await profileAPI.setProfile(profile);

  if (response.resultCode === ResultCode.OK) {
    return dispatch(getProfile(userId));
  }

  if (!isUndefined(setErrors)) {
    setErrors({ [FORM_ERROR]: response.messages[0] });
  }
  return Promise.reject(response.messages[0]);
});
