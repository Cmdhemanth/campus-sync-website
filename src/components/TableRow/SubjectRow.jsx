import styles from "./SubjectRow.module.css";
import { FilePenLine } from "lucide-react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SubjectRow() {
  const router = useNavigate();

  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableData}>21IS71</td>
      <td className={styles.tableData}>Cryptography and Network Security</td>
      <td className={styles.tableData}>Dr.Somashekhar B M</td>
      <td className={`${styles.tableData} ${styles.options}`}>
        <FilePenLine
          className={styles.optionE}
          onClick={() => router("/subject")}
        />
        <Trash2 className={styles.optionD} />
      </td>
    </tr>
  );
}
