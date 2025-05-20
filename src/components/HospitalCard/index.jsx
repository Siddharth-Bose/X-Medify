import React from "react";
import styles from "./HospitalCard.module.css";
import DateTabs from "./DateTabs";
import Button from "../UI/Button/Button";

function HospitalCard() {
  return (
    <div className={styles.hospital}>
      <div className={styles.hospitalCard}>
        <div className={styles.hospitalImage}>
          <img src="/hospital.png" alt="hospital" />
        </div>
        <div className={styles.hospitalDetails}>
          <h3 className={styles.hospitalName}>Hospital Name</h3>
          <h4>Hospital City</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h5 className={styles.fees}>
            <span className={styles.free}>FREE</span>
            <span className={styles.discount}>₹ 500</span>
            Consultation fee at clinic
          </h5>
          <hr className={styles.likeHr} />
          <div className={styles.like}>
            <img src="Like.png" alt="Like" width={25} height={20} />5
          </div>
        </div>
        {/* <div className={styles.availability}>
          <h4>Available Today</h4>
          <Button>Book Free Center Visit</Button>
        </div> */}
        <div className={styles.booking}>
            <div className={styles.bookingTime}>10:30 A.M.</div>
            <div className={styles.bookingDate}>20 April 2024</div>

        </div>
      </div>
      <DateTabs />
    </div>
  );
}

export default HospitalCard;
