import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviews } from "../Utils/api";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getReviews(category).then((reviewsFromApi) => {
      setReviewsList(reviewsFromApi);
    });
  }, [category]);

  return (
    <div className="Reviews__MainReviewsContainer">
      <header className="Reviews__Header">
        <h2>Reviews of {category} games:</h2>
      </header>
      {reviewsList.map(({ title, owner, review_id }) => {
        return (
          <ReviewCard
            key={review_id}
            title={title}
            author={owner}
            id={review_id}
          />
        );
      })}
    </div>
  );
};

export default Reviews;
