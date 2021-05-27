import React, { useState } from "react";
import { useParams } from "react-router";
import { getSingleReview } from "../Utils/api";
import Comments from "./Comments";
import CommentsContent from "./Comments_Content";
import Votes from "./Votes";

const SingleReview = () => {
  const { review_id } = useParams();
  const [displayedReview, setDisplayedReview] = useState({});
  useState(() => {
    getSingleReview(review_id).then((singleReviewFromApi) => {
      setDisplayedReview(singleReviewFromApi);
    });
  }, []);

  return (
    <div className="SingleReviewContainer">
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
        <CommentsContent />
      </Comments>
    </div>
  );
};

export default SingleReview;
