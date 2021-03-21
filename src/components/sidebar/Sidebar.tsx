import React from "react";
import "./Sidebar.scss";

import SidebarOption from "../sidebar-option/SidebarOption";
import { SidebarList } from "./Options";
import { Button } from "@material-ui/core";
import { Twitter } from "@material-ui/icons";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Twitter className="sidebar_twitter-icon"/>
      {SidebarList.map((options, index) => {
        return <SidebarOption key={index} {...options} />;
      })}
      <Button variant="outlined" className="sidebar_button" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
