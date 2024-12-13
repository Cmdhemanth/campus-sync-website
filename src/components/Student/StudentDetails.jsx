import styles from "./Student.module.css";
import { ArrowRightToLine } from "lucide-react";
import { Users } from "lucide-react";
import { Plus } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { FilePenLine } from "lucide-react";
import { Trash2 } from "lucide-react";
import SubjectRow from "../TableRow/SubjectRow";
import StudentRow from "../TableRow/StudentRow";
import AssessmentCard from "../Assignment/AssessmentCard";
import AssignmentCard from "../Assignment/AssignmentCard";
import Performance from "../OverallPerformance/Performance";
import Chart from "../BarChart/Chart";
export default function StudentDetails() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.header}>
            <h1 className={styles.main_title}>Anisha R T</h1>
            <a className={styles.button}>
              <ArrowRightToLine className={styles.icon} /> <p>Edit Details</p>
            </a>
          </div>
          <p className={styles.designation}>4VM21IS006</p>

          <div className={styles.contact}>
            <div className={styles.phone}>
              <Phone className={styles.iconthree} />
              <p>+919740490947</p>
            </div>
            <div className={styles.email}>
              <Mail className={styles.iconfour} />
              <p>10hiteshparmar@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={styles.headertwo}>
          <h2 className={styles.sub_titles}>Assessment Details</h2>
          <div className={styles.buttontwo}>
            <Plus className={styles.icontwo} />
            <p>Add Assessment</p>
          </div>
        </div>
        <div className={styles.second}>
          <Chart />
          <Chart />
          <Chart />
          <Chart />
        </div>
        <div className={styles.fourth}>
          <div className={styles.headertwo}>
            <h2 className={styles.sub_titles}>Assignmnet Details</h2>
            <div className={styles.buttontwo}>
              <Plus className={styles.icontwo} />
              <p>Add Assignment</p>
            </div>
          </div>
          <div className={styles.grid}>
            <Chart />
            <Chart />
            <Chart />
            <Chart />
          </div>
        </div>
        <div className={styles.fourth}>
          <div className={styles.headertwo}>
            <h2 className={styles.sub_titles}>Overall Performance</h2>
          </div>
          <Performance />
        </div>
      </div>
    </>
  );
}
