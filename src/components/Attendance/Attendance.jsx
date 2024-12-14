import styles from "./Attendance.module.css";
import Row from "./../TableRow/AttendanceRow";
export default function Attendance() {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Attendance Sheet <span className={styles.percentage}>53.58%</span>
          </h1>
        </div>
        <div className={styles.week}>
          <div className={styles.week_selector}>
            <button className={styles.arrow}>&lt;</button>
            <span>July 4, 2021 – July 10, 2021 Week 131</span>
            <button className={styles.arrow}>&gt;</button>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 sm:ml-3 sm:w-auto"
          >
            Save
          </button>
        </div>

        <div className={styles.table_container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.table_header}>Student</th>
                <th className={styles.table_header}>Registration ID</th>
                <th className={styles.table_header}>SUN</th>
                <th className={styles.table_header}>MON</th>
                <th className={styles.table_header}>TUE</th>
                <th className={styles.table_header}>WED</th>
                <th className={styles.table_header}>THU</th>
                <th className={styles.table_header}>FRI</th>
                <th className={styles.table_header}>SAT</th>
              </tr>
            </thead>
            <tbody>
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
