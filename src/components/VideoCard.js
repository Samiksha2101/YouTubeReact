// import React, { useEffect, useState } from "react";
const VideoCard = ({ info, ad, vref }) => {
  const { snippet, statistics } = info;
  const { thumbnails } = snippet;
  //   console.log(info);

  return (
    <div className="mx-2 my-5 cursor-pointer" ref={vref}>
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnail"
      ></img>
      {ad ? (
        <ul className="m-2">
          <li className="bg-blue-100 font-semibold rounded-lg text-center text-blue-500">
            {ad}
          </li>
          <li className="font-semibold">
            {snippet.title.length > 33
              ? snippet.title.substring(0, 32) + "..."
              : snippet.title}
          </li>
          <li>{snippet.channelTitle}</li>
        </ul>
      ) : (
        <ul className="m-2">
          <li className="font-semibold">
            {snippet.title.length > 33
              ? snippet.title.substring(0, 32) + "..."
              : snippet.title}
          </li>
          <li>{snippet.channelTitle}</li>
          <li>{statistics.viewCount}</li>
        </ul>
      )}
    </div>
  );
};

export const withSponsered = (VideoCard) => {
  return (props) => {
    return (
      <div>
        {/* <label className=" bg-gray-400"> Sponsered</label> */}
        <VideoCard {...props}></VideoCard>
      </div>
    );
  };
};
export default VideoCard;
