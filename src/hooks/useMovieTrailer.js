import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

//fetch video and update the store with tailer key

const useMovieTrialer = (id) => {
  const dispatch = useDispatch();
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

    dispatch(addTrailerVideo(trailer.key));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useMovieTrialer;
