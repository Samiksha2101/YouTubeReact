import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [queryParam] = useSearchParams();
  //   console.log(queryParam.get("v"));
  //   const videoPlayerRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  useEffect(
    () =>
      // if (videoPlayerRef.current) {
      //   videoPlayerRef.current.scrollIntoView({
      //     behavior: "smooth",
      //     block: "start",
      //   });
      window.scrollTo(0, 0),
    []
  );

  return (
    // className={`${isMenuOpen ? `ml-64` : `ml-20`}`}
    <div className="ml-20 mt-16 w-full">
      <div className="flex ml-2">
        <div>
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
        </div>
        <div className="w-full mt-2">
          <LiveChat />
        </div>
      </div>
      <div>
        <Comments></Comments>
      </div>
    </div>
  );
};

export default WatchPage;
