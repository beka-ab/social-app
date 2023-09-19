import React from "react";
import "./post.css";
import { Users } from "../../data";
export default function Post({ post }) {
  console.log(Users);
  return (
    <div className="postWrapper">
      <div className="postAuthorWrapper">
        <div className="postAuthor">
          <img
            className="userAuthor"
            src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
            alt=""
          />
          <span className="userName">
            {Users.filter((u) => u.id === post.userId)[0].username}
          </span>
          <span className="userActivity"> {post.date}</span>
        </div>
        <div className="infoDocs">
          <hr className="info" />
          <hr className="info" />
          <hr className="info" />
        </div>
      </div>
      <h2 className="postContent"> {post.desc}</h2>
      <div className="postMediaPlace">
        <img className="postMedia" src={post.photo} alt="" />
      </div>
      <div className="postLikeCounter">
        <div className="postReactions">
          <img className="reaction" src="./assets/like.png" alt="" />
          <img className="reaction" src="./assets/heart.png" alt="" />
          <span> {post.like} people like it</span>
        </div>
        <div className="comments">
          <span>{post.comment} Comments</span>
        </div>
      </div>
    </div>
  );
}
