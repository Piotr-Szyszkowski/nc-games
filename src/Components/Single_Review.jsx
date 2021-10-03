import React, { useState } from "react";
import { useParams } from "react-router";
import { getSingleReview } from "../Utils/api";
import CommentAdder from "./CommentAdder";
import Comments from "./Comments";
import CommentsContent from "./Comments_Content";
import Error404 from "./Error404";
import Votes from "./Votes";

const SingleReview = () => {
  const { review_id } = useParams();
  const [displayedReview, setDisplayedReview] = useState({});
  const [comments, setComments] = useState([]);
  const [error, setError] = useState();
  useState(() => {
    setError(null);
    getSingleReview(review_id)
      .then((singleReviewFromApi) => {
        setDisplayedReview(singleReviewFromApi);
      })
      .catch((err) => {
        setError(err.response.status);
      });
  }, []);

  if (error) {
    return <Error404 />;
  }

  return (
    <div className=" rounded-xl mx-1">
      <div className="p-2">
        <img
          className="rounded-xl w-min border-solid border-red-900 border-2"
          src={displayedReview.review_img_url}
          alt="board game"
        />
      </div>
      <div className=" bg-gray-300 rounded-xl my-1 p-1 ">
        <p className="text-xl text-center font-bold text-red-900">
          {displayedReview.title}
        </p>
        <p className="text-sm">Game designed by: {displayedReview.designer}</p>
        <p className="text-sm">Review by: {displayedReview.owner}</p>
        <p className="text-sm">Game category: {displayedReview.category}</p>
      </div>
      <div className="bg-gray-300 rounded-xl my-1 p-1">
        <p className="px-1 ">{displayedReview.review_body}</p>
      </div>
      <Votes review_id={review_id} votes={displayedReview.votes} />
      <Comments>
        <CommentsContent comments={comments} setComments={setComments} />
      </Comments>
      <CommentAdder comments={comments} setComments={setComments} />
    </div>
  );
};

export default SingleReview;
