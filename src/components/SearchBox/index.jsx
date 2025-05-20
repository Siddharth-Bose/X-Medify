import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./SearchBox.module.css";
import Button from "../UI/Button/Button";
import useIsMobile from "../../hooks/useIsMobile";

function SearchBox() {
  const location = useLocation();
  const isMobile = useIsMobile();
  return (
    <div
      className={styles.searchContainer}
      style={{
        padding: isMobile && "1%",
      }}
    >
      {location.pathname == "/my-bookings"
        ? !isMobile && <h3 className={styles.bookingText}>My Bookings</h3>
        : null}
      <div
        className={styles.searchBox}
        style={{
          right: location.pathname == "/my-bookings" && "10%",
          width:
            location.pathname != "/my-bookings"
              ? isMobile
                ? "100%"
                : "70%"
              : null,

          position: isMobile && "static",
        }}
      >
        {location.pathname != "/my-bookings" ? (
          <>
            <div className={`${styles.first} ${styles.inputWrapper}`}>
              <span className={styles.icon}>
                <img src="/pin.png" alt="location" />
              </span>
              <input
                type="text"
                placeholder="Search City"
                className={`${styles.first} ${styles.input}`}
              />
            </div>
            <div className={`${styles.second} ${styles.inputWrapper}`}>
              <span className={styles.icon}>
                <img src="/pin.png" alt="location" />
              </span>
              <input
                type="text"
                placeholder="Search City"
                className={`${styles.second} ${styles.input}`}
              />
            </div>
          </>
        ) : (
          <>
            <div className={`${styles.firstBooking} ${styles.inputWrapper}`}>
              <span className={styles.icon}>
                <img src="/pin.png" alt="location" />
              </span>
              <input
                type="text"
                placeholder="Search City"
                className={`${styles.input}`}
              />
            </div>
          </>
        )}
        <Button search>Search</Button>
      </div>
    </div>
  );
}

export default SearchBox;
