import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutlineOutlined";
import "./Header.css";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user?.dispalyName}
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon className="header__search__icon" />
        <input type="text" placeholder="Search your Slack" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
