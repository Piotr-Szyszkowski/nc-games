import React from "react";

const SingleComment = ({ commentObj }) => {
  return (
    <div
      key={commentObj.comment_id}
      className="bg-gray-300 my-1 p-1 rounded-lg"
    >
      <p className="">Author: {commentObj.author}</p>
      <p className="">{commentObj.body}</p>
    </div>
  );
};

export default SingleComment;
