import React, { useState } from "react";
import styles from "./HospitalCard.module.css";
import DateTabs from "./DateTabs";
import Button from "../UI/Button/Button";
import { useLocation } from "react-router-dom";

function HospitalCard({ name, city, state, address, ratings, id }) {
  const location = useLocation();
  const [isDateTableOpen, setIsDateTableOpen] = useState(false);
  const isBooking = location.pathname == "/my-bookings";
  return (
    <div className={styles.hospital}>
      <div className={styles.hospitalCard}>
        <div className={styles.hospitalImage}>
          <img src="/hospital.png" alt="hospital" />
        </div>
        <div className={styles.hospitalDetails}>
          <h3 className={styles.hospitalName}>{name}</h3>
          <h4>{`${city}, ${state}`}</h4>
          <p>{address}</p>
          {!isBooking && (
            <h5 className={styles.fees}>
              <span className={styles.free}>FREE</span>
              <span className={styles.discount}>₹ 500</span>
              Consultation fee at clinic
            </h5>
          )}
          <hr className={styles.likeHr} />
          <div className={styles.like}>
            <img src="Like.png" alt="Like" width={25} height={20} />
            {ratings}
          </div>
        </div>

        {!isBooking ? (
          <div className={styles.availability}>
            <h4>Available Today</h4>
            <Button handler={() => setIsDateTableOpen((prev) => !prev)}>
              Book FREE Center Visit
            </Button>
          </div>
        ) : (
          <div className={styles.booking}>
            <div className={styles.bookingTime}>10:30 A.M.</div>
            <div className={styles.bookingDate}>20 April 2024</div>
          </div>
        )}
      </div>
      {isDateTableOpen && !isBooking && (
        <DateTabs hospital={{ name, city, state, address, ratings, id }} />
      )}
    </div>
  );
}

export default HospitalCard;
