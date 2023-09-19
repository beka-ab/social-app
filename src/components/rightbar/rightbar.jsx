import React from "react";
import "./rightbar.css";
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <img className="birthdayimg" src="./assets/gift.png" alt="" />
        <span>
          <b>Pola Foster </b>and <b>3 other friends</b> have a birthday today
        </span>
      </div>
      <div className="advertisment">
        <img className="adimg" src="./assets/ad.png" alt="" />
      </div>
      <div className="onlineFriends">
        <h4 className="onlineHeadline">Online Friends</h4>
        <ul className="onlineLists">
          <li className="onlineList">
            <img
              className="onlineListImg"
              src="./assets/person/3.jpeg"
              alt=""
            />
            <hr className="onlineDoc" />
            <span className="onlineListUser">Safak kocaoglu</span>
          </li>
          <li className="onlineList">
            <img
              className="onlineListImg"
              src="./assets/person/3.jpeg"
              alt=""
            />
            <hr className="onlineDoc" />
            <span className="onlineListUser">Safak kocaoglu</span>
          </li>
          <li className="onlineList">
            <img
              className="onlineListImg"
              src="./assets/person/3.jpeg"
              alt=""
            />
            <hr className="onlineDoc" />
            <span className="onlineListUser">Safak kocaoglu</span>
          </li>
          <li className="onlineList">
            <img
              className="onlineListImg"
              src="./assets/person/3.jpeg"
              alt=""
            />
            <hr className="onlineDoc" />
            <span className="onlineListUser">Safak kocaoglu</span>
          </li>
          <li className="onlineList">
            <img
              className="onlineListImg"
              src="./assets/person/3.jpeg"
              alt=""
            />
            <hr className="onlineDoc" />
            <span className="onlineListUser">Safak kocaoglu</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
