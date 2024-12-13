import styles from "./CollegeCard.module.css";
import { School } from "lucide-react";
export default function CollegeCard() {
  return (
    <>
      <div className={styles.card}>
        <div
          style={{
            background:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80') no-repeat center center/cover",
          }}
          className={styles.card_image}
        />
        <div className={styles.card_content}>
          <div className={styles.form_group}>
            <div className={styles.name}>
              <p>Vidya Vikas Institute of Engineering and Technology</p>
            </div>
            <span className={styles.address}>Alanahally,Mysore,Karnataka</span>
            <div className={styles.spoc}>
              <h3>SPOC Details</h3>
              <div className={styles.spoc_details}>
                <p>Mr. Hitesh</p>
                <p>9740490947</p>
                <p>10hiteshparmar@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
