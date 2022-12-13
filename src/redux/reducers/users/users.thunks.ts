import {
  followSuccess,
  setCurrentUsersPage,
  setFetchingMode,
  setFollowingProgress,
  setTotalUsersCount,
  setUsers, unfollowSuccess
} from "./users.action-creators";
import {usersAPI} from "../../../api/Api";
import {Dispatch} from "react";
import {UsersAction} from "./users.types";

export const requestUsers = (currentUsersPage: number, pageSize: number) => {
  return (dispatch: Dispatch<UsersAction>) => {
    dispatch(setFetchingMode(true));
    dispatch(setCurrentUsersPage(currentUsersPage));
    usersAPI.getUsers(currentUsersPage, pageSize).then(data => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setFetchingMode(false));
    });
  };
};

export const follow = (userID: number) => {
  return (dispatch: Dispatch<UsersAction>) => {
    dispatch(setFollowingProgress(true, userID));
    usersAPI.follow(userID).then(data => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userID));
      }
      dispatch(setFollowingProgress(false, userID));
    });
  };
};

export const unfollow = (userID: number) => {
  return (dispatch: Dispatch<UsersAction>) => {
    dispatch(setFollowingProgress(true, userID));
    usersAPI.unFollow(userID).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userID));
      }
      dispatch(setFollowingProgress(false, userID));
    });
  };
};
