import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./JobDetail.module.css";

const JobDetail = () => {
  const { jobId } = useParams();

  const job = useSelector((state) =>
    state.jobs.items.find((job) => job.id === parseInt(jobId))
  );

  return (
    <div className={`card mb-3 ${classes.job_detail}`}>
      <img
        className="card-img-top"
        src={job.logo}
        alt={`Logo of ${job.title}`}
      />
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-text">{job.description}</p>
        <p className="card-text">
          <small className="text-muted">{`Last updated ${job.date}`}</small>
        </p>
      </div>
    </div>
  );
};

export default JobDetail;
