import { createApi } from '@reduxjs/toolkit/query/react';
import { GetUsersResponse } from 'src/api/users/users.api.types';
import { apiBaseQuery } from 'src/api/api';

export const usersApi = createApi({
  reducerPath: 'users-api',
  baseQuery: apiBaseQuery,
  endpoints: build => ({
    getUsers: build.query<GetUsersResponse, { currentPage: number; pageSize: number }>({
      query: ({ currentPage = 1, pageSize = 10 }) => `/users?page=${currentPage}&coufffnt=${pageSize}`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
