import React from "react";
import "./post.css";
export default function Post() {
  return (
    <div className="postWrapper">
      <div className="postAuthorWrapper">
        <div className="postAuthor">
          <img className="userAuthor" src="./assets/person/1.jpeg" alt="" />
          <span className="userName">UserName</span>
          <span className="userActivity"> 5 min ago</span>
        </div>
        <div className="infoDocs">
          <hr className="info" />
          <hr className="info" />
          <hr className="info" />
        </div>
      </div>
      <h2 className="postContent"> Love For All, Galtred For None</h2>
      <div className="postMediaPlace">
        <img className="postMedia" src="./assets/posts/1.jpeg" alt="" />
      </div>
    </div>
  );
}
