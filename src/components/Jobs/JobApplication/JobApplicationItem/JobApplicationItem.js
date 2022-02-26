import { useState } from "react";
import Modal from "../../../UI/Modal";
import PdfModal from "../../../UI/PdfModal";

const ApplicationItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="card text-center mb-2">
      <div className="card-header">
        <strong>{props.application.fullName}</strong>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.application.email}</h5>
        <p className="card-text">
          {props.application.remote === true
            ? `${props.application.fullName} is available to work remotely`
            : `${props.application.fullName} is not available to work remotely`}
        </p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setShowModal((prevState) => !prevState)}
        >
          View Resume.
        </button>
      </div>
      <div className="card-footer text-muted">{props.application.date}</div>

      {showModal !== false ? (
        <Modal onCancel={() => setShowModal((prevState) => !prevState)}>
          <PdfModal pdf={props.application.resume} />
        </Modal>
      ) : null}
    </div>
  );
};

export default ApplicationItem;
