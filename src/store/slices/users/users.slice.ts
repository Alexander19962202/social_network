import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { isUndefined } from 'src/common/helpers/type-guards.helper';
import { initialState } from 'src/store/slices/users/users.initial-state';
import { IUser } from 'src/store/slices/users/users.types';

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFollowState(state, action: PayloadAction<{ isFollow: boolean; userId: number }>) {
      const user = state.users.find(user => user.id === action.payload.userId);
      if (!isUndefined(user)) {
        user.followed = action.payload.isFollow;
      }
    },
    setCurrentUsersPage(state, action: PayloadAction<{ page: number }>) {
      state.currentUsersPage = action.payload.page;
    },
    setFollowingProgress(state, action: PayloadAction<{ isFollowing: boolean; userId: number }>) {
      const { isFollowing, userId } = action.payload;
      state.usersFollowing = isFollowing
        ? [...state.usersFollowing, userId]
        : state.usersFollowing.filter(id => id !== userId);
    },
    setUsers(state, action: PayloadAction<{ users: IUser[] }>) {
      state.users = action.payload.users;
    },
    setTotalUsersCount(state, action: PayloadAction<{ count: number }>) {
      state.totalUsersCount = action.payload.count;
    },
    setFetchingMode(state, action: PayloadAction<{ isFetching: boolean }>) {
      state.isFetching = action.payload.isFetching;
    },
  },
});

export const {
  setFollowState,
  setCurrentUsersPage,
  setFollowingProgress,
  setUsers,
  setTotalUsersCount,
  setFetchingMode,
} = usersSlice.actions;

export default usersSlice.reducer;
