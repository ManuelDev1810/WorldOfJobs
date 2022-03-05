import { useSelector } from "react-redux";
import usePagination from "../../hooks/use-pagination";
import JobItem from "./JobItem/JobItem";

const Jobs = () => {
  const data = useSelector((state) => state.jobs.items);
  const { items: jobs, pagination } = usePagination({
    items: data,
    itemsPerPage: 5,
  });

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
    <div>
      <div>{content()}</div>
      {pagination()}
    </div>
  );
};

export default Jobs;
