import React from "react";
import styles from "./Button.module.css";

function Button({ children, handler, parentClasses, search = false }) {
  return (
    <div className={`${styles.btn} ${styles[parentClasses]}`}>
      {search && <img src="/Search.png" alt="search-logo" height={"20px"} />}
      <button
        className={`${styles.btn}`}
        onClick={handler}
        id={search ? "searchBtn" : undefined}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
