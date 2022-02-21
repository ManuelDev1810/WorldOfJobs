import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classes from "./JobDetail.module.css";
import { useEffect, useState } from "react";
import JobApplication from "../JobApplication/JobApplication";
import JobApplicationList from "../JobApplication/JobApplicationList";
import useNotification from "../../../hooks/use-notification";
import { fetchApplicationsData } from "../../../store/application-actions";

const JobDetail = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { statusMessage, setNotificationMessage } = useNotification();

  const [showModal, setShowModal] = useState(false);
  const job = useSelector((state) =>
    state.jobs.items.find((job) => job.id === parseInt(jobId))
  );

  useEffect(() => {
    if (!job) navigate("/jobs");
  }, [job, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(fetchApplicationsData(jobId));
      setNotificationMessage(response);
    };
    fetchData();
  }, [dispatch, setNotificationMessage, jobId]);

  let jobDetailContent = () => {
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

  return (
    <>
      {jobDetailContent()}
      <JobApplicationList statusMessage={statusMessage} />
    </>
  );
};

export default JobDetail;
