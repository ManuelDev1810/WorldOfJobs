import styles from "./PdfModal.module.css";
import Card from "./Card";

const Pdf = (props) => {
  return (
    <Card className={styles.modal}>
      <iframe title="Pdf Application" className={styles.pdf} src={props.pdf} />
    </Card>
  );
};

export default Pdf;
