import {
  followSuccess,
  setCurrentUsersPage,
  setFetchingMode,
  setFollowingProgress,
  setTotalUsersCount,
  setUsers, unfollowSuccess
} from "./users.action-creators";
import {usersAPI} from "../../../api/api";
import {UsersAction} from "./users.types";
import {AppAsyncThunkAction} from "../common/common.types";

export const requestUsers = (currentUsersPage: number, pageSize: number): AppAsyncThunkAction<UsersAction> => (dispatch) => {
  dispatch(setFetchingMode(true));
  dispatch(setCurrentUsersPage(currentUsersPage));
  return usersAPI.getUsers(currentUsersPage, pageSize).then(data => {
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setFetchingMode(false));
  });
};

export const follow = (userID: number): AppAsyncThunkAction<UsersAction> => (dispatch) => {
  dispatch(setFollowingProgress(true, userID));
  return usersAPI.follow(userID).then(data => {
    if (data.resultCode === 0) {
      dispatch(followSuccess(userID));
    }
    dispatch(setFollowingProgress(false, userID));
  });
};

export const unfollow = (userID: number): AppAsyncThunkAction<UsersAction> => (dispatch) => {
  dispatch(setFollowingProgress(true, userID));
  return usersAPI.unFollow(userID).then(data => {
    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(userID));
    }
    dispatch(setFollowingProgress(false, userID));
  });
};
