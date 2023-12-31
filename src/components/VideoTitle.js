import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button
          className=" mx-1 bg-gray-500 text-black p-4 px-12 text-xl hover:bg-opacity-50 rounded-lg"
          type="button"
        >
          ▶️ Play
        </button>
        <button
          className=" mx-1 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg"
          type="button"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
