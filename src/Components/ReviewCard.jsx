import React from "react";

const ReviewCard = ({ title, author, id }) => {
  return (
    <div key={id} className="ReviewCard">
      <p className="ReviewCard__p">Title: {title}</p>
      <p className="ReviewCard__p">Author: {author}</p>
    </div>
  );
};

export default ReviewCard;
