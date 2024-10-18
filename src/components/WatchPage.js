import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [queryParam] = useSearchParams();
  console.log(queryParam.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    // className={`${isMenuOpen ? `ml-64` : `ml-20`}`}
    <div className="ml-20 mt-16">
      <iframe
        className="p-4"
        width="900"
        height="515"
        src={
          "https://www.youtube.com/embed/" +
          queryParam.get("v") +
          "?si=daLTm7DaBH2QJ_Dp"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
