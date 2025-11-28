import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../base/data/baseurl";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/project` }),
  endpoints: (build) => ({
    createProject: build.mutation<any, Partial<any>>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
    }),

    // ✅ Get All Projects
    getAllProjects: build.query<any, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateProjectMutation, useGetAllProjectsQuery } = projectApi;
