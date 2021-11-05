import {usersAPI} from "../Api/Api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_USERS_PAGE = 'SET_CURRENT_USERS_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentUsersPage: 1,
    pagesRange: 20,
    isFetching: false,
    usersFollowing: []
};

const usersPage_reducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case SET_CURRENT_USERS_PAGE: {
            return {
                ...state,
                currentUsersPage: action.page
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                usersFollowing: action.isFollowing
                    ? [...state.usersFollowing, action.userID]
                    : state.usersFollowing.filter(ID => ID != action.userID)
            }
        }
        default:
            return state;
    }
};

const followSuccess = (userID) => ({type: FOLLOW, userID: userID});
const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID: userID});
const setUsers = (users) => ({type: SET_USERS, users: users});
const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count: count});
const setCurrentUsersPage = (page) => ({type: SET_CURRENT_USERS_PAGE, page: page});
const setFetchingMode = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
const setFollowingProgress = (isFollowing, userID) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFollowing: isFollowing,
    userID: userID
});

export const getUsers = (currentUsersPage, pageSize) => {
    return (dispatch) => {
        dispatch(setFetchingMode(true));
        dispatch(setCurrentUsersPage(currentUsersPage));
        usersAPI.getUsers(currentUsersPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setFetchingMode(false));
        });
    }
};

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, userID));
        usersAPI.follow(userID).then(data => {
            if (data.resultCode === 0)
                dispatch(followSuccess(userID));
            dispatch(setFollowingProgress(false, userID));
        });
    }
};

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, userID));
        usersAPI.unFollow(userID).then(data => {
            if (data.resultCode === 0)
                dispatch(unfollowSuccess(userID));
            dispatch(setFollowingProgress(false, userID));
        });
    }
};

export default usersPage_reducer;