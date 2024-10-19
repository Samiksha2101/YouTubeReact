import React, { useEffect, useState } from "react";
import VideoCard, { withSponsered } from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const info = await data.json();
    setVideos(info.items);
    // console.log(info);
  };
  const Sponsered = withSponsered(VideoCard);
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);
  return (
    <div
      className={`flex flex-wrap mt-11 ${
        isMenuOpen ? "justify-center" : "null"
      }`}
    >
      {videos.map((video, index) =>
        index === 0 ? (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <Sponsered info={video} ad={"Sponsered"}></Sponsered>
          </Link>
        ) : (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video}></VideoCard>
          </Link>
        )
      )}
    </div>
  );
};

export default VideoContainer;
