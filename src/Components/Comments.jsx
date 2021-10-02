import React, { useState } from "react";

const Comments = ({ children }) => {
  const [commentsOn, setCommentsOn] = useState(false);
  const toggleCommentsOn = () => {
    setCommentsOn(!commentsOn);
  };

  return (
    <div>
      <button
        className=" bg-gray-200 p-1 px-2 rounded-lg mt-1 ml-1"
        onClick={toggleCommentsOn}
      >
        Comments
      </button>
      {commentsOn && children}
    </div>
  );
};

export default Comments;
