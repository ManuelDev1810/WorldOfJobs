import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../../UI/Backdrop";
import  JobApplicationModal from "./JobAplicationModal";

const JobApplication = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCancel={props.onCancel} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <JobApplicationModal
          jobId={props.jobId}
          title={props.title}
          company={props.company}
          onCancel={props.onCancel}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default JobApplication;
