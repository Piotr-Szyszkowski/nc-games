import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCommentsForId } from "../Utils/api";
import SingleComment from "./SingleComment";

const CommentsContent = ({ comments, setComments }) => {
  const { review_id } = useParams();

  useEffect(() => {
    getCommentsForId(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, []);

  return (
    <div className="Comments__Content" key="Comments__Content">
      {comments.map((comment) => {
        return <SingleComment commentObj={comment} key={comment.comment_id} />;
      })}
    </div>
  );
};

export default CommentsContent;
