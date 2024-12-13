import styles from "./SubjectRow.module.css";
import { FilePenLine } from "lucide-react";
import { Trash2 } from "lucide-react";

export default function InstructorRow() {
  return (
    <tr>
      <td className={styles.tableData}>JNF4UJNE</td>
      <td className={styles.tableData}>Anisha R T</td>
      <td className={styles.tableData}>B.E CS & E</td>
      <td className={`${styles.tableData} ${styles.options}`}>
        <FilePenLine className={styles.optionE} />
        <Trash2 className={styles.optionD} />
      </td>
    </tr>
  );
}
