import styles from "./Dept.module.css";
import { ArrowRightToLine } from "lucide-react";
import { Users } from "lucide-react";
import { Plus } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { FilePenLine } from "lucide-react";
import { Trash2 } from "lucide-react";
import SubjectRow from "../TableRow/SubjectRow";
import StudentRow from "../TableRow/StudentRow";
import FormInstNew from "../Instructorform/FormInstNew";
import { useState } from "react";

export default function Dept() {
  const [formActive, setFormActive] = useState(false);

  return (
    <>
      <FormInstNew isActive={formActive} setActive={setFormActive} />

      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.header}>
            <h1 className={styles.main_title}>First Year</h1>
            <a className={styles.button}>
              <ArrowRightToLine className={styles.icon} /> <p>Edit Details</p>
            </a>
          </div>
          <div className="flex items-center justify-around text-sm text-gray-500">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <p>
                No. of Students Enrolled: <span>100</span>
              </p>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-6 mr-1" />
              <p>
                No. of Instructors Enrolled: <span>10</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.headertwo}>
            <div></div>
            {/* <h2 className={styles.sub_titles}>Class Instructor Details</h2> */}
            <div
              className={styles.buttontwo}
              onClick={() => setFormActive(true)}
            >
              <Plus className={styles.icontwo} />
              <p>Assign New Instructor</p>
            </div>
          </div>
          <div className={styles.imgcont}>
            <img className={styles.image} src="src\assets\user.png" />
            <h4 className={styles.section_title}>Mr. Ram Vishwas</h4>
            <span className={styles.designation}>Class Instructor</span>
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
            <h2 className={styles.sub_titles}>Subject Details</h2>
            <div className={styles.buttontwo}>
              <Plus className={styles.icontwo} />
              <p>Add Subject</p>
            </div>
          </div>
          <table
            cellspacing="5"
            cellpadding="5"
            className={styles.tableContainer}
          >
            <thead>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Subject code</th>
                <th className={styles.tableHeader}>Subject</th>
                <th className={styles.tableHeader}>Faculty</th>
                <th className={styles.tableHeader}>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              <SubjectRow />
              <SubjectRow />
              <SubjectRow />
              <SubjectRow />
              <SubjectRow />
            </tbody>
          </table>
        </div>
        <div className={styles.fourth}>
          <div className={styles.headertwo}>
            <h2 className={styles.sub_titles}>Student Details</h2>
            <div className={styles.buttontwo}>
              <Plus className={styles.icontwo} />
              <p>Assign Student</p>
            </div>
          </div>
          <table cellspacing="5" cellpadding="5">
            <thead>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Registration ID</th>
                <th className={styles.tableHeader}>Name</th>
                <th className={styles.tableHeader}>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              <StudentRow />
              <StudentRow />
              <StudentRow />
              <StudentRow />
              <StudentRow />
              <StudentRow />
              <StudentRow />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
