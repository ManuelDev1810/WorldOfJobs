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
      dispatch(
        jobActions.replaceJobs({
          jobs: jobsData || [],
        })
      );
    } catch (error) {
      //Show error with another state
      console.log(error);
    }
  };
};

export const sendJobData = (job) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-12004-default-rtdb.firebaseio.com/jobs.json",
        {
          method: "POST",
          body: JSON.stringify(job),
        }
      );

      if (!response.ok) {
        //Show error with another state
        console.log('Something bad happened');
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
