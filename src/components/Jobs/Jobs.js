import { useSelector } from "react-redux";
import JobItem from "./JobItem/JobItem";

const Jobs = (props) => {
  const jobs = useSelector((state) => state.jobs.items);
  let organizedJobs = [...jobs];
  organizedJobs.reverse();

  /*DUMMY SEARCH, SHOULD BE DONE IN THE BACKEND*/
  if (props.query) {
    organizedJobs =
      props.query !== null
        ? jobs.filter(
            (job) =>
              job.title.includes(props.query) ||
              job.company.includes(props.query)
          )
        : jobs;
  }

  const content = () => {
    if (organizedJobs.length > 0) {
      console.log(organizedJobs);
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
