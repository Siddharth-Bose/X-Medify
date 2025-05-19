import React from "react";
import styles from "./Acquisition.module.css";
import Heading from "../UI/Heading";
import AcquistionCard from "./AcquistionCard";

function Acquisition() {
  const acquistions = [
    {
      color: "#EBF7FF",
      number: 5000,
      text: "Happy Patients",
      img: "/patients.png",
      pt: false,
    },
    {
      color: "#FFF2F0",
      number: 5000,
      text: "Hospitals",
      img: "/hospitals.png",
      pt: true,
    },
    {
      color: "#FFF7E6",
      number: 5000,
      text: "Laboratories",
      img: "/Laboratories.png",
      pt: false,
    },
    {
      color: "#EBFAF1",
      number: 5000,
      text: "Expert Doctors",
      img: "/Doctor.png",
      pt: true,
    },
  ];
  return (
    <div className={styles.acquisitionWrapper}>
      <div className={styles.leftWrapper}>
        <Heading
          subHeading={"CARING FOR THE HEALTH OF YOU AND YOUR FAMILY."}
          heading={"Our Families"}
        />
        <p>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </div>
      <div className={styles.rightWrapper}>
        {acquistions.map((item, idx) => {
          return (
            <AcquistionCard
              key={idx}
              number={item.number}
              text={item.text}
              img={item.img}
              color={item.color}
              pt={item.pt}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Acquisition;
