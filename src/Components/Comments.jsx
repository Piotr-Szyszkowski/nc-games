import React, { useState } from "react";

const Comments = ({ children }) => {
  const [commentsOn, setCommentsOn] = useState(false);
  const toggleCommentsOn = () => {
    setCommentsOn(!commentsOn);
  };

  return (
    <div className=" rounded-lg md:mx-auto md:max-w-4xl">
      <button
        className=" bg-gray-700 p-1 px-2 rounded-lg mt-1 m-1 text-gray-200 hover:text-red-800 hover:bg-gray-400 "
        onClick={toggleCommentsOn}
      >
        Show Comments
      </button>
      {commentsOn && children}
    </div>
  );
};

export default Comments;
