const ApplicationItem = (props) => {
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
        <button type="button" className="btn btn-secondary">
          View Resume.
        </button>
      </div>
      <div className="card-footer text-muted">{props.application.date}</div>
    </div>
  );
};

export default ApplicationItem;
