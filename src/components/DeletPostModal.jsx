import React from "react";
import { useDeletePostMutation } from "../store/features/posts/api";
import { Modal } from "./Modal";

function DeletePostModal(props) {
  const { isOpen, onClose, post } = props;
  const [deletePost, result] = useDeletePostMutation();

  return (
    <Modal openModal={isOpen} setOpenModal={onClose}>
      <div className="transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-lg">
        <div className="border-b border-gray-300 bg-gray-200 px-4 py-3">
          <h3 className="text-lg font-medium" id="modal-title">
            Delete Post
          </h3>
        </div>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <p className="mb-4 text-gray-700">
            Are you sure you want to delete this post?
          </p>
          <div className="flex justify-end">
            <button
              className="mr-2 rounded-lg bg-gray-200 py-2 px-4 font-medium"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="mr-2 rounded-lg bg-red-500 py-2 px-4 font-medium text-white"
              onClick={() => deletePost(post._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default DeletePostModal;
