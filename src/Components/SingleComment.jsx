import React from "react";

const SingleComment = ({ commentObj }) => {
  return (
    <div
      key={commentObj.comment_id}
      className="bg-gray-300 my-1 p-1 rounded-lg md:max-w-max"
    >
      <p className="italic break-words">{commentObj.body}</p>
      <p className="">By: {commentObj.author}</p>
    </div>
  );
};

export default SingleComment;
