import React, { useState } from "react";
import { MdMovie } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setMovies, setShowMenu } from "../../../utils/authSlice";
import "./NavbarMenu.css";
function NavbarMenu() {
  const showMenu = useSelector((state) => state.auth.showMenu);
  const movies = useSelector((state) => state.auth.movies);
  const [search, setSearch] = useState("");
  const [noResultsMessage, setNoResultsMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    const filterMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

    if (filterMovies.length === 0) {
      setNoResultsMessage("No results found.");
      dispatch(setMovies(movies)); // Clear movies if no results
    } else {
      setNoResultsMessage("");
      dispatch(setMovies(filterMovies));
    }

    setSearch(""); // Clear search input
    dispatch(setShowMenu(!showMenu)); // Toggle menu visibility
  };

  const SavedMovieList = () => {
    navigate("/favourite-movies");
  };

  return (
    <div className={`navbar-menu ${showMenu ? "show-menu" : ""}`}>
      <div className={`navbar-items-list ${showMenu ? "show-menu" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "navbar-items-list-details active"
              : "navbar-items-list-details"
          }
          onClick={() => {
            dispatch(setShowMenu(!showMenu));
          }}
        >
          Home
        </NavLink>
      </div>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-form__input"
          placeholder="Search..."
        />
        <button type="submit" className="search-form__button">
          Search
        </button>
      </form>
      <div onClick={SavedMovieList} className={"movie-icon-container"}>
        <MdMovie />
      </div>
    </div>
  );
}

export default NavbarMenu;
