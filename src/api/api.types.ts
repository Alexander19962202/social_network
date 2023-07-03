import { IProfile, ProfilePhotos } from 'src/store/slices/profiles/profiles.types';
import { IAuthData } from 'src/store/slices/auth/auth.types';
import { IUser } from 'src/store/slices/users/users.types';

export enum ResultCode {
  OK = 0,
  NEED_TO_GET_CAPTCHA_URL = 10,
}

// ----- Responses types -----
export type CommonResponse<T> = {
  data: T;
  fieldsErrors: string[];
  messages: string[];
  resultCode: ResultCode;
};

// Profiles API
export type GetProfileResponse = IProfile;
export type GetProfileStatus = string;
export type SetProfileStatusResponse = CommonResponse<{}>;
export type SetProfilePhotoResponse = CommonResponse<{ photos: ProfilePhotos }>;
export type SetProfileResponse = CommonResponse<{}>;

//Auth API
export type AuthMeResponse = CommonResponse<IAuthData>;
export type LoginResponse = CommonResponse<{ userId: string }>;
export type GetCaptchaUrlResponse = { url: string };
export type LogoutResponse = CommonResponse<{}>;

//Users API
export type GetUsersResponse = {
  items: IUser[];
  totalCount: number;
  error: string;
};
export type FollowResponse = CommonResponse<{}>;
export type UnfollowResponse = CommonResponse<{}>;
