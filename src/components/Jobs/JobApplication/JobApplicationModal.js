import { useRef } from "react";
import { useDispatch } from "react-redux";
import { sendApplicationData } from "../../../store/application-actions";
import useNotification from "../../../hooks/use-notification";
import useFile from "../../../hooks/use-file";
import styles from "./JobApplicationModal.module.css";
import Card from "../../UI/Card";
import { PENDING_STATUS } from "../../../constants/notificationStatus";

const JobApplicationModal = (props) => {
  const dispatch = useDispatch();
  const fullNameElement = useRef(null);
  const emailElement = useRef(null);
  const resumeElement = useRef(null);
  const remoteElement = useRef(null);
  const { file: resumeFile, convertToBase64 } = useFile();
  const { statusMessage, setNotificationMessage } = useNotification();

  const onApplyHandler = async (event) => {
    event.preventDefault();
    setNotificationMessage(PENDING_STATUS);

    const application = {
      id: new Date().getTime(),
      jobId: props.jobId,
      fullName: fullNameElement.current.value,
      email: emailElement.current.value,
      resume: resumeFile,
      remote: remoteElement.current.checked,
      date: new Date().toISOString().slice(0, 10),
    };

    const response = await dispatch(sendApplicationData(application));
    setNotificationMessage(response);
  };

  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{`Apply to : ${props.title} - ${props.company}`}</h2>
      </header>
      {statusMessage}
      <form className={styles.container} onSubmit={onApplyHandler}>
        <div className="mb-3">
          <label htmlFor="full-name" className="form-label">
            Full Name
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="full-name"
            ref={fullNameElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            required
            type="email"
            className="form-control"
            id="email"
            ref={emailElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resume" className="form-label">
            Resume
          </label>
          <input
            required
            type="file"
            className="form-control"
            id="resume"
            ref={resumeElement}
            onChange={() => convertToBase64(resumeElement.current.files[0])}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="remote"
            ref={remoteElement}
          />
          <label className="form-check-label" htmlFor="remote">
            Can you work remotely ?
          </label>
        </div>
        <div className={styles.actions}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={props.onCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Apply
          </button>
        </div>
      </form>
    </Card>
  );
};

export default JobApplicationModal;
