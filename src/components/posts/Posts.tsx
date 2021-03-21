import React from "react";
import { Divider } from "@material-ui/core";
import PostItem from "../post-item/PostItem";
import { MockPost } from "./MockPost";
import { IPosts } from "../../utils/interface/posts";

const Posts = () => {
  return (
    <>
      <Divider />
      {MockPost.map((item: IPosts, index: number) => {
        return (
          <>
            <PostItem key={index} {...item} />
            <Divider />
          </>
        );
      })}
    </>
  );
};

export default Posts;
