import { jobActions } from "./job-slide";

export const fetchJobsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-12004-default-rtdb.firebaseio.com/jobs.json"
      );

      if (!response.ok) {
        throw new Error("Fetching jobs data failed.");
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
            resume: jobsData[key].resume,
            date: jobsData[key].date,
          });
        }
      }
      dispatch(
        jobActions.replaceJobs({
          jobs: loadedJobs || [],
        })
      );
    } catch (error) {
      //Show error with another state
      console.log(error);
    }
  };
};

export const sendJobData = (jobs) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-12004-default-rtdb.firebaseio.com/jobs.json",
        {
          method: "PUT",
          body: JSON.stringify(jobs),
        }
      );

      if (!response.ok) {
        //Show error with another state
        console.log("Something bad happened");
      }
    };

    try {
      sendRequest();
    } catch (error) {
      //Show error with another state
      console.log(error);
    }
  };
};
