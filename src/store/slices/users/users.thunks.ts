import { usersAPI } from 'src/api/api';
import {
  setFollowState,
  setFollowingProgress,
  setCurrentUsersPage,
  setUsers,
  setTotalUsersCount,
  setFetchingMode,
} from 'src/store/slices/users/users.slice';
import { createAppAsyncThunk } from 'src/store/store';

export const loadUsers = createAppAsyncThunk<{
  currentUsersPage: number;
  pageSize: number;
}>('users/loadUsers', ({ currentUsersPage, pageSize }, { dispatch }) => {
  dispatch(setFetchingMode({ isFetching: true }));
  dispatch(setCurrentUsersPage({ page: currentUsersPage }));
  return usersAPI.getUsers(currentUsersPage, pageSize).then(data => {
    dispatch(setUsers({ users: data.items }));
    dispatch(setTotalUsersCount({ count: data.totalCount }));
    dispatch(setFetchingMode({ isFetching: false }));
  });
});

export const follow = createAppAsyncThunk<{ userId: number }>('users/follow', ({ userId }, { dispatch }) => {
  dispatch(setFollowingProgress({ isFollowing: true, userId }));
  return usersAPI.follow(userId).then(data => {
    if (data.resultCode === 0) {
      dispatch(setFollowState({ isFollow: true, userId }));
    }
    dispatch(setFollowingProgress({ isFollowing: false, userId }));
  });
});

export const unfollow = createAppAsyncThunk<{ userId: number }>('users/unfollow', ({ userId }, { dispatch }) => {
  dispatch(setFollowingProgress({ isFollowing: true, userId }));
  return usersAPI.unFollow(userId).then(data => {
    if (data.resultCode === 0) {
      dispatch(setFollowState({ isFollow: false, userId }));
    }
    dispatch(setFollowingProgress({ isFollowing: false, userId }));
  });
});
