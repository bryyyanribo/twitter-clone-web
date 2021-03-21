import React from "react";
import { TextField, Avatar } from "@material-ui/core";
import "./TweetBox.scss";
import {
  Image,
  Gif,
  Poll,
  EmojiEmotions,
  CalendarToday,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
const TweetBox = () => {
  return (
    <div className={"tweetBox"}>
      <form noValidate autoComplete="off">
        <div className="tweetBox_input">
          <Avatar className="tweetBox_avatar">OP</Avatar>
          <div className="tweetBox_field">
            <TextField placeholder="What's Happening?" variant="standard" />
            <div className="tweetBox_icons">
              <Image />
              <Gif />
              <Poll />
              <EmojiEmotions />
              <CalendarToday />
              <Button variant="outlined">Tweet</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
