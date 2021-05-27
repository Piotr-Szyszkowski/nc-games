import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCommentsForId } from "../Utils/api";
import SingleComment from "./SingleComment";

const CommentsContent = () => {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommentsForId(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, []);
  return (
    <div className="Comments__Content">
      {comments.map((comment) => {
        return <SingleComment commentObj={comment} />;
      })}
    </div>
  );
};

export default CommentsContent;
