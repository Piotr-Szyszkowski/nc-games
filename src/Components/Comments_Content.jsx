import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getCommentsForId } from "../Utils/api";

const CommentsContent = () => {
  const { review_id } = useParams();
  useEffect(() => {
    getCommentsForId(review_id).then((commentsFromApi) => {
      console.log(commentsFromApi);
    });
  }, []);
  return (
    <div className="Comments__Content">
      <p>We are the comments right here!!!</p>
    </div>
  );
};

export default CommentsContent;
