import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./JobDetail.module.css";
import { useEffect, useState } from "react";
import JobApplication from "../JobApplication/JobApplication";

const JobDetail = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const job = useSelector((state) =>
    state.jobs.items.find((job) => job.id === parseInt(jobId))
  );

  useEffect(() => {
    if (!job) navigate("/jobs");
  }, [job, navigate]);

  let content = () => {
    if (job) {
      return (
        <div className={`card mb-3 ${classes.job_detail}`}>
          <img
            className="card-img-top"
            src={job.logo}
            alt={`Logo of ${job.title}`}
          />
          <div className="card-body">
            <h5 className="card-title">{`${job.title} - ${job.company}`}</h5>
            <p className="card-text">{job.description}</p>
            <p className="card-text">
              <small className="text-muted">{`Last updated ${job.date}`}</small>
            </p>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShowModal((prevState) => !prevState)}
          >
            Apply
          </button>

          {showModal !== false ? (
            <JobApplication
              jobId={job.id}
              title={job.title}
              company={job.company}
              onCancel={() => setShowModal((prevState) => !prevState)}
            />
          ) : null}
        </div>
      );
    } else {
      return null;
    }
  };

  return content();
};

export default JobDetail;
