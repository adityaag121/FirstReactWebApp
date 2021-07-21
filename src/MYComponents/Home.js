import React from "react";
import { useState, useEffect } from "react";
import { PostFeed } from "./PostFeed";
import useFetch from "./useFetch";
import { AddPost } from "./AddPost";

export const Home = () => {
  const {
    fetchFunc,
    data: posts,
    isPending,
    error,
  } = useFetch("http://localhost:8000/posts");

  
  const [updated, setUpdated] = useState(0);
  var updateUI = () => {
      setUpdated(!updated);
  };

  useEffect(() => {
      fetchFunc();
  }, [updated]);

  console.log("post is ", posts);
  return (
      <>
          <div>
              <AddPost updateUI={updateUI} />
          </div>
          <div>{posts && <PostFeed Posts={posts} />}</div>
      </>
  );
};
