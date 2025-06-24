import styles from "./ProgressBar.module.css";

const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bar} style={{ width: `${progress}%` }} />
      <span className={styles.label}>{progress}% completed</span>
    </div>
  );
};

export default ProgressBar;
