// ----- ACTION TYPES -----
import {Thunk} from "../common/common.types";

export type ADD_POST_TYPE = 'PROFILE/ADD_POST';
export type DELETE_POST_TYPE = 'PROFILE/DELETE_POST';
export type SET_USER_PROFILE_TYPE = 'PROFILE/SET_USER_PROFILE';
export type SET_STATUS_TYPE = 'PROFILE/SET_STATUS';
export type SAVE_PHOTO_TYPE = 'PROFILE/SAVE_PHOTO';

// ----- ACTION TYPE CONSTS -----
export const ADD_POST: ADD_POST_TYPE = 'PROFILE/ADD_POST';
export const DELETE_POST: DELETE_POST_TYPE = 'PROFILE/DELETE_POST';
export const SET_USER_PROFILE: SET_USER_PROFILE_TYPE = 'PROFILE/SET_USER_PROFILE';
export const SET_STATUS: SET_STATUS_TYPE = 'PROFILE/SET_STATUS';
export const SAVE_PHOTO: SAVE_PHOTO_TYPE = 'PROFILE/SAVE_PHOTO';

// ----- ACTIONS/THUNKS -----
export type AddPostAction = { type: ADD_POST_TYPE, postText: string };
export type DeletePostAction = { type: DELETE_POST_TYPE, postID: number };
export type SetUserProfileAction = { type: SET_USER_PROFILE_TYPE, userProfile: any };
export type SetStatusAction = { type: SET_STATUS_TYPE, status: string }
export type SavePhotoAction = { type: SAVE_PHOTO_TYPE, photos: any };
export type ProfilesAction = AddPostAction | DeletePostAction | SetUserProfileAction | SetStatusAction | SavePhotoAction
export type ProfilesThunk = Thunk<ProfilesAction>

// ----- STATE TYPES -----
export type ProfileInfoData = {
  userProfile: any,
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
