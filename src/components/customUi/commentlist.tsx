import React from "react";
import { MdModeComment } from "react-icons/md";

const CommentsList = () => {
  const comments = [
    { id: 1, description: "This is the first comment." },
    { id: 2, description: "Here's another insightful comment." },
    { id: 3, description: "Great discussion happening here!" }
  ];

  return (
    <div className="p-6  mx-auto bg-white text-black shadow-2xl rounded-2xl border border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-700">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-black dark:text-white">
        <MdModeComment className="text-3xl text-gray-700 dark:text-gray-300" /> Comments
      </h2>
      <ul className="space-y-3">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="p-4 bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:text-white"
          >
            {comment.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
