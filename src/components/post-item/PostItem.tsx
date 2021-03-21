import React from "react";
import {
  VerifiedUser,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  Publish,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { IPosts } from "../../utils/interface/posts";
import "./PostItem.scss";
const PostItem: React.FC<IPosts> = ({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
}: IPosts) => {
  return (
    <div className={"post"}>
      <div className="post__avatar">
        <Avatar>{avatar}</Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <VerifiedUser className="post__badge" />} @
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
