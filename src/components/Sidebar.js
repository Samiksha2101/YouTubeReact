import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen); //no need to import store, react-redux gives it
  //early return
  if (!isMenuOpen) return null;
  return (
    <div className=" w-52 fixed bg-white mt-[52px] h-full text-center">
      <h1 className="font-semibold pt-2 pl-2">Subscriptions</h1>
      <ul className="p-2">
        <li className="hover:bg-gray-200 rounded-md p-1">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:bg-gray-200 rounded-md p-1">Shorts</li>
        <li className="hover:bg-gray-200 rounded-md p-1">Subscriptions</li>
      </ul>
      <hr className="mt-2"></hr>
      <h1 className="font-semibold mt-4 pl-2">You</h1>
      <ul className="p-2">
        <li className="hover:bg-gray-200 rounded-md p-1">Your Channel</li>
        <li className="hover:bg-gray-200 rounded-md p-1">History</li>
        <li className="hover:bg-gray-200 rounded-md p-1">Your Videos</li>
        <li className="hover:bg-gray-200 rounded-md p-1">Your Courses</li>
        <li className="hover:bg-gray-200 rounded-md p-1">Watch Later</li>
      </ul>
      <hr className="mt-2"></hr>
      <h1 className="font-semibold mt-4 pl-2">Explore</h1>
      <ul className="p-2">
        <li className="hover:bg-gray-200 rounded-md p-1">Trending</li>
        <li className="hover:bg-gray-200 rounded-md p-1">Shopping</li>
        <li className="hover:bg-gray-200 rounded-md p-1">Music</li>
        <li className="hover:bg-gray-200 rounded-md p-1">Movies</li>
        <li className="hover:bg-gray-200 rounded-md p-1">Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
