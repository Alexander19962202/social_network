import { UsersState } from './users.types';

export const initialState: UsersState = {
  users: [],
  isFetching: false,
  pageSize: 10,
  pagesRange: 10,
  totalUsersCount: 0,
  currentUsersPage: 1,
  usersFollowing: [],
};
