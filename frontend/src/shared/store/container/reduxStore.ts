// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../../../components/user/api/userApi";
import { assistantApi } from "../../../components/assistant/api/assistanApi";
import { profileApi } from "../../../components/profile/api/profileApi";
import { skillApi } from "../../../components/skill/api/skillApi";
import { projectApi } from "../../../components/Project/services/projectApi";

export const store = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [assistantApi.reducerPath]: assistantApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [skillApi.reducerPath]: skillApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      projectApi.middleware,
      userApi.middleware,
      skillApi.middleware,
      assistantApi.middleware,
      profileApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
