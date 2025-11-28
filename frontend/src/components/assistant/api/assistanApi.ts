// services/api/assistantApi.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../base/data/baseurl";
import { SendMessageArgs, SendMessageResponse } from "../types/assistantTypes";

const baseQuery = fetchBaseQuery({ baseUrl: `${baseUrl}/assistant` });

export const assistantApi = createApi({
  reducerPath: "assistantApi",
  baseQuery,
  tagTypes: ["Assistant"],
  endpoints: (builder) => ({
    sendMessage: builder.mutation<SendMessageResponse, SendMessageArgs>({
      query: (body) => ({
        url: "/message",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Assistant"],
    }),
  }),
});

export const { useSendMessageMutation } = assistantApi;
