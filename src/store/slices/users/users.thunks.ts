import { usersAPI } from 'src/api/api';
import { AppAsyncThunkAction } from 'src/store/slices/common/common.types';
import { AnyAction } from 'redux';
import {
  setFollowState,
  setCurrentUsersPage,
  setFetchingMode,
  setFollowingProgress,
  setTotalUsersCount,
  setUsers,
} from 'src/store/slices/users/users.slice';

export const requestUsers =
  (currentUsersPage: number, pageSize: number): AppAsyncThunkAction<AnyAction> =>
  dispatch => {
    dispatch(setFetchingMode({ isFetching: true }));
    dispatch(setCurrentUsersPage({ page: currentUsersPage }));
    return usersAPI.getUsers(currentUsersPage, pageSize).then(data => {
      dispatch(setUsers({ users: data.items }));
      dispatch(setTotalUsersCount({ count: data.totalCount }));
      dispatch(setFetchingMode({ isFetching: false }));
    });
  };

export const follow =
  (userId: number): AppAsyncThunkAction<AnyAction> =>
  dispatch => {
    dispatch(setFollowingProgress({ isFollowing: true, userId }));
    return usersAPI.follow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(setFollowState({ isFollow: true, userId }));
      }
      dispatch(setFollowingProgress({ isFollowing: false, userId }));
    });
  };

export const unfollow =
  (userId: number): AppAsyncThunkAction<AnyAction> =>
  dispatch => {
    dispatch(setFollowingProgress({ isFollowing: true, userId }));
    return usersAPI.unFollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(setFollowState({ isFollow: false, userId }));
      }
      dispatch(setFollowingProgress({ isFollowing: false, userId }));
    });
  };
