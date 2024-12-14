import styles from "../DepartmentSPOC/Dept.module.css";
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
export default function SubjectDetails() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.header}>
            <h1 className={styles.main_title}>
              Cryptography and Network Security
            </h1>
          </div>
          <div className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.headertwo}>
            <div></div>
            {/* <h2 className={styles.sub_titles}>Class Instructor Details</h2> */}
            <div className={styles.buttontwo}>
              <Plus className={styles.icontwo} />
              <p>Assign New Instructor</p>
            </div>
          </div>
          <div className={styles.imgcont}>
            <img className={styles.image} src="src\assets\user.png" />
            <h4 className={styles.section_title}>Mr. Ram Vishwas</h4>
            <span className={styles.designation}>Subject Instructor</span>
          </div>
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
        <div className={styles.third}>
          <div className={styles.headertwo}>
            <h2 className={styles.sub_titles}>Assessment Details</h2>
            <div className={styles.buttontwo}>
              <Plus className={styles.icontwo} />
              <p>Add Assessment</p>
            </div>
          </div>
          <div className={styles.grid}>
            <AssessmentCard type="graded" />
            <AssessmentCard type="partial" />
            <AssessmentCard type="ungraded" />
            <AssessmentCard type="graded" />
          </div>
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
            <AssignmentCard />
            <AssignmentCard />
            <AssignmentCard />
            <AssignmentCard />
          </div>
        </div>
        <div className={styles.fourth}>
          <div className={styles.headertwo}>
            <h2 className={styles.sub_titles}>Overall Performance</h2>
          </div>
          <div className={styles.grids}>
            <Performance />
            <Performance />
            <Performance />
            <Performance />
          </div>
        </div>
      </div>
    </>
  );
}
