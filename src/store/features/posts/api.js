import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backendUrl } from "../../../utils/backendUrl";
const token = localStorage.getItem("assignment/user-id");
const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: backendUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      providesTags: () => {
        return ["Posts"];
      },
      query: () => ({
        url: "/api/posts",
      }),
    }),
    addPost: builder.mutation({
      invalidatesTags: () => {
        return ["Posts"];
      },
      query: (data) => ({
        url: "/api/posts",
        method: "POST",
        body: data,
      }),
    }),
    updatePost: builder.mutation({
      invalidatesTags: () => {
        return ["Posts"];
      },
      query: ({ id, data }) => ({
        url: `/api/posts/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deletePost: builder.mutation({
      invalidatesTags: () => {
        return ["Posts"];
      },
      query: (id) => ({
        url: `/api/posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useLazyGetPostsQuery,
} = postsApi;
export { postsApi };
