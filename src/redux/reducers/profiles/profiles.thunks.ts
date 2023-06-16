import { profileAPI } from 'src/api/api';
import { savePhotoSuccess, setStatus, setUserProfile } from 'src/redux/reducers/profiles/profiles.action-creators';
import { setGlobalErrorAC } from 'src/redux/reducers/app/app.action-creators';
import { FormAction, stopSubmit } from 'redux-form';
import {
  IProfile,
  SavePhotoAction,
  SetStatusAction,
  SetUserProfileAction,
} from 'src/redux/reducers/profiles/profiles.types';
import { SetGlobalErrorMessageAction } from 'src/redux/reducers/app/app.types';
import { ResultCode } from 'src/api/api.types';
import { AppAsyncThunkAction } from 'src/redux/reducers/common/common.types';

export const getProfile =
  (userID: number): AppAsyncThunkAction<SetUserProfileAction> =>
  dispatch => {
    return profileAPI.getProfile(userID).then(data => {
      dispatch(setUserProfile(data));
    });
  };

export const getProfileStatus =
  (userID: number): AppAsyncThunkAction<SetStatusAction> =>
  dispatch => {
    return profileAPI.getProfileStatus(userID).then(status => {
      dispatch(setStatus(status));
    });
  };

export const updateProfileStatus =
  (newStatus: string): AppAsyncThunkAction<SetStatusAction | SetGlobalErrorMessageAction> =>
  async dispatch => {
    try {
      const response = await profileAPI.setProfileStatus(newStatus);
      if (response.resultCode === ResultCode.OK) {
        dispatch(setStatus(newStatus));
      }
    } catch (error) {
      dispatch(setGlobalErrorAC('ERROR UPDATE STATUS FAILED'));
    }
  };

export const savePhoto =
  (file: File): AppAsyncThunkAction<SavePhotoAction> =>
  async dispatch => {
    let response = await profileAPI.setProfilePhoto(file);
    if (response.resultCode === ResultCode.OK) {
      dispatch(savePhotoSuccess(response.data.photos));
    }
  };

export const saveProfile =
  (profile: IProfile): AppAsyncThunkAction<FormAction> =>
  async (dispatch, getState) => {
    const userId = getState().auth.authUserData.id;
    const response = await profileAPI.setProfile(profile);

    if (response.resultCode === ResultCode.OK) {
      return dispatch(getProfile(userId));
    }

    dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }));
    return Promise.reject(response.messages[0]);
  };
