import React from "react";
import { toggleNav } from "../utils/navSlice";
import { useDispatch } from "react-redux";
const Head = () => {
  const dispatch = useDispatch(); //to dispatch an action
  const toggleNavHandler = () => {
    dispatch(toggleNav());
  };
  return (
    <div className="grid grid-flow-col fixed top-0 w-full bg-white ">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={() => toggleNavHandler()}
          className="h-8 m-2"
          alt="menu"
          src="https://icon-library.com/images/hamburger-menu-icon-free/hamburger-menu-icon-free-7.jpg"
        ></img>
        <img
          className="h-9 m-2 p-2"
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-8.png"
          alt="youtube-logo"
        ></img>
      </div>
      <div className="p-2 col-span-9 flex justify-center">
        <input
          type="text"
          className="border border-gray-300 w-1/2 rounded-l-full"
        ></input>
        <button className="border border-gray-300 p-[3px] rounded-r-full">
          Search
        </button>
        <img
          className="h-8 mx-3 p-1 border border-gray-400 rounded-full"
          src="https://icon-library.com/images/mic-icon-png/mic-icon-png-8.jpg"
          alt="mike"
        ></img>
      </div>
      <div className="p-2 col-span-2 flex justify-end ">
        <img
          className="h-8 "
          src="https://www.pngitem.com/pimgs/m/4-40070_user-staff-man-profile-user-account-icon-jpg.png"
          alt="user-acc"
        ></img>
      </div>
    </div>
  );
};
export default Head;
