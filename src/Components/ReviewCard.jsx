import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({
  title,
  author,
  id,
  created_at,
  comment_count,
  votes,
}) => {
  return (
    <div
      key={id}
      className="ReviewCard m-1 p-1 mt-3 bg-blue-200 rounded-md bg-opacity-90"
    >
      <Link className="ReviewCard_Link" to={`/review/${id}`}>
        <p className="ReviewCard__p">Title: {title}</p>
        <p className="ReviewCard__p">Author: {author}</p>
        <p className="ReviewCard__FootNote">Comments: {comment_count}</p>
        <p className="ReviewCard__FootNote">Votes: {votes}</p>
        <p className="ReviewCard__FootNote">Created: {created_at}</p>
      </Link>
    </div>
  );
};

export default ReviewCard;
