import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, setOriginalMovies } from "../../utils/authSlice";
import "./Home.css";
import MovieContainer from "./Sorting/MovieList/MovieContainer";
import Sort from "./Sorting/Sort/Sort";

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.auth.movies);

  useEffect(() => {
    const fetchAllMovies = async () => {
      let allMovies = [];
      let currentPage = 1;
      let totalPages = 1;
      const maxPages = 200;

      try {
        while (currentPage <= totalPages && currentPage <= maxPages) {
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=e21d649a311cd5670741733605c08725&page=${currentPage}`
          );
          const data = await response.json();
          console.log(data);

          allMovies = [...allMovies, ...data.results];
          totalPages = data.total_pages;
          currentPage += 1;
        }

        dispatch(setMovies(allMovies));
        dispatch(setOriginalMovies(allMovies));
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    fetchAllMovies();
  }, [dispatch]);

  return (
    <div className="home-container">
      <div className="sort-container">
        <Sort />
      </div>

      {movies.length > 0 ? (
        <MovieContainer />
      ) : (
       <div className="loading-container-contain">
          <img
            src="https://i.giphy.com/jAYUbVXgESSti.webp"
            alt="Page is Loading"
            className="loading-image"
          />
        </div>
      )}
    </div>
  );
}

export default Home;
