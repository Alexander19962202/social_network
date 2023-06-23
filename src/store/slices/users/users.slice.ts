import { initialState } from 'src/store/slices/users/users.initial-state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isUndefined } from 'src/common/helpers/type-guards.helper';
import { usersApi } from 'src/api/users/users.api';

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
  },
  extraReducers: builder => {
    builder
      .addMatcher(usersApi.endpoints.getUsers.matchFulfilled, (state, { payload }) => {
        state.users = payload.items;
        state.totalUsersCount = payload.totalCount;
      })
      .addMatcher(usersApi.endpoints.getUsers.matchRejected, (state, { payload }) => {
        state.users = [];
        state.totalUsersCount = 0;
      });
  },
});

export const { setFollowState, setCurrentUsersPage, setFollowingProgress } = usersSlice.actions;

export default usersSlice.reducer;
