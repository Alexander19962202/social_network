import { profileAPI } from 'src/api/api';
import { stopSubmit } from 'redux-form';
import { IProfile } from 'src/store/slices/profiles/profiles.types';
import { ResultCode } from 'src/api/api.types';
import { AppAsyncThunkAction } from 'src/store/slices/common/common.types';
import { AnyAction } from 'redux';
import { setProfilePhoto, setProfileStatus, setUserProfile } from 'src/store/slices/profiles/profiles.slice';

export const getProfile =
  (userID: number): AppAsyncThunkAction<AnyAction> =>
  dispatch => {
    return profileAPI.getProfile(userID).then(data => {
      dispatch(setUserProfile({ profile: data }));
    });
  };

export const getProfileStatus =
  (userID: number): AppAsyncThunkAction<AnyAction> =>
  dispatch => {
    return profileAPI.getProfileStatus(userID).then(status => {
      dispatch(setProfileStatus({ status }));
    });
  };

export const updateProfileStatus =
  (newStatus: string): AppAsyncThunkAction<AnyAction> =>
  async dispatch => {
    try {
      const response = await profileAPI.setProfileStatus(newStatus);
      if (response.resultCode === ResultCode.OK) {
        dispatch(setProfileStatus({ status: newStatus }));
      }
    } catch (error) {
      // TODO add toaster
    }
  };

export const savePhoto =
  (file: File): AppAsyncThunkAction<AnyAction> =>
  async dispatch => {
    let response = await profileAPI.setProfilePhoto(file);
    if (response.resultCode === ResultCode.OK) {
      dispatch(setProfilePhoto({ photos: response.data.photos }));
    }
  };

export const saveProfile =
  (profile: IProfile): AppAsyncThunkAction<AnyAction> =>
  async (dispatch, getState) => {
    const userId = getState().auth.authUserData.id;
    const response = await profileAPI.setProfile(profile);

    if (response.resultCode === ResultCode.OK) {
      return dispatch(getProfile(userId));
    }

    dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }));
    return Promise.reject(response.messages[0]);
  };
