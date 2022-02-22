import {
  SUCCESS_STATUS,
  PENDING_STATUS,
  ERROR_STATUS,
} from "../constants/notificationStatus";

import {
  SUCCESS_MESSAGE,
  PENDING_MESSAGE,
  ERROR_MESSAGE,
} from "../constants/notificationMessages";
import { useEffect, useState } from "react";

const useNotification = () => {
  const [statusMessage, setStatusMessage] = useState(null);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setStatusMessage(null);
    }, 3000);

    return () => {
      clearTimeout(identifier);
    };
  }, [statusMessage]);

  const setNotificationMessage = (status) => {
    if (status === SUCCESS_STATUS) {
      setStatusMessage(
        <div className="alert alert-success" role="alert">
          {`${SUCCESS_MESSAGE}`}
        </div>
      );
    } else if (status === PENDING_STATUS) {
      setStatusMessage(
        <div className="alert alert-primary" role="alert">
          {`${PENDING_MESSAGE}`}
        </div>
      );
    } else if (status === ERROR_STATUS) {
      setStatusMessage(
        <div className="alert alert-danger" role="alert">
          {`${ERROR_MESSAGE}`}
        </div>
      );
    }
  };

  return {
    statusMessage,
    setNotificationMessage,
  };
};

export default useNotification;
