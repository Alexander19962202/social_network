import { IUser } from 'src/store/slices/users/users.types';
import { CommonResponse } from 'src/api/api.types';

export type GetUsersResponse = {
  items: IUser[];
  totalCount: number;
  error: string;
};
export type FollowResponse = CommonResponse<{}>;
export type UnfollowResponse = CommonResponse<{}>;
