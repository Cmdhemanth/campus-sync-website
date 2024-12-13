import styles from "./Cards.module.css";
import { Users } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../UI/tabs";

export default function Cards() {
  return (
    <>
      <Tabs defaultValue="Active">
        <TabsList>
          <TabsTrigger value="Active">Active Year</TabsTrigger>
          <TabsTrigger value="Previous">Previous Year</TabsTrigger>
        </TabsList>
        <TabsContent value="Active">
          <div className={styles.parent}>
            <div className={styles.left}>
              <div classname={styles.content}>
                <h1 className={styles.heading}>1st Year</h1>
                <div className="flex items-center justify-around text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <p className={styles.pad_top}>
                      No. of Students Enrolled: <span>100</span>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-6 mr-1" />
                    <p className={styles.pad_top}>
                      No. of Instructors Enrolled: <span>10</span>
                    </p>
                  </div>
                </div>
                <p className={`${styles.instName} ${styles.pad_top}`}>
                  Class Instructor: <span>Mr. Ram</span>
                </p>
              </div>
            </div>
            <div className={styles.right}>
              <img src="src\assets\user.png" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
