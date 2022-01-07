import { useRef } from "react";
import { useDispatch } from "react-redux";
import { jobActions } from "../../../store/job-slide";

const NewJob = () => {
  const dispatch = useDispatch();
  const titleElement = useRef("");
  const companyElement = useRef("");
  const vacanciesElement = useRef(1);
  const remoteElement = useRef(false);
  const resumeElement = useRef("");
  const descriptionElement = useRef("");

  const addJobHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleElement.current.value;
    const enteredCompany = companyElement.current.value;
    const enteredVacancies = vacanciesElement.current.value;
    const enteredRemote = remoteElement.current.checked;
    const enteredResume = resumeElement.current.value;
    const enteredDescription = descriptionElement.current.value;

    dispatch(
      jobActions.addJob({
        id: new Date().getTime(),
        title: enteredTitle,
        company: enteredCompany,
        vacancies: enteredVacancies,
        remote: enteredRemote,
        dscription: enteredDescription,
        resume: enteredResume,
        date: new Date().toISOString().slice(0, 10),
      })
    );
  };

  return (
    <div className="d-flex justify-content-center mt-2 mb-2">
      <div className="list-group w-50">
        <form onSubmit={addJobHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
              ref={titleElement}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <input
              type="text"
              className="form-control"
              id="company"
              placeholder="Company"
              ref={companyElement}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="vacancies" className="form-label">
              Vacancies
            </label>
            <input
              type="number"
              className="form-control"
              id="vacancies"
              placeholder="Vacancies"
              ref={vacanciesElement}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="remote"
              ref={remoteElement}
            />
            <label className="form-check-label" htmlFor="remote">
              Remote
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="resume" className="form-label">
              Add Resume
            </label>
            <input
              className="form-control"
              type="file"
              id="resume"
              ref={resumeElement}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              ref={descriptionElement}
            ></textarea>
          </div>
          <button className="btn btn-outline-dark float-end">Send</button>
        </form>
      </div>
    </div>
  );
};

export default NewJob;
