import { jobActions } from "./job-slide";
import uiSlice, { uiActions } from "./ui-slice";
import {
  SUCCESS_STATUS,
  PENDING_STATUS,
  ERROR_STATUS,
} from "../constants/notificationStatus";
import {
  SUCCESS_MESSAGE,
  ERROR_MESSAGE,
  PENDING_MESSAGE,
} from "../constants/notificationMessage";
import { JOBS_API_URL } from "../constants/api";

export const fetchJobsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(JOBS_API_URL);

      if (!response.ok) {
        throw new Error(ERROR_MESSAGE);
      }

      const data = await response.json();

      return data;
    };

    try {
      const jobsData = await fetchData();
      const loadedJobs = [];

      if (jobsData) {
        for (const key in jobsData) {
          loadedJobs.push({
            id: jobsData[key].id,
            title: jobsData[key].title,
            company: jobsData[key].company,
            vacancies: jobsData[key].vacancies,
            remote: true,
            description: jobsData[key].description,
            logo: jobsData[key].logo,
            date: jobsData[key].date,
          });
        }
      }

      dispatch(
        jobActions.replaceJobs({
          items: loadedJobs || [],
        })
      );
    } catch (error) {
      dispatch(
        uiSlice.showNotifications({
          status: ERROR_STATUS,
          message: ERROR_MESSAGE,
        })
      );
    }
  };
};

export const sendJobData = (jobs) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotifications({
        status: PENDING_STATUS,
        message: PENDING_MESSAGE,
      })
    );

    const sendRequest = async () => {
      const response = await fetch(JOBS_API_URL, {
        method: "PUT",
        body: JSON.stringify(jobs),
      });

      if (!response.ok) {
        throw new Error(ERROR_MESSAGE);
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotifications({
          status: SUCCESS_STATUS,
          message: SUCCESS_MESSAGE,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotifications({
          status: ERROR_STATUS,
          message: ERROR_MESSAGE,
        })
      );
    }
  };
};
