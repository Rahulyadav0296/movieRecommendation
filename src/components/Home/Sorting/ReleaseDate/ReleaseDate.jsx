import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFrom, setTo } from "../../../../utils/authSlice";
import "./ReleaseDate.css";

function ReleaseDate() {
  const dispatch = useDispatch();
  const from = useSelector((state) => state.auth.from);
  const to = useSelector((state) => state.auth.to);

  return (
    <div className="release-date-container">
      <h3 className="release-date-title">Release Dates</h3>
      <div className="release-date-field">
        <label className="release-date-label">From</label>
        <input
          className="release-date-input"
          type="date"
          value={from}
          onChange={(e) => dispatch(setFrom(e.target.value))}
        />
      </div>
      <div className="release-date-field">
        <label className="release-date-label">To</label>
        <input
          className="release-date-input"
          type="date"
          value={to}
          onChange={(e) => dispatch(setTo(e.target.value))}
        />
      </div>
    </div>
  );
}

export default ReleaseDate;
