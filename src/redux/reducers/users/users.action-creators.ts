import {
  FOLLOW,
  FollowAction, IUser,
  SET_CURRENT_USERS_PAGE,
  SET_TOTAL_USERS_COUNT,
  SET_USERS,
  SetCurrentUsersPageAction,
  SetFetchingModeAction,
  SetFollowingProgressAction,
  SetTotalUsersCountAction,
  SetUsersAction,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
  UNFOLLOW,
  UnfollowAction,
} from "./users.types";

export const followSuccess = (userID: number): FollowAction => ({
  type: FOLLOW,
  userID: userID
});

export const unfollowSuccess = (userID: number): UnfollowAction => ({ type: UNFOLLOW, userID: userID });
export const setUsers = (users: IUser[]): SetUsersAction => ({ type: SET_USERS,  users });
export const setTotalUsersCount = (count: number): SetTotalUsersCountAction => ({
  type: SET_TOTAL_USERS_COUNT,
  count
});

export const setCurrentUsersPage = (page: number): SetCurrentUsersPageAction => ({
  type: SET_CURRENT_USERS_PAGE,
  page
});

export const setFetchingMode = (isFetching: boolean): SetFetchingModeAction => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

export const setFollowingProgress = (isFollowing: boolean, userID: number): SetFollowingProgressAction => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFollowing,
  userID
});
