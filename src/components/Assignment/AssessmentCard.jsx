import styles from "./AssignmentCard.module.css";

export default function AssessmentCard({ type }) {
  // type = "partial" | "ungraded" | "graded";

  return (
    <>
      {type === "graded" && (
        <div className={styles.card}>
          <h2 className={styles.title}>Assessment 1</h2>
          <div className={styles.tabletwo}>
            <p>Pass Ratio</p>
            <p>Pass Percentage</p>
            <p>35/40</p>
            <p>78%</p>
          </div>
        </div>
      )}
      {type === "partial" && (
        <div className={styles.card}>
          <h2 className={styles.title}>Assessment 1</h2>
          <p className={styles.status}>Partially Graded</p>
        </div>
      )}
      {type === "ungraded" && (
        <div className={styles.card}>
          <h2 className={styles.title}>Assessment 1</h2>
          <p className={styles.status}>Ungraded</p>
        </div>
      )}
    </>
  );
}
