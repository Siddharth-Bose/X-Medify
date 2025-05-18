import React from "react";
import TopBar from "./TopBar";
import styles from "./Navbar.module.css";
import MainNav from "./MainNav";

function Navbar() {
  return (
    <div className={styles.nav}>
      <TopBar />
      <MainNav />
    </div>
  );
}

export default Navbar;
