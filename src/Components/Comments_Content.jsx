import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCommentsForId } from "../Utils/api";
import SingleComment from "./SingleComment";

const CommentsContent = ({ comments, setComments }) => {
  const { review_id } = useParams();
  console.log("CommentsContent Render");
  console.log(comments);

  useEffect(() => {
    getCommentsForId(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, []);

  return (
    <div className="Comments__Content" key="Comments__Content">
      {comments ? (
        comments.map((comment) => {
          return (
            <SingleComment commentObj={comment} key={comment.comment_id} />
          );
        })
      ) : (
        <p className="Comments__Content__NoComment">
          No comments yet. Feel free to be the first!
        </p>
      )}
    </div>
  );
};

export default CommentsContent;
