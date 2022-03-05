import { jobActions } from "./job-slide";
import { SUCCESS_STATUS, ERROR_STATUS } from "../constants/notificationStatus";
import { ERROR_MESSAGE } from "../constants/notificationMessages";
import { JOBS_API_URL } from "../constants/api";

export const fetchJobsData = (filter) => {
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
      let loadedJobs = [];

      if (jobsData) {
        for (const key in jobsData) {
          loadedJobs.push({
            id: jobsData[key].id,
            title: jobsData[key].title,
            company: jobsData[key].company,
            vacancies: jobsData[key].vacancies,
            remote: jobsData[key].remote,
            description: jobsData[key].description,
            logo: jobsData[key].logo,
            date: jobsData[key].date,
          });
        }
      }

      //DUMMY FILTER BECAUSE FIREBASE IS NOT ALLOWING FILTERING
      loadedJobs =
        filter !== undefined
          ? loadedJobs.filter(
              (job) =>
                job.title.toUpperCase().includes(filter.toUpperCase()) ||
                job.company.toUpperCase().includes(filter.toUpperCase())
            )
          : loadedJobs;

      loadedJobs.reverse();

      dispatch(
        jobActions.replaceJobs({
          items: loadedJobs || [],
        })
      );
    } catch (error) {
      return ERROR_STATUS;
    }
  };
};

export const sendJobData = (job) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(JOBS_API_URL, {
        method: "POST",
        body: JSON.stringify(job),
      });

      if (!response.ok) {
        throw new Error(ERROR_MESSAGE);
      }
    };

    try {
      await sendRequest();
      dispatch(jobActions.addJob(job));
      return SUCCESS_STATUS;
    } catch (error) {
      return ERROR_STATUS;
    }
  };
};
