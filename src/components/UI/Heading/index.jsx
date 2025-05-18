import React from "react";
import styles from "./Heading.module.css";

function Heading({ heading, subHeading, highlight }) {
  return (
    <div className={styles.textCenter}>
      {subHeading && <h4 className={styles.subHeading}>{subHeading}</h4>}
      {heading && (
        <h1 className={styles.heading}>
          {heading}{" "}
          {highlight && <span className={styles.highlight}>{highlight}</span>}
        </h1>
      )}
    </div>
  );
}

export default Heading;
