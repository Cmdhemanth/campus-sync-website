import styles from "./Performance.module.css";
export default function Performance() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.studet}>
            <h1 className={styles.name}>Anisha R T</h1>
            <p className={styles.regid}>4VM21IS006</p>
          </div>
          <div className={styles.grid}>
            <span>Attendance</span>
            <span>Attendance Percentage</span>
            <span>20/70</span>
            <span>15%</span>
          </div>
        </div>
        <div className={styles.body}>
          <p className={styles.para}>Assessments</p>
          <table className={styles.table}>
            <tr>
              <td>Assessment 1</td>
              <td>35</td>
              <td>50</td>
              <td>92%</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td>Assessment 2</td>
              <td>35</td>
              <td>50</td>
              <td>92%</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td>Assessment 3</td>
              <td>35</td>
              <td>50</td>
              <td>92%</td>
              <td>Pass</td>
            </tr>
          </table>
          <p className={styles.para}>Assignments</p>
          <table className={styles.table}>
            <tr>
              <td>Assignment 1</td>
              <td>35</td>
              <td>50</td>
              <td>92%</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td>Assignment 2</td>
              <td>35</td>
              <td>50</td>
              <td>92%</td>
              <td>fail</td>
            </tr>
            <tr>
              <td>Assignment 3</td>
              <td>35</td>
              <td>50</td>
              <td>92%</td>
              <td>Pass</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
