import React from "react";
import styles from "../FAQ.module.css";

function Question({ question }) {
  return (
    <div className={styles.question}>
      <p className={styles.questionText}>{question}</p>
      <p className={styles.questionIcon}>+</p>
    </div>
  );
}

export default Question;
