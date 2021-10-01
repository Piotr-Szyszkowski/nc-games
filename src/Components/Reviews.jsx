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
    <div className="p-1 bg-gray-200 bg-opacity-30 rounded-md">
      <header className="text-center bg-gray-100 max-w-max mx-auto px-1 rounded-md bg-opacity-70 Class border-solid border-2 border-red-900 mb-2">
        <h2 className="font-courier-new font-bold text-xl  ">
          Reviews of {category} games:
        </h2>
      </header>
      <section className="ReviewSorting">
        <form input="submit" className="ml-2">
          <label htmlFor="sortCategory" className="font-bold pr-2 ">
            Sorted by:
          </label>
          <select
            id="sortCategory"
            name="sortCategory"
            className="font-inconsolata p-1 bg-gray-200 rounded-md  "
            onChange={(event) => {
              const chosenSortBy = event.target.value;
              handleSortByChange(chosenSortBy);
            }}
          >
            <option className="font-inconsolata">Created at</option>
            <option className="font-inconsolata">Votes</option>
            <option className="font-inconsolata">Comments</option>
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
