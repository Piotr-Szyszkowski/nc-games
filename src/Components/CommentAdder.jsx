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
    <div className="bg-gray-300  p-1 rounded-lg mt-1 mb-4 md:max-w-xl md:mx-auto">
      <form onSubmit={handleCommentSubmit}>
        <label htmlFor="commentTxt" className="mt-0">
          Comment:
        </label>

        <textarea
          contentEditable
          className="w-full rounded-lg"
          rows="2"
          cols="70"
          type="text"
          id="commentTxt"
          value={commentTxt}
          onChange={(event) => {
            setCommentTxt(event.target.value);
          }}
          required
        />

        <button className="ml-2 bg-gray-900 text-gray-200 p-1 px-2 rounded-lg hover:text-red-800 hover:bg-gray-400">
          Add Comment
        </button>
      </form>
    </div>
  );
};

//g
export default CommentAdder;
