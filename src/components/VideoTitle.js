import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button
          className=" mx-1 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg"
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
