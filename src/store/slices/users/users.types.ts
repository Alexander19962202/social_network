import { ProfilePhotos } from 'src/store/slices/profiles/profiles.types';

export interface IUser {
  followed: boolean;
  id: number;
  name: string;
  photos: ProfilePhotos;
  status: string | null;
  uniqueUrlName: string | null;
}

export type UsersState = {
  users: IUser[];
  pageSize: number;
  pagesRange: number;
  totalUsersCount: number;
  currentUsersPage: number;
  usersFollowing: number[];
  isFetching: boolean;
};
