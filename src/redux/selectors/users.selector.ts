import {createSelector} from "reselect";
import {RootState} from "src/redux/redux-store";

const getUsersSelector = (state: RootState) => state.usersPage.users.filter((u) => u.id > 0)
export const getUsers = createSelector(getUsersSelector, (users) => users.filter(() => true))
export const getPageSize = (state: RootState) => state.usersPage.pageSize
export const getTotalUsersCount = (state: RootState) => state.usersPage.totalUsersCount
export const getCurrentPage = (state: RootState) => state.usersPage.currentUsersPage
export const getIsFetching = (state: RootState) => state.usersPage.isFetching
export const getFollowingInProgress = (state: RootState) => state.usersPage.usersFollowing
export const getPagesRange = (state: RootState) => state.usersPage.pagesRange
