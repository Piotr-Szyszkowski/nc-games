import React, { useEffect } from "react";
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
    <div className=" p-2 rounded-lg mt-1" key="Comments__Content">
      {comments ? (
        comments.map((comment) => {
          return (
            <SingleComment commentObj={comment} key={comment.comment_id} />
          );
        })
      ) : (
        <p className=" p-1 rounded-lg mt-1">
          No comments yet. Feel free to be the first!
        </p>
      )}
    </div>
  );
};

export default CommentsContent;
