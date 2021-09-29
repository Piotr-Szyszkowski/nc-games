import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviews } from "../Utils/api";
import ReviewCard from "./ReviewCard";
import Error404 from "./Error404";

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [stateOfSortBy, setStateOfSortBy] = useState("Created at");
  const [error, setError] = useState();
  const { category } = useParams();

  useEffect(() => {
    setError(null);
    getReviews(category, stateOfSortBy)
      .then((reviewsFromApi) => {
        setReviewsList(reviewsFromApi);
      })
      .catch((err) => {
        setError(err.response.status);
      });
  }, [category, stateOfSortBy]);

  const handleSortByChange = (sortBy) => {
    setStateOfSortBy(sortBy);
  };

  if (error) {
    return <Error404 />;
  }

  return (
    <div className="Reviews__MainReviewsContainer p-1">
      <header className="Reviews__Header">
        <h2 className="Reviews__Header__Title">Reviews of {category} games:</h2>
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
            <option>Comments</option>
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
