import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SavedMovieList from "./SavedIMovieList";
import "./SavedMovies.css";
function SavedMovies() {
  const savedMovieDetails = useSelector(
    (state) => state.auth.savedMovieDetails
  );
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setFilteredMovies(savedMovieDetails || []); // Ensure it's always an array
  }, [savedMovieDetails]);

  const handleRemove = (movieId) => {
    const movies = filteredMovies.filter((movie) => movie.id !== movieId);
    setFilteredMovies(movies);
  };

  return (
    <div className="saved-movies-container">
      <h2 className="saved-movies-title">Saved Movies</h2>
      {filteredMovies.length > 0 ? (
        <ul className="saved-movies-list">
          {filteredMovies.map(
            (movie, index) =>
              movie &&
              movie.poster_path && ( // Guard clause
                <SavedMovieList
                  onClick={() => {
                    handleRemove(movie.id);
                  }}
                  key={`${movie.id}-${index}`}
                  movie={movie}
                />
              )
          )}
        </ul>
      ) : (
        <p className="no-saved-movies">No saved movies yet.</p>
      )}
    </div>
  );
}

export default SavedMovies;
