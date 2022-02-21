import { useSelector } from "react-redux";
import styles from "./JobApplicationList.module.css";
import JobApplicationItem from "./JobApplicationItem";

const JobApplicationList = (props) => {
  const data = useSelector((state) => state.applications);
  return (
    <div className={styles.job_list}>
      <p className="h3">Applications</p>
      {props.statusMessage}
      {data.applications.map((application) => {
        return (
          <JobApplicationItem key={application.id} application={application} />
        );
      })}
    </div>
  );
};

export default JobApplicationList;
