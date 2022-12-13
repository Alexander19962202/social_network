import {
  ADD_POST,
  AddPostAction,
  DELETE_POST,
  DeletePostAction, IProfile, ProfilePhotos, SAVE_PHOTO, SavePhotoAction, SET_STATUS,
  SET_USER_PROFILE, SetStatusAction,
  SetUserProfileAction
} from "./profiles.types";

export const addPost = (postText: string): AddPostAction => ({
  type: ADD_POST,
  postText: postText
});

export const deletePost = (postID: number): DeletePostAction => ({
  type: DELETE_POST,
  postID
});

export const setUserProfile = (userProfile: IProfile): SetUserProfileAction => ({
  type: SET_USER_PROFILE,
  userProfile: userProfile
});

export const setStatus = (status: string): SetStatusAction => ({
  type: SET_STATUS,
  status: status
});

export const savePhotoSuccess = (photos: ProfilePhotos): SavePhotoAction => ({
  type: SAVE_PHOTO,
  photos
});
