import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOption } from "../../../../utils/authSlice";
import "./SelectedOption.css";
function SelectedOption() {
  const selectedOption = useSelector((state) => state.auth.selectedOption);
  const dispatch = useDispatch();
  return (
    <div className="selected-option-container">
      <p className="selected-option-title">Sort Results By</p>
      <select
        className="selected-option-select"
        value={selectedOption}
        onChange={(e) => {
          dispatch(setSelectedOption(e.target.value));
        }}
      >
        <option value="title">Title</option>
        <option value="vote_average">Rating</option>
        <option value="release_date_asc">Release Date Ascending</option>
        <option value="release_date_dsc">Release Date Descending</option>
      </select>
    </div>
  );
}

export default SelectedOption;
