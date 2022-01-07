import { useSelector } from "react-redux";
import JobItem from "./JobItem/JobItem";

const Jobs = () => {
  const data = useSelector((state) => state.jobs);
  const organizedJobs = [...data.jobs];
  organizedJobs.reverse();

  return (
    <div className="d-flex justify-content-center">
      <div className="list-group w-50">
        {organizedJobs.map((job) => {
          return <JobItem key={job.id} job={job} />;
        })}
      </div>
    </div>
  );
};

export default Jobs;
