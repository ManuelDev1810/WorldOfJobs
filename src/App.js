import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { fetchJobsData, sendJobData } from "./store/job-actions";
import Header from "./components/Header/Header";
import Jobs from "./components/Jobs/Jobs";
import JobsSearch from "./components/Jobs/JobsSearch/JobsSearch";
import NewJob from "./components/Jobs/NewJob/NewJob";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.jobs);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchJobsData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (data.changed) {
      dispatch(sendJobData(data.jobs));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Header />
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
        />
      )}

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
        <Route path="/new-job" element={<NewJob />} />
      </Routes>
    </div>
  );
}

export default App;
