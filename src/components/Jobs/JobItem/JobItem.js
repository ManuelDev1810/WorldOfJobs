import { Link } from "react-router-dom";

const JobItem = (props) => {
  console.log(props)
  return (
    <Link to={`${props.job.id}`} className="list-group-item list-group-item-action w-100">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          {props.job.title} - {props.job.company}
        </h5>
        <small className="text-muted">{props.job.date}</small>
      </div>
      <p className="mb-1">{props.job.description}</p>
      <small className="text-muted">
        {props.job.remote ? "Remote" : "Not Remote"}
      </small>
    </ Link>
  );
};

export default JobItem;
