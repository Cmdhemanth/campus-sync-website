import styles from "./CollegeCard.module.css";
export default function CollegeCard({ institution }) {
  const { image, name, address, handler } = institution ?? {};
  const { name: hname, email, phone } = handler ?? {};

  return (
    <>
      <div className={styles.card}>
        <div
          style={{
            background: "url('" + image + "') no-repeat center center/cover",
          }}
          className={styles.card_image}
        />
        <div className={styles.card_content}>
          <div className={styles.form_group}>
            <div className={styles.name}>
              <p>{name}</p>
            </div>
            <span className={styles.address}>{address}</span>
            <div className={styles.spoc}>
              <h3>SPOC Details</h3>
              <div className={styles.spoc_details}>
                <p>{hname}</p>
                <p>{phone}</p>
                <p>{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
