import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Music",
    "Node.js",
    "Cricket",
    "Stocks",
    "Podcast",
    "Live",
    "Gaming",
    "Comedy",
    "Android",
    "Lo-fi",
    "Recently uploaded",
    "Iphones",
    "Ghazal",
  ];
  return (
    <div className="flex fixed bg-white">
      {buttonList.map((str, index) => (
        <Button key={index} name={str}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
