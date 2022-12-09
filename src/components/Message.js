import React from "react";
import { useParams } from "react-router-dom";

const Message = () => {
  const userId = useParams();
  return <div>Message</div>;
};

export default Message;
