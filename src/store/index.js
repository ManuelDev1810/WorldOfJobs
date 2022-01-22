import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./job-slide";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {jobs: jobSlice.reducer, ui: uiSlice.reducer }
});

export default store;