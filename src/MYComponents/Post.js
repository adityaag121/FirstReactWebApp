import React from "react";

export const Post = (props) => {
  return (
    <div className="container">
      <h2>{props.Post.title}</h2>
      <h2>{props.Post.username}</h2>
      <h4>{props.Post.content}</h4>
      
    </div>
  );
};
