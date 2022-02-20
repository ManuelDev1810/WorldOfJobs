import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./job-slide";
import applicationSlide from "./application-slide";

const store = configureStore({
  reducer: {
    jobs: jobSlice.reducer,
    applications: applicationSlide.reducer,
  },
});

export default store;
