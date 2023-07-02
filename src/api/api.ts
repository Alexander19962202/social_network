import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import axios from 'axios';
import { IProfile } from 'src/store/slices/profiles/profiles.types';
import {
  AuthMeResponse,
  GetCaptchaUrlResponse,
  GetProfileResponse,
  GetProfileStatus,
  LoginResponse,
  LogoutResponse,
  SetProfilePhotoResponse,
  SetProfileResponse,
  SetProfileStatusResponse,
} from 'src/api/api.types';
import { FollowResponse, GetUsersResponse, UnfollowResponse } from 'src/api/api.types';

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY,
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get<GetUsersResponse>(`users?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data;
    });
  },

  follow(userId: number) {
    return instance.post<FollowResponse>(`follow/${userId}`, {}).then(response => {
      return response.data;
    });
  },

  unFollow(userId: number) {
    return instance.delete<UnfollowResponse>(`follow/${userId}`).then(response => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<GetProfileResponse>(`profile/${userId}`).then(response => {
      return response.data;
    });
  },

  getProfileStatus(userId: number) {
    return instance.get<GetProfileStatus>(`profile/status/${userId}`).then(response => response.data);
  },

  setProfileStatus(newStatus: string) {
    return instance
      .put<SetProfileStatusResponse>('profile/status', { status: newStatus })
      .then(response => response.data);
  },

  setProfilePhoto(photoFile: File) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return instance
      .put<SetProfilePhotoResponse>(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => response.data);
  },

  setProfile(profile: IProfile) {
    return instance.put<SetProfileResponse>(`profile`, profile).then(response => response.data);
  },
};

export const authAPI = {
  authMe() {
    return instance.get<AuthMeResponse>('auth/me').then(response => {
      return response.data;
    });
  },

  login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
    return instance
      .post<LoginResponse>('auth/login/', { email, password, rememberMe, captcha })
      .then(response => response.data);
  },

  logout() {
    return instance.delete<LogoutResponse>('auth/login').then(response => response.data);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get<GetCaptchaUrlResponse>(`security/get-captcha-url`).then(response => response.data);
  },
};

export const apiBaseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  credentials: 'include',
  headers: {
    'API-KEY': `${process.env.REACT_APP_API_KEY}`,
  },
});
