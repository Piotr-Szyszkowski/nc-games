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
    <div className=" bg-gray-300 my-1 px-2 py-1 rounded-lg flex max-w-max">
      <button
        onClick={incVotes}
        disabled={haveVoted}
        className=" bg-gray-900 text-white px-1 mx-1 rounded-lg hover:bg-green-900 "
      >
        Vote
      </button>
      <p className="bg-gray-300 italic">Votes: {votes + votesChange}</p>
    </div>
  );
};

export default Votes;

//   console.log("current votes is" + VotesAmount, "votes is " + votes);
