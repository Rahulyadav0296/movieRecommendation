import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
  movies: [],
  // const [selectedOption, setSelectionOption] = useState("");
  selectedOption: "",
  selectLanguage: "",
  savedMovieDetails: [],
  from: "",
  to: "",
  listOfLanguage: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setShowMenu(state, action) {
      state.showMenu = action.payload;
    },
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setSelectedOption(state, action) {
      state.selectedOption = action.payload;
    },
    setTo(state, action) {
      state.to = action.payload;
    },
    setFrom(state, action) {
      state.from = action.payload;
    },
    setSelectLanguage(state, action) {
      state.selectLanguage = action.payload;
    },
    setListOfLanguage(state, action) {
      state.listOfLanguage = action.payload;
    },
    setSavedMovieDetails(state, action) {
      state.savedMovieDetails = [...state.savedMovieDetails, ...action.payload];
    },
  },
});

export const {
  setMovies,
  setShowMenu,
  setSelectedOption,
  setSelectLanguage,
  setFrom,
  setTo,
  setListOfLanguage,
  setSavedMovieDetails,
} = authSlice.actions;

export default authSlice.reducer;
