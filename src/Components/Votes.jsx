import React, { useState } from "react";
import { setVotesInApi } from "../Utils/api";

const Votes = ({ review_id, votes }) => {
  const [votesChange, setVotesChange] = useState(0);
  const incVotes = () => {
    setVotesChange((currVotesChange) => currVotesChange + 1);
    setVotesInApi(review_id);
  };

  const haveVoted = votesChange > 0;

  return (
    <div className=" bg-gray-300 my-1 p-1 rounded-lg">
      <button onClick={incVotes} disabled={haveVoted} className=" bg-white">
        Vote
      </button>
      <p className="bg-gray-300">Votes: {votes + votesChange}</p>
    </div>
  );
};

export default Votes;

//   console.log("current votes is" + VotesAmount, "votes is " + votes);
