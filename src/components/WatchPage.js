import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";

const WatchPage = () => {
  const [queryParam] = useSearchParams();
  //   console.log(queryParam.get("v"));
  const videoPlayerRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  useEffect(() => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.scrollIntoView({
        // behavior: "smooth",
        block: "start",
      });
    }
  }, []);
  return (
    // className={`${isMenuOpen ? `ml-64` : `ml-20`}`}
    <div className="ml-20 mt-16" ref={videoPlayerRef}>
      <iframe
        className="p-4"
        width="850"
        height="493"
        src={"https://www.youtube.com/embed/" + queryParam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
        // referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div>
        <Comments></Comments>
      </div>
    </div>
  );
};

export default WatchPage;
