import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { fetchJobsData } from "./store/job-actions";
import Header from "./components/Header/Header";
import Jobs from "./components/Jobs/Jobs";
import JobsSearch from "./components/Jobs/JobsSearch/JobsSearch";
import NewJob from "./components/Jobs/NewJob/NewJob";
import JobDetail from "./components/Jobs/JobDetail/JobDetail";
import useNotification from "./hooks/use-notification";

function App() {
  const dispatch = useDispatch();
  const { statusMessage, setNotificationMessage } = useNotification();

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(fetchJobsData());
      setNotificationMessage(response);
    };
    fetchData();
  }, [dispatch, setNotificationMessage]);

  return (
    <div>
      <Header />
      {statusMessage}
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
        ></Route>
        <Route path="/jobs/:jobId" element={<JobDetail />} />
        <Route path="/new-job" element={<NewJob />} />
      </Routes>
    </div>
  );
}

export default App;
