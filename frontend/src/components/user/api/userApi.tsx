/**
 * TypeScript RTK Query slice for user operations with inline endpoint logic.
 */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../base/data/baseurl";
import {
  GetUserResponse,
  LoginUserArgs,
  LoginUserResponse,
  RegisterUserArgs,
  RegisterUserResponse,
} from "../types/userApiType";

const baseQuery = fetchBaseQuery({ baseUrl: `${baseUrl}/user` });

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterUserResponse, RegisterUserArgs>({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
    loginUser: builder.mutation<LoginUserResponse, LoginUserArgs>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
    getUserInfo: builder.query<GetUserResponse, void>({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    // Add more endpoints as needed
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserInfoQuery,
} = userApi;
