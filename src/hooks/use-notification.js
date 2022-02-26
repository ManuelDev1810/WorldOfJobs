import {
  SUCCESS_STATUS,
  SENDING_STATUS,
  ERROR_STATUS,
  FETCHING_STATUS,
} from "../constants/notificationStatus";

import {
  SUCCESS_MESSAGE,
  SENDING_MESSAGE,
  ERROR_MESSAGE,
  FETCHING_MESSAGE,
} from "../constants/notificationMessages";
import { useCallback, useEffect, useState } from "react";

const initialConfiuration = {
  shouldDissapear: false,
  dissapearTime: 0,
  shouldClear: false,
};

const useNotification = (configuration = initialConfiuration) => {
  const [statusMessage, setStatusMessage] = useState(null);

  useEffect(() => {
    let identifier = null;
    if (configuration.shouldDissapear) {
      identifier = setTimeout(() => {
        setStatusMessage(null);
      }, configuration.dissapearTime);
    }

    if (configuration.shouldClear) {
      return () => {
        clearTimeout(identifier);
      };
    }
  }, [statusMessage, configuration]);

  const setNotificationMessage = useCallback((status) => {
    if (status === SUCCESS_STATUS) {
      setStatusMessage(
        <div className="alert alert-success" role="alert">
          {`${SUCCESS_MESSAGE}`}
        </div>
      );
    } else if (status === SENDING_STATUS) {
      setStatusMessage(
        <div className="alert alert-primary" role="alert">
          {`${SENDING_MESSAGE}`}
        </div>
      );
    } else if (status === FETCHING_STATUS) {
      setStatusMessage(
        <div className="alert alert-primary" role="alert">
          {`${FETCHING_MESSAGE}`}
        </div>
      );
    } else if (status === ERROR_STATUS) {
      setStatusMessage(
        <div className="alert alert-danger" role="alert">
          {`${ERROR_MESSAGE}`}
        </div>
      );
    } else if(status === null) {
      setStatusMessage(null);
    }
  }, []);

  return {
    statusMessage,
    setNotificationMessage,
  };
};

export default useNotification;
