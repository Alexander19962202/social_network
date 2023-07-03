import { createApi } from '@reduxjs/toolkit/query/react';
import { FollowResponse, GetUsersResponse, UnfollowResponse } from 'src/api/api.types';
import { apiBaseQuery } from 'src/api/api';

/**
 * Example of using RTK Query
 * At the moment thunks using is more comfortable
 */
export const usersApi = createApi({
  reducerPath: 'users-api',
  baseQuery: apiBaseQuery,
  endpoints: build => ({
    getUsers: build.query<GetUsersResponse, { currentPage: number; pageSize: number }>({
      query: ({ currentPage = 1, pageSize = 10 }) => `/users?page=${currentPage}&count=${pageSize}`,
    }),
    follow: build.mutation<FollowResponse, { userId: number }>({
      query: ({ userId }) => ({
        url: `/follow/${userId}`,
        method: 'POST',
        body: {},
      }),
    }),
    unfollow: build.mutation<UnfollowResponse, { userId: number }>({
      query: userId => ({
        url: `/follow/${userId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetUsersQuery, useFollowMutation, useUnfollowMutation } = usersApi;
