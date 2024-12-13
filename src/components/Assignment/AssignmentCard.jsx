import styles from "./AssignmentCard.module.css";

export default function AssessmentCard() {
  return (
    <>
      <div className={styles.cards}>
        <h2 className={styles.title}>Assignment 1</h2>
        <div className={styles.table}>
          <p>Due Date</p>
          <p>Submission Ratio</p>
          <p>Submitted</p>
          <p>27 Dec 2024</p>
          <p>35/40</p>
          <p>78%</p>
        </div>
      </div>
    </>
  );
}
