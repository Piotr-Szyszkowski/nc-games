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

  console.log(reviewsList);

  return (
    <div>
      <h2>Reviews go here on {category} games</h2>
      <ReviewCard />
    </div>
  );
};

export default Reviews;
