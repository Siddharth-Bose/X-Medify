import React from "react";
import styles from "./Button.module.css";

function Button({ children, handler, parentClasses }) {
  return (
    <button
      onClick={handler}
      className={`${styles.btn} ${styles[parentClasses]}`}
    >
      {children}
    </button>
  );
}

export default Button;
