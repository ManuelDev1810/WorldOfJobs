import {SUCCESS_STATUS, PENDING_STATUS, ERROR_STATUS} from "../../constants/notificationStatus";

const Notification = (props) => {
  const renderNotification = () => {
    if (props.status === SUCCESS_STATUS) {
      return (
        <div className="alert alert-success" role="alert">
          {`${props.message}`}
        </div>
      );
    } else if (props.status === PENDING_STATUS) {
      return (
        <div class="alert alert-primary" role="alert">
          {`${props.message}`}
        </div>
      );
    } else if (props.status === ERROR_STATUS) {
      return (
        <div class="alert alert-danger" role="alert">
          {`${props.message}`}
        </div>
      );
    }
  };

  return <>{renderNotification()}</>;
};

export default Notification;
