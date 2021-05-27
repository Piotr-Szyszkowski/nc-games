import React from "react";

const SingleComment = ({ commentObj }) => {
  return (
    <div key={commentObj.comment_id} className="SingleComment">
      <p className="SingleComment__Author">Author: {commentObj.author}</p>
      <p className="SingleComment__Text">{commentObj.body}</p>
    </div>
  );
};

export default SingleComment;
