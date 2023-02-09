import { Action } from 'redux';

// ----- ACTION TYPES -----
export type ADD_POST_TYPE = 'PROFILES/ADD_POST';
export type DELETE_POST_TYPE = 'PROFILES/DELETE_POST';
export type SET_USER_PROFILE_TYPE = 'PROFILES/SET_USER_PROFILE';
export type SET_STATUS_TYPE = 'PROFILES/SET_STATUS';
export type SAVE_PHOTO_TYPE = 'PROFILES/SAVE_PHOTO';

// ----- ACTION TYPE CONSTS -----
export const ADD_POST: ADD_POST_TYPE = 'PROFILES/ADD_POST';
export const DELETE_POST: DELETE_POST_TYPE = 'PROFILES/DELETE_POST';
export const SET_USER_PROFILE: SET_USER_PROFILE_TYPE = 'PROFILES/SET_USER_PROFILE';
export const SET_STATUS: SET_STATUS_TYPE = 'PROFILES/SET_STATUS';
export const SAVE_PHOTO: SAVE_PHOTO_TYPE = 'PROFILES/SAVE_PHOTO';

// ----- ACTIONS/THUNKS -----
export type AddPostAction = Action<ADD_POST_TYPE> & { postText: string };
export type DeletePostAction = Action<DELETE_POST_TYPE> & { postID: number };
export type SetUserProfileAction = Action<SET_USER_PROFILE_TYPE> & { userProfile: any };
export type SetStatusAction = Action<SET_STATUS_TYPE> & { status: string }
export type SavePhotoAction = Action<SAVE_PHOTO_TYPE> & { photos: ProfilePhotos };
export type ProfilesAction = AddPostAction | DeletePostAction | SetUserProfileAction | SetStatusAction | SavePhotoAction

// ----- STATE TYPES -----
export type ProfilePhotos = {
  large: string,
  small: string
}

export interface IProfileContacts {
  facebook: string,
  website: string,
  vk: string,
  twitter: string,
  instagram: string,
  youtube: string,
  github: string,
  mainLink: string,
}

export interface IProfile {
  fullName: string,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  aboutMe: string,
  photos: ProfilePhotos,
  contacts: IProfileContacts
  userId: number
}

export type ProfileInfoData = {
  userProfile: IProfile | null,
  status: string
}

export type Post = {
  id: number,
  text: string,
  likeCount: number
}

export type MyPostsData = {
  myPostStateItems: Post[]
}

export type ProfilePageData = {
  profileInfoData: ProfileInfoData
  myPostsData: MyPostsData
}

export type ProfilesState = {
  profilePageData: ProfilePageData
}
