import { updateObjectInArray } from 'src/common/helpers/object-helpers';
import {
  FOLLOW,
  SET_CURRENT_USERS_PAGE,
  SET_TOTAL_USERS_COUNT,
  SET_USERS,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
  UNFOLLOW,
  UsersAction,
  UsersState,
} from './users.types';
import { initialState } from './users.initial-state';

const usersReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', { followed: true }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', { followed: false }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }
    case SET_CURRENT_USERS_PAGE: {
      return {
        ...state,
        currentUsersPage: action.page,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        usersFollowing: action.isFollowing
          ? [...state.usersFollowing, action.userID]
          : state.usersFollowing.filter(id => id !== action.userID),
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
