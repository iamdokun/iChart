import React from 'react'
import "../../styles/otherMessage.css"
import { Avatar } from "@mui/material";

const OtherMessage = ({ message}) => {

  function stringAvatar(name) {
    return name?.slice(0, 2).toUpperCase();
  }
  stringAvatar();

  return (
    <div className="otherMessageWrap">
      <Avatar sx={{ bgcolor: "#D3D3D3", color: "#808080" }}>
        {stringAvatar(message.userName)}
      </Avatar>
      <div className="otherMessage">{message.message}</div>
    </div>
  );
}

export default OtherMessage