import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/' }),
  
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page) => `/api/users?page=${page}`,
    }),

    onRegister: builder.mutation({
      query: (payload) => ({
        url: '/api/register',
        method: 'POST',
        body: payload,
      }),
    }),

    onLogin: builder.mutation({
      query: (payload) => ({
        url: '/api/login',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
})

export const { useGetUsersQuery, useOnRegisterMutation, useOnLoginMutation  } = api