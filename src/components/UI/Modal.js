import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCancel={props.onCancel} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        props.children,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
