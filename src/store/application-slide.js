import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [],
};

const applicationSlide = createSlice({
  name: "applications",
  initialState,
  reducers: {
    replaceApplications(state, action) {
      state.applications = action.payload.applications;
    },
    addApplication(state, action) {
      state.applications.push(action.payload);
    },
  },
});

export const applicationActions = applicationSlide.actions;

export default applicationSlide;
