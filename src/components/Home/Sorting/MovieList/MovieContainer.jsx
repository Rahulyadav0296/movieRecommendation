import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
function MovieContainer() {
  const movies = useSelector((state) => state.auth.movies);
  return (
    <div className="movies-container">
      {movies.map((movie, index) => (
        <MovieList movie={movie} key={`${movie.id}-${index}`} />
      ))}
    </div>
  );
}

export default MovieContainer;
