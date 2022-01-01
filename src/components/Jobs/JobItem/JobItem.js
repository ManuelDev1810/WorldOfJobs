const JobItem = (props) => {

    return (
        <a href="#" className="list-group-item list-group-item-action w-100">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{props.job.title} - {props.job.company}</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">{props.job.description}</p>
            <small className="text-muted">{props.job.remote ? 'Remote' : 'Not Remote'}</small>
          </a>
    )

}

export default JobItem;