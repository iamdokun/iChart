import { Avatar } from '@mui/material';
import React from 'react'
import "../../styles/userMessage.css"

const UserMessage = ({ message }) => {

   function stringAvatar(name) {
     return name?.slice(0, 2).toUpperCase();
   }

  return (
    <div className="userMessageWrap">
      <div className="message">{message.message}</div>
      <Avatar sx={{ bgcolor: "#61297f" }}>{stringAvatar(message.userName)}</Avatar>
    </div>
  );
}

export default UserMessage