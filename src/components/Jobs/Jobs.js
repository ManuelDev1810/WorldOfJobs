import { useSelector } from "react-redux";
import JobItem from "./JobItem/JobItem";

const Jobs = () => {
  const data = useSelector((state) => state.jobs);
  const organizedJobs = [...data.jobs];
  organizedJobs.reverse();

  const content = () => {
    {
      if (organizedJobs.length > 0) {
        return (
          <>
            {organizedJobs.map((job) => {
              return <JobItem key={job.id} job={job} />;
            })}
          </>
        );
      } else {
        return <p>No jobs available</ p>;
      }
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="list-group w-50">{content()}</div>
    </div>
  );
};

export default Jobs;
