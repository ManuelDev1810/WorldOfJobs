// test-utils.jsx
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import jobSlice from "./store/job-slide";
import applicationSlide from "./store/application-slide";
import { BrowserRouter } from "react-router-dom";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        jobs: jobSlice.reducer,
        applications: applicationSlide.reducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {},
  { route = "/" } = {}
) {
  function Wrapper({ children }) {
    window.history.pushState({}, "Test page", route);
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
