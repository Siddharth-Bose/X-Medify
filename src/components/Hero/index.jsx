import React from "react";
import styles from "./Hero.module.css";
import Button from "../UI/Button/Button";
function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroLeft}>
        <h2 className={styles.subheading}>Skip the travel! Find Online</h2>
        <h1 className={styles.heading}>
          Medical <span className={styles.highlight}>Centers</span>
        </h1>
        <p>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
        <Button>Find Centers</Button>
      </div>
      <img src="/hero_image.png" alt="Hero" />
    </div>
  );
}

export default Hero;
