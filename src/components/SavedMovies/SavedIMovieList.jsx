import React from "react";

function SavedIMovieList({ movie, onClick }) {
  return (
    <li className="saved-movie-item">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="saved-movie-poster"
      />
      <div className="saved-movie-info">
        <h3 className="saved-movie-title">{movie.title}</h3>
        <p className="saved-movie-language">
          Language: {movie.original_language}
        </p>
        <p className="saved-movie-original-title">
          Original Title: {movie.original_title}
        </p>
        <p className="saved-movie-year">
          Year: {movie.release_date.split("-")[0]}
        </p>
        <p className="saved-movie-ratings">
          Ratings: {movie.vote_average} / 10
        </p>
        <p className="saved-movie-vote-count">
          Total Votes: {movie.vote_count}
        </p>
        <p className="saved-movie-overview">Overview: {movie.overview}</p>
        <button className="remove-movie-button" onClick={onClick}>
          Remove Movie
        </button>
      </div>
    </li>
  );
}

export default SavedIMovieList;
