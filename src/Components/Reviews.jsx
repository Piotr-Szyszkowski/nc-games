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

  const handleSortByChange = (sortBy) => {
    console.log(sortBy);
  };

  return (
    <div className="Reviews__MainReviewsContainer">
      <header className="Reviews__Header">
        <h2>Reviews of {category} games:</h2>
      </header>
      <section className="ReviewSorting">
        <form input="submit" className="ReviewSorting__SortBy__Form">
          <label
            htmlFor="sortCategory"
            className="ReviewSorting__SortBy__Form__Label"
          >
            Sort by:
          </label>
          <select
            id="sortCategory"
            name="sortCategory"
            className="ReviewSorting__SortBy__Form__SelectField"
            onChange={(event) => {
              const chosenSortBy = event.target.value;
              handleSortByChange(chosenSortBy);
            }}
          >
            <option>Created at</option>
            <option>Votes</option>
            <option>Commentst</option>
          </select>
        </form>
      </section>
      {reviewsList.map(
        ({ title, owner, review_id, created_at, comment_count, votes }) => {
          return (
            <ReviewCard
              key={review_id}
              title={title}
              author={owner}
              id={review_id}
              created_at={created_at}
              comment_count={comment_count}
              votes={votes}
            />
          );
        }
      )}
    </div>
  );
};

export default Reviews;
