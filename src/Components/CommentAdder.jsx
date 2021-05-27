import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../Contexts/UserContext";
import { postComment } from "../Utils/api";

const CommentAdder = ({ setComments, comments }) => {
  const { user } = useContext(UserContext);
  const [commentTxt, setCommentTxt] = useState("");
  const { review_id } = useParams();
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const commentDetails = { commentTxt, review_id, username: user.username };
    postComment(commentDetails).then((newCommentObj) => {
      setComments([newCommentObj, ...comments]);
      setCommentTxt("");
    });
  };
  return (
    <div className="CommentAdder">
      <form onSubmit={handleCommentSubmit}>
        <label htmlFor="commentTxt">Comment:</label>
        <input
          type="text"
          id="commentTxt"
          value={commentTxt}
          onChange={(event) => {
            setCommentTxt(event.target.value);
          }}
          required
        />
        <button>Add Comment</button>
      </form>
    </div>
  );
};

export default CommentAdder;
