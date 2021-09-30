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
    <div className="bg-gray-300">
      <div className="SingleReviewContainer__PicContainer">
        <img
          className="SingleReviewContainer__MainPic"
          src={displayedReview.review_img_url}
          alt="board game"
        />
      </div>
      <div className="SingleReview_Tag">
        <p className="SingleReview_Tag__p">{displayedReview.title}</p>
        <p className="SingleReview_Tag__p">
          Game designed by: {displayedReview.designer}
        </p>
        <p className="SingleReview_Tag__p">
          Review by: {displayedReview.owner}
        </p>
        <p className="SingleReview_Tag__p">
          Game category: {displayedReview.category}
        </p>
      </div>
      <div className="SingleReview__Body">
        <p className="SingleReview__Body__p">{displayedReview.review_body}</p>
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
