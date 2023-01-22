import { createSlice } from "@reduxjs/toolkit";

export interface initialLocationState {
  search: string;
  submittedSearch: string;
  recentSearches: string[];
  isLoading: boolean;
  results: any[];
}

const initialState: initialLocationState = {
  search: "",
  submittedSearch: "",
  recentSearches: [],
  isLoading: false,
  results: [],
};
export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSubmittedSearch: (state, action) => {
      state.submittedSearch = action.payload;
    },
    addBulkToRecents: (state, action) => {
      state.recentSearches = [
        ...action.payload,
        ...state.recentSearches,
      ].splice(0, 5);
    },
    addSearchToRecents: (state, action) => {
      state.recentSearches = [action.payload, ...state.recentSearches].splice(
        0,
        5
      );
    },
    setLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSearch,
  setSubmittedSearch,
  addBulkToRecents,
  addSearchToRecents,
  setLoadingStatus,
  setResults,
} = locationSlice.actions;
export default locationSlice.reducer;
