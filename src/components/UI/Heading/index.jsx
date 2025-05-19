import React from "react";
import styles from "./Heading.module.css";

function Heading({
  heading,
  subHeading,
  highlight,
  centered = false,
  highlightReversed = false,
}) {
  return (
    <div className={centered ? styles.textCenter : styles.textJustify}>
      {subHeading && <h4 className={styles.subHeading}>{subHeading}</h4>}
      {heading && (
        <h1 className={styles.heading}>
          {highlight && <span className={styles.highlight}>{highlight}</span>}{" "}
          {heading}{" "}
          {highlight && !highlightReversed && (
            <span className={styles.highlight}>{highlight}</span>
          )}
        </h1>
      )}
    </div>
  );
}

export default Heading;
