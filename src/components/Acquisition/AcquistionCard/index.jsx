import React from "react";
import styles from "./AcquistionCard.module.css";

function AcquistionCard({ img, number, text, color, pt }) {
  return (
    <div className={styles.card} style={{ marginTop: pt ? "10%" : "5%" }}>
      <div
        style={{
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={styles.image}
      >
        <img src={img} alt="acquistion" />
      </div>
      <h3>{number}+</h3>
      <p>{text}</p>
    </div>
  );
}

export default AcquistionCard;
