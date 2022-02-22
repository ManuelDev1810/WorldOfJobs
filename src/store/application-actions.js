import { SUCCESS_STATUS, ERROR_STATUS } from "../constants/notificationStatus";
import { ERROR_MESSAGE } from "../constants/notificationMessages";
import { APPLICATIONS_API_URL } from "../constants/api";
import { applicationActions } from "./application-slide";

export const fetchApplicationsData = (jobId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(APPLICATIONS_API_URL);
      if (!response.ok) {
        throw new Error(ERROR_MESSAGE);
      }

      const data = await response.json();

      return data;
    };

    try {
      const applicationsData = await fetchData();
      let loadedApplications = [];

      if (applicationsData) {
        for (const key in applicationsData) {
          loadedApplications.push({
            id: applicationsData[key].id,
            fullName: applicationsData[key].fullName,
            email: applicationsData[key].email,
            remote: applicationsData[key].remote,
            resume: applicationsData[key].resume,
            jobId: applicationsData[key].jobId,
            date: applicationsData[key].date,
          });
        }
      }

      //DUMMY FILTER BECAUSE FIREBASE IS NOT ALLOWING FILTERING
      loadedApplications =
        jobId !== undefined
          ? loadedApplications.filter((app) => app.jobId === parseInt(jobId))
          : loadedApplications;

      loadedApplications.reverse();

      dispatch(
        applicationActions.replaceApplications({
          applications: loadedApplications || [],
        })
      );
    } catch (error) {
      return ERROR_STATUS;
    }
  };
};

export const sendApplicationData = (application) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(APPLICATIONS_API_URL, {
        method: "POST",
        body: JSON.stringify(application),
      });

      if (!response.ok) {
        throw new Error(ERROR_MESSAGE);
      }
    };

    try {
      await sendRequest();
      return SUCCESS_STATUS;
    } catch (error) {
      return ERROR_STATUS;
    }
  };
};
