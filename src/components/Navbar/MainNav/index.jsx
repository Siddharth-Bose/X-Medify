/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import Button from "../../UI/Button/Button";

function MainNav() {
  const location = useLocation();
  const links = [
    "Find Doctors",
    "Hospitals",
    "Medicines",
    "Surgeries",
    "Software for Provider",
    "Facilities",
  ];
  return (
    <div
      className={
        location.pathname == "/"
          ? styles.mainNav
          : `${styles.mainNav} ${styles.bgWhite}`
      }
    >
      <div className={styles.brand}>
        <div className={styles.brandMain}>
          <img src="/medifyLogo.png" alt="Medify" className={styles.brandImg} />
          <p className={styles.brandText}>Medify</p>
        </div>
        <Button parentClasses="mobCta">My Bookings</Button>
      </div>
      <div className={styles.navLinks}>
        {links.map((link, idx) => {
          return (
            <Link
              key={idx}
              to={"/"}
              className={
                idx == 0 ? `${styles.link} ${styles.linkActive}` : styles.link
              }
            >
              {link}
            </Link>
          );
        })}
        <Button parentClasses="ctaBtn">My Bookings</Button>
      </div>
    </div>
  );
}

export default MainNav;
