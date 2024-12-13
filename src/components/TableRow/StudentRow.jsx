import styles from "./SubjectRow.module.css";
import { FilePenLine } from "lucide-react";
import { Trash2 } from "lucide-react";

export default function StudentRow() {
  return (
    <tr>
      <td className={styles.tableData}>4VM21IS006</td>
      <td className={styles.tableData}>Anisha R T</td>
      <td className={`${styles.tableData} ${styles.options}`}>
        <FilePenLine className={styles.optionE} />
        <Trash2 className={styles.optionD} />
      </td>
    </tr>
  );
}
