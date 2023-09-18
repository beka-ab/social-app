import "./feed.css";
import React from "react";
import Share from "../share/share";
import Post from "../post/post";
export default function Feed() {
  return (
    <div>
      <Share />
      <Post />
    </div>
  );
}
