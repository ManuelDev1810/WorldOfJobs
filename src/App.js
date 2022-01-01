import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Jobs from "./components/Jobs/Jobs";
import JobsSearch from "./components/Jobs/JobsSearch/JobsSearch";
import NewJob from "./components/Jobs/NewJob/NewJob";

function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes>
        <Route path="/" element={<Navigate replace to="/jobs" />} />
        <Route
          path="/jobs"
          element={
            <>
              <JobsSearch />
              <Jobs />
            </>
          }
        />
        <Route path='/new-job' element={<NewJob />} />
      </Routes>
    </div>
  );
}

export default App;
