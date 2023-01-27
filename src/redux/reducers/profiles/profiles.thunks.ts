import {profileAPI} from "../../../api/Api";
import {savePhotoSuccess, setStatus, setUserProfile} from "./profiles.action-creators";
import {setGlobalErrorAC} from "../app/app.action-creators";
import {FormAction, stopSubmit} from "redux-form";
import {Dispatch} from "react";
import {IProfile, ProfilesThunk, SavePhotoAction, SetStatusAction, SetUserProfileAction} from "./profiles.types";
import {SetGlobalErrorMessageAction} from "../app/app.types";

export const getProfile = (userID: number) => (dispatch: Dispatch<SetUserProfileAction>) => {
  profileAPI.getProfile(userID).then(data => {
    dispatch(setUserProfile(data));
  });
};

export const getProfileStatus = (userID: number) => (dispatch: Dispatch<SetStatusAction>) => {
  profileAPI.getUserStatus(userID).then(response => {
    dispatch(setStatus(response.data));
  })
};

export const updateProfileStatus = (newStatus: string) => async (dispatch: Dispatch<SetStatusAction | SetGlobalErrorMessageAction>) => {
  try {
    const response = await profileAPI.updateStatus(newStatus);
    if (response.data.resultCode === 0)
      dispatch(setStatus(newStatus))
  } catch (error) {
    dispatch(setGlobalErrorAC("ERROR UPDATE STATUS FAILED"));
  }
};

export const savePhoto = (file: any) => async (dispatch: Dispatch<SavePhotoAction>) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: IProfile) => async (dispatch: Dispatch<ProfilesThunk | FormAction>, getState: any) => {
  const userId = getState().auth.authUserData.id;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
    return Promise.reject(response.data.messages[0]);
  }
};
