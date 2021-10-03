import React, { useState } from "react";

const Comments = ({ children }) => {
  const [commentsOn, setCommentsOn] = useState(false);
  const toggleCommentsOn = () => {
    setCommentsOn(!commentsOn);
  };

  return (
    <div className=" rounded-lg">
      <button
        className=" bg-gray-700 p-1 px-2 rounded-lg mt-1 ml-1 text-gray-200 hover:text-red-800 hover:bg-gray-400 ho"
        onClick={toggleCommentsOn}
      >
        Show Comments
      </button>
      {commentsOn && children}
    </div>
  );
};

export default Comments;
