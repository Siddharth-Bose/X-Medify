import React from "react";
import styles from "./Facilities.module.css";
import SearchInput from "../UI/SearchInput";
import Button from "../UI/Button/Button";
import IconBox from "../UI/IconBox";

function FacilitiesSearch() {
  const cardDetails = [
    { isActive: false, icon: "/Doctor-S.png", name: "Doctors" },
    { isActive: false, icon: "/Drugstore.png", name: "Labs" },
    { isActive: false, icon: "/Hos.png", name: "Hospitals" },
    { isActive: false, icon: "/Medicine.png", name: "Medical Store" },
    { isActive: false, icon: "/Ambulance.png", name: "Ambulance" },
  ];
  return (
    <div className={styles.modalContainer}>
      <div className={styles.search}>
        <SearchInput placeholder="State" />
        <SearchInput placeholder="City" />
        <Button search>Search</Button>
      </div>
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
    </div>
  );
}

export default FacilitiesSearch;
