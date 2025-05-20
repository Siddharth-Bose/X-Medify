import React from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.mainContent}>{children}</div>
      <div className={styles.sideBar}>
        <img src="/freeCheckup.jpeg" alt="Free Checkup" />
      </div>
    </div>
  );
}

export default Layout;
