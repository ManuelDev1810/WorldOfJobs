import { useSelector } from "react-redux";
import styles from "./JobApplicationList.module.css";
import JobApplicationItem from "../JobApplicationItem/JobApplicationItem";

const JobApplicationList = (props) => {
  const data = useSelector((state) => state.applications);

  let content = () => {
    if (data.applications.length > 0) {
      return data.applications.map((application) => {
        return (
          <JobApplicationItem key={application.id} application={application} />
        );
      });
    } else if (data.applications.length === 0 && props.statusMessage !== null) {
      return null;
    } else {
      return <p>No one has apply to this Job.</p>;
    }
  };

  return (
    <div className={styles.job_list}>
      <p className="h3">Applications</p>
      {props.statusMessage}
      {content()}
    </div>
  );
};

export default JobApplicationList;
