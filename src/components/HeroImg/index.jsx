// import React from "react";
// import styles from "./HeroImg.module.css";
// import Heading from "../UI/Heading";

// function HeroImg() {
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.heroLeft}>
//         <div className={`${styles.square} ${styles.squareBehind}`}></div>
//         <div className={`${styles.square} ${styles.squareFront}`}></div>
//         <div className={styles.comment}></div>
//       </div>
//       <div
//         className={styles.heroRight}
//         style={{ textAlign: "left !important" }}
//       >
//         <Heading
//           heading={"Patient"}
//           highlight={"Caring"}
//           subHeading={"HELPING PATIENTS FROM AROUND THE GLOBE!!"}
//           centered={false}
//         />
//       </div>
//     </div>
//   );
// }

// export default HeroImg;

import React from "react";
import "./index.css";
import Heading from "../UI/Heading";
function HeroImg() {
  return (
    <div className="wrapper">
      <div className="left-wrapper">
        <div className="imageStack">
          <div className="topImage">
            <img src="/img-1.png" alt="Doctor and patient" />
            <div className="badge">
              <span className="icon">
                <img src="/phone.png" alt="free-consultation" height={25} />
              </span>
              <div>
                <h5 className="title">Free Consultation</h5>
                <p className="subtitle">Consultation with the best</p>
              </div>
            </div>
          </div>
          <div className="bottomImage">
            <img src="/img-2.png" alt="Doctor helping patient" />
          </div>
        </div>
      </div>
      <div className="right-wrapper">
        <Heading
          heading={"Patient"}
          highlight={"Caring"}
          subHeading={"HELPING PATIENTS FROM AROUND THE GLOBE!!"}
        />
        <p>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
      </div>
    </div>
  );
}

export default HeroImg;
