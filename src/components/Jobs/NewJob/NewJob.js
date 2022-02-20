import { useRef } from "react";
import { useDispatch } from "react-redux";
import useNotification from "../../../hooks/use-notification";
import { sendJobData } from "../../../store/job-actions";
import { PENDING_STATUS } from "../../../constants/notificationStatus";

const NewJob = () => {
  const dispatch = useDispatch();
  const {statusMessage, setNotificationMessage} = useNotification();
  const titleElement = useRef("");
  const companyElement = useRef("");
  const vacanciesElement = useRef(null);
  const remoteElement = useRef(false);
  const logoElement = useRef("");
  const descriptionElement = useRef("");

  const addJobHandler = async (event) => {
    event.preventDefault();
    setNotificationMessage(PENDING_STATUS);
    const enteredTitle = titleElement.current.value;
    const enteredCompany = companyElement.current.value;
    const enteredVacancies = vacanciesElement.current.value;
    const enteredRemote = remoteElement.current.checked;
    const enteredLogo = logoElement.current.value;
    const enteredDescription = descriptionElement.current.value;

    const response = await dispatch(
      sendJobData({
        id: new Date().getTime(),
        title: enteredTitle,
        company: enteredCompany,
        vacancies: enteredVacancies,
        remote: enteredRemote,
        description: enteredDescription,
        logo: enteredLogo,
        date: new Date().toISOString().slice(0, 10),
      })
    );

    setNotificationMessage(response);

    clearForm();
  };

  const clearForm = () => {
    titleElement.current.value = "";
    companyElement.current.value = "";
    vacanciesElement.current.value = null;
    remoteElement.current.checked = false;
    logoElement.current.value = "";
    descriptionElement.current.value = "";
  };

  return (
    <div className="d-flex justify-content-center mt-2 mb-2">
      <div className="list-group w-50">
        {statusMessage}
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
              required
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
              required
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
              required
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
            <label htmlFor="logo" className="form-label">
              Logo
            </label>
            <input
              className="form-control"
              type="url"
              id="logo"
              ref={logoElement}
              required
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
              required
            ></textarea>
          </div>
          <button className="btn btn-outline-dark float-end">Send</button>
        </form>
      </div>
    </div>
  );
};

export default NewJob;
