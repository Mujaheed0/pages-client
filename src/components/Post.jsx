import React, { useState } from "react";
import DeletePostModal from "./DeletPostModal";
import EditPostModal from "./EditPostModal";

function Post({ post }) {
  const { title, content, scheduledDate } = post;
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg">
      <h2 className="mb-2 text-lg font-medium">{title}</h2>
      <p>{content}</p>
      <p className="text-sm text-gray-500">
        Scheduled for: {new Date(scheduledDate).toLocaleString()}
      </p>
      <div className="mt-4 flex justify-end">
        <button
          className="mr-4 rounded-lg bg-blue-500 py-2 px-4 font-medium text-white transition-colors duration-200 hover:bg-blue-600"
          onClick={() => setShowEditModal(true)}
        >
          Edit
        </button>
        <button
          className="rounded-lg bg-red-500 py-2 px-4 font-medium text-white transition-colors duration-200 hover:bg-red-600"
          onClick={() => setShowDeleteModal(true)}
        >
          Delete
        </button>
      </div>
      <EditPostModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        post={post}
      ></EditPostModal>
      <DeletePostModal
        post={post}
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
      ></DeletePostModal>
    </div>
  );
}

export default Post;
