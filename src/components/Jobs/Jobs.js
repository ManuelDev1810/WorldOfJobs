import { useSelector } from "react-redux";
import JobItem from "./JobItem/JobItem";

const Jobs = (props) => {
  const data = useSelector((state) => state.jobs);
  let organizedJobs = [...data.jobs];
  organizedJobs.reverse();

  /*DUMMY SEARCH, SHOULD BE DONE IN THE BACKEND*/
  if (props.query) {
    organizedJobs =
      props.query !== null
        ? organizedJobs.filter(
            (job) =>
              job.title.includes(props.query) ||
              job.company.includes(props.query)
          )
        : organizedJobs;
  }

  const content = () => {
    if (organizedJobs.length > 0) {
      return (
        <>
          {organizedJobs.map((job) => {
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
