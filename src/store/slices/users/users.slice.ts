import { IUser } from 'src/store/slices/users/users.types';
import { initialState } from 'src/store/slices/users/users.initial-state';
import { createSlice } from '@reduxjs/toolkit';
import { isUndefined } from 'src/common/helpers/type-guards.helper';

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFollowState(state, action: { payload: { isFollow: boolean; userId: number } }) {
      const user = state.users.find(user => user.id === action.payload.userId);
      if (!isUndefined(user)) {
        user.followed = action.payload.isFollow;
      }
    },
    setUsers(state, action: { payload: { users: IUser[] } }) {
      state.users = action.payload.users;
    },
    setTotalUsersCount(state, action: { payload: { count: number } }) {
      state.totalUsersCount = action.payload.count;
    },
    setCurrentUsersPage(state, action: { payload: { page: number } }) {
      state.currentUsersPage = action.payload.page;
    },
    setFetchingMode(state, action: { payload: { isFetching: boolean } }) {
      state.isFetching = action.payload.isFetching;
    },
    setFollowingProgress(state, action: { payload: { isFollowing: boolean; userId: number } }) {
      const { isFollowing, userId } = action.payload;
      state.usersFollowing = isFollowing
        ? [...state.usersFollowing, userId]
        : state.usersFollowing.filter(id => id !== userId);
    },
  },
});

export const {
  setFollowState,
  setUsers,
  setTotalUsersCount,
  setCurrentUsersPage,
  setFollowingProgress,
  setFetchingMode,
} = usersSlice.actions;

export default usersSlice.reducer;
