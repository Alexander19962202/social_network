// ----- ACTION TYPES -----
import {ProfilePhotos} from "../profiles/profiles.types";

export type FOLLOW_TYPE = 'USERS/FOLLOW';
export type UNFOLLOW_TYPE = 'USERS/UNFOLLOW';
export type SET_USERS_TYPE = 'USERS/SET_USERS';
export type SET_TOTAL_USERS_COUNT_TYPE = 'USERS/SET_TOTAL_USERS_COUNT';
export type SET_CURRENT_USERS_PAGE_TYPE = 'USERS/SET_CURRENT_USERS_PAGE';
export type TOGGLE_IS_FETCHING_TYPE = 'USERS/TOGGLE_IS_FETCHING';
export type TOGGLE_IS_FOLLOWING_PROGRESS_TYPE = 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS';

// ----- ACTION TYPE CONSTS -----
export const FOLLOW: FOLLOW_TYPE = 'USERS/FOLLOW';
export const UNFOLLOW: UNFOLLOW_TYPE = 'USERS/UNFOLLOW';
export const SET_USERS: SET_USERS_TYPE = 'USERS/SET_USERS';
export const SET_TOTAL_USERS_COUNT: SET_TOTAL_USERS_COUNT_TYPE = 'USERS/SET_TOTAL_USERS_COUNT';
export const SET_CURRENT_USERS_PAGE: SET_CURRENT_USERS_PAGE_TYPE = 'USERS/SET_CURRENT_USERS_PAGE';
export const TOGGLE_IS_FETCHING: TOGGLE_IS_FETCHING_TYPE = 'USERS/TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS: TOGGLE_IS_FOLLOWING_PROGRESS_TYPE = 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS';

// ----- ACTIONS/THUNKS -----
export type FollowAction = { type: FOLLOW_TYPE, userID: number }
export type UnfollowAction = { type: UNFOLLOW_TYPE, userID: number }
export type SetUsersAction = { type: SET_USERS_TYPE, users: any }
export type SetTotalUsersCountAction = { type: SET_TOTAL_USERS_COUNT_TYPE, count: number }
export type SetCurrentUsersPageAction = { type: SET_CURRENT_USERS_PAGE_TYPE, page: number }
export type SetFetchingModeAction = { type: TOGGLE_IS_FETCHING_TYPE, isFetching: boolean }
export type SetFollowingProgressAction = { type: TOGGLE_IS_FOLLOWING_PROGRESS_TYPE, isFollowing: boolean, userID: number }
export type UsersAction = FollowAction
  | UnfollowAction
  | SetUsersAction
  | SetTotalUsersCountAction
  | SetCurrentUsersPageAction
  | SetFetchingModeAction
  | SetFollowingProgressAction

// ----- STATE TYPES -----
export interface IUser {
  followed: boolean
  id: number
  name: string
  photos: ProfilePhotos
  status: string | null
  uniqueUrlName: string | null
}

export type UsersState = {
  users: IUser[],
  pageSize: number,
  totalUsersCount: number,
  currentUsersPage: number,
  isFetching: boolean,
  usersFollowing: number[]
};
