import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';

const getUsersSelector = (state: RootState) => state.users.users;
export const getUsers = createSelector(getUsersSelector, users => {
  return users.filter(u => u.id);
});
export const usersStatePageSize = (state: RootState) => state.users.pageSize;
export const usersStateTotalUsersCount = (state: RootState) => state.users.totalUsersCount;
export const usersStateCurrentPage = (state: RootState) => state.users.currentUsersPage;
export const usersStateUsersFollowing = (state: RootState) => state.users.usersFollowing;
export const usersStatePagesRange = (state: RootState) => state.users.pagesRange;
export const usersStateIsFetching = (state: RootState) => state.users.isFetching;
