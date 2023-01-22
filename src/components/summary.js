import styles from "../css/summary.module.css";

const Summary = (props) => {
  return (
    <div
      className={styles.summary}
      dangerouslySetInnerHTML={{ __html: props.summary }}
    />
  );
};

export default Summary;
