import { debounce } from "lodash";
import React, { useMemo, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../../../utils/authSlice";
import Language from "../Languages/Language";
import ReleaseDate from "../ReleaseDate/ReleaseDate";
import SelectedOption from "../SelectedOption/SelectedOption";
import "./Sort.css";

function Sort() {
  const from = useSelector((state) => state.auth.from);
  const to = useSelector((state) => state.auth.to);
  const [showSortItem, setSortItem] = useState(false);
  const [showFilterItem, setFilterItem] = useState(false);
  const movies = useSelector((state) => state.auth.movies);
  const selectedOption = useSelector((state) => state.auth.selectedOption);
  const dispatch = useDispatch();
  const selectLanguage = useSelector((state) => state.auth.selectLanguage);

  const sortedAndFilteredMovies = useMemo(() => {
    if (!movies.length) return;
    let sortedItem = [...movies];
    console.log("The Sorted Items is: ", sortedItem[0]);

    switch (selectedOption) {
      case "title":
        sortedItem.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "vote_average":
        sortedItem.sort((a, b) => a.vote_average - b.vote_average);
        break;
      case "release_date_asc":
        sortedItem.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        break;
      case "release_date_dsc":
        sortedItem.sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date)
        );
        break;
      default:
        break;
    }

    // Filter by date range if 'from' and 'to' are provided
    if (from && to) {
      const fromDate = new Date(from);
      const toDate = new Date(to);

      sortedItem = sortedItem.filter((item) => {
        const releaseDate = new Date(item.release_date);
        return releaseDate >= fromDate && releaseDate <= toDate;
      });
    }

    // filter by languages
    if (selectLanguage) {
      sortedItem = sortedItem.filter((movieList) => {
        return movieList.original_language === selectLanguage;
      });
    }
    return sortedItem;
  }, [movies, selectedOption, from, to, selectLanguage]);

  const handleSearch = debounce(() => {
    if (sortedAndFilteredMovies.length > 0) {
      dispatch(setMovies(sortedAndFilteredMovies));
    } else {
      alert("No Movies Available!");
    }
  }, 300); // 300ms delay before triggering the search

  return (
    <div className="sort-container">
      <h1 className="sort-title">Movies</h1>
      <div
        className="sort-section"
        onClick={() => {
          setSortItem(!showSortItem);
        }}
      >
        <h3 className="sort-heading">Sort</h3>
        {showSortItem ? <RiArrowDownSLine /> : <MdKeyboardArrowRight />}
      </div>
      <div className="sort-options">{showSortItem && <SelectedOption />}</div>
      <div className="filter-section">
        <div
          className="filter-toggle"
          onClick={() => {
            setFilterItem(!showFilterItem);
          }}
        >
          <h3 className="filter-heading">Filter</h3>
          {!showFilterItem ? <RiArrowDownSLine /> : <MdKeyboardArrowRight />}
        </div>
        {!showFilterItem && (
          <div className="filter-options">
            <Language />
            <ReleaseDate />
          </div>
        )}
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Sort;
