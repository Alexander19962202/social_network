const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_USERS_PAGE = 'SET_CURRENT_USERS_PAGE';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentUsersPage: 1,
    pagesRange: 10
};

const usersPage_reducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return  {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userID) {
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
        default:
            return state;
    }
};

export const followAC = (userID) => ({ type: FOLLOW, userID: userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID: userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });
export const setTotalUsersCountAC = (count) => ({ type: SET_TOTAL_USERS_COUNT, count: count});
export const setCurrentUsersPage = (page) => ({ type:SET_CURRENT_USERS_PAGE, page: page});

export default usersPage_reducer;