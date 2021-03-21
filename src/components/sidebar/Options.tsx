import { ISidebarOptionList } from "../../utils/interface/sidebar-option";
import {
  Home,
  Search,
  Notifications,
  Email,
  Bookmark,
  Person,
  List,
  MoreHoriz,
} from "@material-ui/icons";

export const SidebarList: ISidebarOptionList[] = [
  {
    Icon: Home,
    text: "Home",
    isActive: true
  },
  {
    Icon: Search,
    text: "Explore",
  },
  {
    Icon: Notifications,
    text: "Notifications",
  },
  {
    Icon: Email,
    text: "Messages",
  },
  {
    Icon: Bookmark,
    text: "Bookmarks",
  },
  {
    Icon: List,
    text: "Lists",
  },
  {
    Icon: Person,
    text: "Profile",
  },
  {
    Icon: MoreHoriz,
    text: "More",
  },
];
