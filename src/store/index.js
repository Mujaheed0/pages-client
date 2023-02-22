import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/Auth/slice";
import { postsApi } from "./features/posts/api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
