import { useSelector } from "react-redux";
import JobItem from "./JobItem/JobItem";

const Jobs = () => {
  const jobs = useSelector((state) => state.jobs.items);

  const content = () => {
    if (jobs.length > 0) {
      return (
        <>
          {jobs.map((job) => {
            return <JobItem key={job.id} job={job} />;
          })}
        </>
      );
    } else {
      return <p>No jobs available</p>;
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="list-group w-50">{content()}</div>
    </div>
  );
};

export default Jobs;
