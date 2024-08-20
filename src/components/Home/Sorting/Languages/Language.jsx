import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setListOfLanguage,
  setSelectLanguage,
} from "../../../../utils/authSlice";
import "./Language.css";

function Language() {
  const dispatch = useDispatch();
  const selectLanguage = useSelector((state) => state.auth.selectLanguage);
  const listOfLanguage = useSelector((state) => state.auth.listOfLanguage);

  useEffect(() => {
    const fetchAllLanguages = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/configuration/languages?api_key=e21d649a311cd5670741733605c08725`
        );
        const data = await response.json();
        dispatch(setListOfLanguage(data));
      } catch (err) {
        console.error("Failed to fetch languages:", err);
      }
    };

    fetchAllLanguages();
  }, [dispatch]);

  return (
    <div className="language-container">
      <p className="language-title">Languages</p>
      <select
        className="language-select"
        value={selectLanguage}
        onChange={(e) => {
          dispatch(setSelectLanguage(e.target.value));
        }}
      >
        {listOfLanguage.map((language, index) => (
          <option
            key={`${language.iso_639_1} - ${index}`}
            value={language.iso_639_1}
          >
            {language.english_name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Language;
