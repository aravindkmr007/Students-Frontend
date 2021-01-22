import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'

function Header() {
  return (
    <div className="Header">
      <div className="Header_left">
        <IconButton>
          <SearchIcon style={{ color: "white" }} />
        </IconButton>
        <li>DashBoards</li>
      </div>
      <div className="Header_right">
        <IconButton>
          <NotificationsActiveIcon style={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <EqualizerIcon style={{ color: "white" }} />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
