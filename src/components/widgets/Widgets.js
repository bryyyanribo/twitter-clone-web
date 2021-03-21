import React from "react";
import "./Widgets.scss";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";

// CONVERTED TO .JS FILE SINCE NO @TYPES FOR TWITTER EMBED
const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__widgetContainer">
        <h2>What's happening:</h2>

        <TwitterTweetEmbed tweetId={"1373535910147411968"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Jujutsu_Kaisen"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
};

export default Widgets;
