import React from "react";
import styles from "./IconBox.module.css";

function IconBox({ icon, name, isActive }) {
  return (
    <div className={`${styles.card} ${isActive ? styles.active : ""}`}>
      <div className={styles.iconContainer}>
        <img src={icon} alt={name} />
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
}

export default IconBox;
