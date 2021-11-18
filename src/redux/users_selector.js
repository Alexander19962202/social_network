import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users.filter(u => u.id > 0);
};
export const getUsers = createSelector(getUsersSelector,
    (users) => {
        return users.filter(u => true);
    });

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentUsersPage;
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state) => {
    return state.usersPage.usersFollowing;
};
export const getPagesRange = (state) => {
    return state.usersPage.pagesRange;
};