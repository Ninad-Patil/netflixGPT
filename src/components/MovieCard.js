import React from "react";

export const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={"http://image.tmdb.org/t/p/w500/" + posterPath} alt="" />
    </div>
  );
};
