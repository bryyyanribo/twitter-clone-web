import React from "react";
import { ISidebarOptionList } from "../../utils/interface/sidebar-option";
import "./SidebarOption.scss";
const SidebarOption: React.FC<ISidebarOptionList> = ({
  Icon,
  isActive,
  text,
}: ISidebarOptionList) => {
  return (
    <div className={`sidebarOption ${isActive && "sidebarOption--active"}`}>
      <Icon className={"sidebarOption_icon"} />
      <span className={"sidebarOption_text"}>{text}</span>
    </div>
  );
};

export default SidebarOption;
