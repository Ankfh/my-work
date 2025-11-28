import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../base/data/baseurl";
import { SkillFormData } from "../types/AddSkillTypes";
import {
  GetSkillsByUserArgs,
  GetSkillsByUserResponse,
} from "../types/skillListTypes";
import {
  GetSkillByIdArgs,
  GetSkillByIdResponse,
} from "../types/getSkillByIdTypes";
import {
  DeleteImageArgs,
  DeleteImageResponse,
} from "../types/deleteImageTypes";

export const skillApi = createApi({
  reducerPath: "skillApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/user-skills` }),
  tagTypes: ["Skill"],
  endpoints: (builder) => ({
    addSkill: builder.mutation<
      { success: boolean; message?: string },
      SkillFormData
    >({
      query: (data) => {
        const formData = new FormData();

        formData.append("userId", data.userId);
        formData.append("name", data.name);
        formData.append("proficiency", data.proficiency);

        // 👇 Check if it's a File or a string (string = already uploaded)
        if (data.image?.[0]) {
          formData.append("image", data.image[0]);
        } else if (typeof data.image === "string") {
          formData.append("existingImage", data.image);
        }

        return {
          url: "/skill",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Skill"],
    }),

    getSkillsByUser: builder.query<
      GetSkillsByUserResponse,
      GetSkillsByUserArgs
    >({
      query: ({ userId }) => ({
        url: `/skills/user/${userId}`,
        method: "GET",
      }),
      providesTags: ["Skill"],
      transformResponse: (res: any): GetSkillsByUserResponse => res,
    }),

    getSkillById: builder.query<GetSkillByIdResponse, GetSkillByIdArgs>({
      query: ({ id }) => ({
        url: `/skill/${id}`,
        method: "GET",
      }),
      providesTags: ["Skill"],
      transformResponse: (res: any): GetSkillByIdResponse => res,
    }),

    // 👇 New deleteImage endpoint
    deleteImage: builder.mutation<DeleteImageResponse, DeleteImageArgs>({
      query: (data) => ({
        url: "/delete-image",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Skill"],
    }),

    deleteSkill: builder.mutation<
  { success: boolean; message?: string },
  { skillId: string }
>({
  query: ({ skillId }) => ({
    url: `/skill/${skillId}`,
    method: "DELETE",
  }),
  invalidatesTags: ["Skill"],
}),
  }),
});

export const {
  useAddSkillMutation,
  useGetSkillsByUserQuery,
  useGetSkillByIdQuery,
  useDeleteImageMutation,

  useDeleteSkillMutation
} = skillApi;
