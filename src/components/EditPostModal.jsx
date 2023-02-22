import { useForm } from "react-hook-form";
import { useUpdatePostMutation } from "../store/features/posts/api";
import { Modal } from "./Modal";

export default function EditPostModal({ post, isOpen, onClose }) {
  const [updatePost, result] = useUpdatePostMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: post.title,
      content: post.content,
      scheduledDate: post.scheduledDate,
    },
  });

  const onSubmit = (data) => {
    updatePost({
      id: post._id,
      data: {
        title: data.title,
        content: data.content,
        scheduledDate: data.scheduledDate,
      },
    });
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal openModal={isOpen} setOpenModal={onClose}>
      {" "}
      <div className="transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-lg">
        <div className="border-b border-gray-300 bg-gray-200 px-4 py-3">
          <h3 className="text-lg font-medium" id="modal-title">
            Edit Post
          </h3>
        </div>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="mb-2 block font-medium text-gray-700">
                Title
              </label>
              <input
                className="w-full rounded-lg border border-gray-400 p-2"
                type="text"
                name="title"
                {...register("title", { required: "true" })}
              />
              {errors.title && (
                <span className="text-red-500">Title is required</span>
              )}
            </div>
            <div className="mb-4">
              <label className="mb-2 block font-medium text-gray-700">
                Content
              </label>
              <textarea
                className="w-full rounded-lg border border-gray-400 p-2"
                name="content"
                {...register("content", { required: "true" })}
                rows="4"
              ></textarea>
              {errors.content && (
                <span className="text-red-500">Content is required</span>
              )}
            </div>
            <div className="mb-4">
              <label className="mb-2 block font-medium text-gray-700">
                Schedule Date
              </label>
              <input
                type="datetime-local"
                name="scheduledDate"
                {...register("scheduledDate", { required: "true" })}
              />
              {errors.scheduledDate && (
                <span className="text-red-500">Please select a valid date</span>
              )}
            </div>
            <div className="flex justify-end">
              <button
                className="mr-2 rounded-lg bg-gray-200 py-2 px-4 font-medium"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="mr-2 rounded-lg bg-blue-500 py-2 px-4 font-medium text-white"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
