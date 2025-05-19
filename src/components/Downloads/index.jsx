import React from "react";
import styles from "./Downloads.module.css";
import Heading from "../UI/Heading";
import Button from "../UI/Button/Button";

function Downloads() {
  return (
    <div className={styles.downloads}>
      <div className={styles.downloadsAbout}>
        <img src="/download.png" alt="download" />
        <img src="/download-arrow.png" alt="download-arrow" className={styles.arrow} height={"25%"} />
      </div>
      <div className={styles.downloadsCta}>
        <Heading heading={"Download the"} />
        <Heading highlight={"Medify"} heading={"App"} highlightReversed />
        <p>Get the link to download the app</p>
        <div className={styles.inputGroup}>
          <div className={styles.prefix}>+91</div>
          <input
            type="text"
            placeholder="Enter phone number"
            className={styles.input}
          />
          <Button>Find Centers</Button>
        </div>
        <div className={styles.downloadBtnContainer}>
          <img
            src="/google_play.png"
            alt="Play Store"
            className={styles.downloadBtn}
          />
          <img
            src="/apple_store.png"
            alt="App Store"
            className={styles.downloadBtn}
          />
        </div>
      </div>
    </div>
  );
}

export default Downloads;
