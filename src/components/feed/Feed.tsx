import { Divider } from "@material-ui/core";
import React from "react";
import Posts from "../posts/Posts";
import TweetBox from "../tweet-box/TweetBox";
import "./Feed.scss";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <Divider />
      <TweetBox />
      <Divider />
      <Posts />
    </div>
  );
};

export default Feed;
