import React from "react";

const ChatMessage = ({ name, message }) => {
  //add input restriction later
  return (
    <div className=" flex items-center bg-gray-50 m-1 w-[500px] ">
      <img
        className="h-8 w-8"
        alt="user"
        src="https://www.pngitem.com/pimgs/m/4-40070_user-staff-man-profile-user-account-icon-jpg.png"
      ></img>
      <span className="font-bold mx-2">{name}</span>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
