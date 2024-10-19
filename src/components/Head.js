import React, { useEffect, useState } from "react";
import { toggleNav } from "../utils/navSlice";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowsuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch(); //to dispatch an action

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache && searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getsuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  //   {
  //     "iphone":["iphone","iphone14","ip"]
  //     searchQuery = iphone
  //   }
  const getsuggestions = async () => {
    console.log("query " + searchQuery);
    const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
    // console.log(json[1]);
  };
  const toggleNavHandler = () => {
    dispatch(toggleNav());
  };

  return (
    <div className="grid grid-flow-col fixed top-0 w-full bg-white z-50">
      {/* {console.log(searchQuery)} */}
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
      <div className="p-2 col-span-9 ">
        <div className="flex justify-center">
          <input
            type="text"
            className="border border-gray-300 w-1/2 rounded-l-full px-2 py-[6px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsuggestion(true)}
            onBlur={() => setShowsuggestion(false)}
          ></input>
          <button className="border border-gray-300 p-[3px] rounded-r-full">
            Search
          </button>
          <img
            className="h-8 mx-3 p-1 border border-gray-400 rounded-full cursor-pointer"
            src="https://icon-library.com/images/mic-icon-png/mic-icon-png-8.jpg"
            alt="mike"
          ></img>
        </div>

        {searchQuery && showSuggestion && (
          <div>
            <ul className="fixed ml-[13rem] p-4  bg-gray-100 w-[32rem] shadow-2xl rounded-lg">
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="p-2 col-span-2 flex justify-end ">
        <img
          className="h-8 cursor-pointer"
          src="https://www.pngitem.com/pimgs/m/4-40070_user-staff-man-profile-user-account-icon-jpg.png"
          alt="user-acc"
        ></img>
      </div>
    </div>
  );
};
export default Head;
