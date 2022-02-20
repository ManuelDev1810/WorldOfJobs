import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./job-slide";
import uiSlice from "./ui-slice";
import applicationSlide from "./application-slide";

const store = configureStore({
  reducer: {
    jobs: jobSlice.reducer,
    applications: applicationSlide.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
