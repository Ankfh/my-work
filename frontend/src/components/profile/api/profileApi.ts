// src/components/profile/api/profileApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../base/data/baseurl";
import {
  AddProfileArgs,
  AddProfileResponse,
  GetProfileArgs,
  GetProfileResponse,
} from "../types/AddProfileApiTypes";
import { AddLinksAndContactsInputs } from "../types/AddLinksAndContactsTypes";

const baseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}/profile`,
});

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery,
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    addProfile: builder.mutation<AddProfileResponse, AddProfileArgs>({
      query: (formData) => {
        console.log(formData, "data form data ..");
        const body = new FormData();
        body.append("name", formData.name);
        body.append("profession", formData.profession);
        body.append("userId", formData.userId);
        if (formData.image?.[0]) {
          body.append("image", formData.image[0]);
        }

        return {
          url: "/add",
          method: "POST",
          body,
          formData: true,
        };
      },
      invalidatesTags: ["Profile"],
    }),
    getProfile: builder.query<GetProfileResponse, GetProfileArgs>({
      query: ({ userId }) => ({
        url: `/get-by-user/${userId}`,
        method: "GET",
      }),
      providesTags: ["Profile"],
    }),
    updateProfile: builder.mutation<
      { success: boolean; message?: string },
      {
        userId: string;
        name?: string;
        profession?: string;
        socialLinks?: AddLinksAndContactsInputs;
        contacts?: AddLinksAndContactsInputs;
      }
    >({
      query: ({ userId, ...rest }) => ({
        url: "/update", // Using POST to /add for updating
        method: "POST",
        body: {
          userId,
          ...rest,
        },
      }),
      invalidatesTags: ["Profile"],
    }),
    // Add more endpoints if needed
  }),
});

export const {
  useAddProfileMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = profileApi;
