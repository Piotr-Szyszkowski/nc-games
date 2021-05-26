import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({ title, author, id }) => {
  return (
    <div key={id} className="ReviewCard">
      <Link className="ReviewCard_Link" to={`/review/${id}`}>
        <p className="ReviewCard__p">Title: {title}</p>
        <p className="ReviewCard__p">Author: {author}</p>
      </Link>
    </div>
  );
};

export default ReviewCard;
