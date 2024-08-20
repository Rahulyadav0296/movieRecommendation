import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "../../utils/authSlice";
import "./Home.css";
import Sort from "./Sorting/Sort/Sort";
const MovieContainer = lazy(() => import("./Sorting/MovieList/MovieContainer"));

function Home() {
  const dispatch = useDispatch();

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
      <Suspense
        fallback={
          <div className="loading-container">
            <img
              src="https://i.giphy.com/jAYUbVXgESSti.webp"
              alt="Page is Loading"
            />
          </div>
        }
      >
        <MovieContainer />
      </Suspense>
    </div>
  );
}

export default Home;
