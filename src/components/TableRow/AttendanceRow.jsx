import { label } from "framer-motion/client";
import styles from "./SubjectRow.module.css";
import Checkbox from "@mui/material/Checkbox";

export default function AttendanceRow() {
  return (
    <>
      <tr>
        <td className={`${styles.tableData} ${styles.bgcolor}`}>Anisha R T</td>
        <td className={`${styles.tableData} ${styles.bgcolor}`}>4VM21IS006</td>
        <td className={`${styles.tableData} ${styles.bgcolor}`}>
          <Checkbox
            {...label}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            color="success"
          />
        </td>
        <td className={`${styles.tableData} ${styles.bgcolor}`}>
          <Checkbox
            {...label}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            color="success"
          />
        </td>
        <td className={`${styles.tableData} ${styles.bgcolor}`}>
          <Checkbox
            {...label}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            color="success"
          />
        </td>
        <td className={`${styles.tableData} ${styles.bgcolor}`}>
          <Checkbox
            {...label}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            color="success"
          />
        </td>
        <td className={`${styles.tableData} ${styles.bgcolor}`}>
          <Checkbox
            {...label}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            color="success"
          />
        </td>
        <td className={`${styles.tableData} ${styles.bgcolor}`}>
          <Checkbox
            {...label}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            color="success"
          />
        </td>
        <td className={`${styles.tableData} ${styles.bgcolor}`}>
          <Checkbox
            {...label}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            color="success"
          />
        </td>
      </tr>
    </>
  );
}
