import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useAddPostMutation } from "../store/features/posts/api";
export default function AddPost() {
  const [addPost, result] = useAddPostMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitPost = (data) => {
    if (!data.scheduledDate || Date.parse(data.scheduledDate) <= Date.now()) {
      toast.error("Please enter a future date for scheduling the post.");
      return;
    }
    if (!data.title || !data.content) {
      toast.error("Please enter a title and content for the post.");
      return;
    }
    addPost(data);
    reset();
  };

  return (
    <div className="mb-3 rounded-lg bg-white p-4 shadow-lg">
      <h2 className="mb-2 text-lg font-medium">Add a New Post</h2>
      <form onSubmit={handleSubmit(submitPost)}>
        <div className="mb-4">
          <label className="mb-2 block font-medium text-gray-700">Title</label>
          <input
            className="w-full rounded-lg border border-gray-400 p-2"
            {...register("title", { required: "true" })}
          />
          {errors.title && <span>Title is required</span>}
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block font-medium text-gray-700"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            className="w-full rounded-lg border border-gray-400 p-2"
            {...register("content", { required: "true" })}
          ></textarea>
          {errors.content && <span>Content is required</span>}
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block font-medium text-gray-700"
            htmlFor="schedule-date"
          >
            Schedule Date
          </label>
          <input
            type="datetime-local"
            {...register("scheduledDate", { required: "true" })}
            name="scheduledDate"
          />{" "}
          {errors.scheduledDate && <span>Select Valid Schedule Date</span>}
        </div>
        <button
          type="submit"
          className="rounded-lg bg-blue-500 py-2 px-4 font-medium text-white transition-colors duration-200 hover:bg-blue-600"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}
