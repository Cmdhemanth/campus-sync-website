import styles from "./CollegeCard.module.css";
import { School } from "lucide-react";
export default function CollegeCard() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>Image</div>
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
