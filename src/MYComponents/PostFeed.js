import React from "react";
import {Post} from "./Post";
export const PostFeed = (props) => {
  return (
    <div>
        {props.Posts.map((pasta)=>(
            <div className="card" key={pasta.id}>
                <Post Post={pasta} />
            </div>
        ))}
      
    </div>
  );
};
