import React from "react";
import { Link } from "react-router-dom";
import { dateConverter } from "../Utils/dateConverter";

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
      className="font-heebo m-1 p-1 mt-3 bg-gray-300 rounded-md bg-opacity-90 py-2"
    >
      <Link className="" to={`/review/${id}`}>
        <p className="text-xl text-center font-bold text-red-900">{title}</p>
        <p className="">By: {author}</p>
        <div className="font-andale-mono text-xs flex mx-2">
          <p className="mx-2">Comments: {comment_count}</p>
          <p className="mx-2">Votes: {votes}</p>
          <p className="mx-2">Created: {dateConverter(created_at)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ReviewCard;
