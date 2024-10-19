import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className=" p-1 flex items-center">
      <img
        className="h-8 w-8"
        alt="user"
        src="https://www.pngitem.com/pimgs/m/4-40070_user-staff-man-profile-user-account-icon-jpg.png"
      ></img>
      <span className="font-bold mx-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
