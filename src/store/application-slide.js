import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [],
};

const applicationSlide = createSlice({
  name: "applications",
  initialState,
  reducers: {
    addApplication(state, action) {
      state.applications.push(action.payload);
    },
  },
});

export const applicationActions = applicationSlide.actions;

export default applicationSlide;
