import React, { useState } from "react";
import styles from "./HospitalCard.module.css";
import DateTabs from "./DateTabs";
import Button from "../UI/Button/Button";
import { useLocation } from "react-router-dom";
//         "Hospital Name": "southeast alabama medical center",
//         "City": "DOTHAN",
//         "State": "Alabama",
//         "Hospital Type": "General",
//         "Hospital overall rating": "4.5",
//         bookingDate: "2024-12-15",
//         bookingTime: "10:00 AM",
function HospitalCard({ hospitalData }) {
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
          <h3 className={styles.hospitalName}>
            {hospitalData["Hospital Name"]}
          </h3>
          <h4>{`${hospitalData["City"]}, ${hospitalData["State"]}`}</h4>
          {hospitalData.address && <p>{hospitalData.address}</p>}
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
            {hospitalData["Hospital overall rating"]}
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
            <div className={styles.bookingTime}>{hospitalData.bookingTime}</div>
            <div className={styles.bookingDate}>{hospitalData.bookingDate}</div>
          </div>
        )}
      </div>
      {isDateTableOpen && !isBooking && (
        <DateTabs hospitalData={hospitalData} />
      )}
    </div>
  );
}

export default HospitalCard;
