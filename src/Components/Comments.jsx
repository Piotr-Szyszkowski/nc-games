import React, { useState } from "react";

const Comments = ({ children }) => {
  const [commentsOn, setCommentsOn] = useState(false);
  const toggleCommentsOn = () => {
    setCommentsOn(!commentsOn);
  };

  return (
    <div className="Comments">
      <button onClick={toggleCommentsOn}>Comments</button>
      {commentsOn && children}
    </div>
  );
};

export default Comments;
