import React from "react";
import styles from "./Heading.module.css";

function Heading({
  heading,
  preHighlight,
  subHeading,
  highlight,
  centered = false,
  highlightReversed = false,
}) {
  return (
    <div className={centered ? styles.textCenter : styles.textJustify}>
      {subHeading && <h4 className={styles.subHeading}>{subHeading}</h4>}
      {heading && (
        <h2 className={styles.heading}>
          {preHighlight && (
            <span className={styles.highlight}>{preHighlight}</span>
          )}{" "}
          {heading}{" "}
          {highlight && !highlightReversed && (
            <span className={styles.highlight}>{highlight}</span>
          )}
        </h2>
      )}
    </div>
  );
}

export default Heading;
