import React from "react";
import styles from "./HeroImg.module.css";
import Heading from "../UI/Heading";

function HeroImg() {
  return (
    <div className={styles.parent}>
      <div className={styles.parentChild}>
        <div className={styles.leftSection}>
          <div className={styles.badge}>
            <div className={styles.badgeImg}>
              <img src="/phone.png" alt="phone" />
              <div className={styles.badgeText}>
                <span className={styles.badgeTitle}>Free Consultation</span>
                <span className={styles.badgeSubtitle}>
                  Consultation with the best
                </span>
              </div>
            </div>
          </div>
          <div className={styles.imgDiv}>
            <img src="/img-1.png" alt="" className={`${styles.img1} ${styles.image}`} />
            <img src="/img-2.png" alt="" className={`${styles.img2} ${styles.image}`} />
          </div>
        </div>

        <div className={styles.rightSection}>
          <Heading
            heading={"Patient"}
            highlight={"Caring"}
            subHeading={"HELPING PATIENTS FROM AROUND THE GLOBE!!"}
            centered={false}
          />
          <p className={styles.text}>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
