import React from "react";
import { useDispatch } from "react-redux";
import { setSavedMovieDetails } from "../../../../utils/authSlice";
import "./MovieList.css";
function MovieList({ movie }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    const storedMovies = localStorage.getItem("savedMovies");

    let moviesArray = storedMovies ? JSON.parse(storedMovies) : [];

    moviesArray.push(movie);
    localStorage.setItem("savedMovies", JSON.stringify(moviesArray));

    dispatch(setSavedMovieDetails(moviesArray));
  };
  // console.log("The saved movies are: ", moviesArray);
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-release-date">{movie.release_date}</p>
      </div>
      <button className="save-movie-button" onClick={handleClick}>
        Save movies
      </button>
    </div>
  );
}

export default MovieList;
