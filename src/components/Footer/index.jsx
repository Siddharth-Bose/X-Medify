import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  const footerLinks = [
    ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"],
    ["Orthology", "Neurology", "Dental Care", "Opthalmology", "Cardiology"],
    ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"],
  ];
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.brandContainer}>
          <div className={styles.brand}>
            <img src="/medifyLogo.png" alt="logo" width={40} />
            <h2 className={styles.brandText}>Medify</h2>
          </div>
          <div className={styles.iconContainer}>
            <FaFacebookF className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaYoutube className={styles.icon} />
            <FaPinterest className={styles.icon} />
          </div>
        </div>
        {footerLinks.map((array, idx) => {
          return (
            <div key={idx} className={styles.footerLink}>
              {array.map((link, idx1) => {
                return (
                  <div key={`${idx}-${idx1}`} className={styles.link}>
                    <img src="/arrow-link.png" alt="arrow-right" />
                    <Link className={styles.linkText}>{link}</Link>
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className={styles.hr}> </div>
        <div className={styles.copyright}>
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
