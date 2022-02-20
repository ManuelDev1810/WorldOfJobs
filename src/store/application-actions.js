import {
  SUCCESS_STATUS,
  ERROR_STATUS,
} from "../constants/notificationStatus";
import {
  ERROR_MESSAGE,
} from "../constants/notificationMessages";
import { APPLICATIONS_API_URL } from "../constants/api";

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
