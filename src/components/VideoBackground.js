import React, { useEffect, useState } from "react";

const VideoBackground = ({ id }) => {
  const [trailerId, setTrailerId] = useState("");
  const getMoviesVideos = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_TOKEN,
      },
    };
    const data = await fetch(url, options);
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setTrailerId(trailer.key);
    console.log(filterData);
    console.log(trailerId);
  };

  useEffect(() => {
    getMoviesVideos();
    console.log("hello");
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
