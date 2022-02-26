import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classes from "./JobDetail.module.css";
import { useEffect, useState } from "react";
import JobApplicationModal from "../JobApplication/JobApplicationModal/JobApplicationModal";
import JobApplicationList from "../JobApplication/JobApplicationList/JobApplicationList";
import Modal from "../../UI/Modal";
import useNotification from "../../../hooks/use-notification";
import { fetchApplicationsData } from "../../../store/application-actions";
import { FETCHING_STATUS } from "../../../constants/notificationStatus";

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
    if (job) {
      const fetchData = async () => {
        setNotificationMessage(FETCHING_STATUS);
        const response = await dispatch(fetchApplicationsData(job.id));
        setNotificationMessage(response !== undefined ? response : null);
      };
      fetchData();
    }
  }, [dispatch, setNotificationMessage, job]);

  const setModal = () => setShowModal((prevState) => !prevState);

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
      {showModal !== false ? (
        <Modal onCancel={setModal}>
          <JobApplicationModal
            jobId={job.id}
            title={job.title}
            company={job.company}
            onCancel={setModal}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default JobDetail;
