import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Jobs from "./components/Jobs/Jobs";
import JobsSearch from "./components/Jobs/JobsSearch/JobsSearch";
import NewJob from "./components/Jobs/NewJob/NewJob";
import { sendJobData, fetchJobsData } from "./store/job-actions";

let isInitial = true;

function App() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobsData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (data.changed) {
      dispatch(sendJobData(data));
    }

    //dispatch never change so dont worry
  }, [data, dispatch]);

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
