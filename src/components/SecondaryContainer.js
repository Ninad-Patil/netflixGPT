import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies.nowPlayingMovies);
  return (
    <div>
      <MovieList title="now playing" movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
