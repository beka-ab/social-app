import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircle,
  Group,
  Bookmark,
  HelpOutline,
  Work,
  Event,
  School,
} from "@mui/icons-material";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideProperties">
        <ul>
          <li>
            <RssFeed />
            <span> Feed</span>
          </li>
          <li>
            <Chat />
            <span>Chats</span>
          </li>
          <li>
            <PlayCircle />
            <span>Videos</span>
          </li>
          <li>
            <Group />
            <span>Groups</span>
          </li>
          <li>
            <Bookmark />
            <span>Bookmarks</span>
          </li>
          <li>
            <HelpOutline />
            <span>Questions</span>
          </li>
          <li>
            <Work />
            <span> Jobs</span>
          </li>
          <li>
            <Event />
            <span>Events</span>
          </li>
          <li>
            <School />
            <span>Courses</span>
          </li>
        </ul>
        <button>Show More</button>
      </div>
      <ul></ul>
    </div>
  );
}
