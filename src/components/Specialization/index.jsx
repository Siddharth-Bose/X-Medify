import React from "react";
import IconBox from "../UI/IconBox";
import styles from "./Specialization.module.css";
import Button from "../UI/Button/Button";
import Heading from "../UI/Heading";

function Specialization() {
  const cardDetails = [
    { isActive: false, icon: "/Drugstore.png", name: "Dentistry" },
    { isActive: false, icon: "/Stethoscope.png", name: "Primary Care" },
    { isActive: false, icon: "/Heart Rate.png", name: "Cardiology" },
    { isActive: false, icon: "/Heart Rate Monitor.png", name: "MRI Resonance" },
    { isActive: false, icon: "/Blood Sample.png", name: "Blood Test" },
    { isActive: false, icon: "/Immune.png", name: "Piscologist" },
    { isActive: false, icon: "/Drugstore.png", name: "Laboratory" },
    { isActive: false, icon: "/X-Ray.png", name: "X-Ray" },
  ];
  return (
    <div className={styles.specializationWrapper}>
      <Heading heading={"Find By Specialization"} centered/>
      <div className={styles.cardWrapper}>
        {cardDetails.map((card) => {
          return (
            <IconBox
              key={card.name}
              icon={card.icon}
              name={card.name}
              isActive={card.isActive}
            />
          );
        })}
      </div>
      <Button parentClasses="viewAll">View All</Button>
    </div>
  );
}

export default Specialization;
