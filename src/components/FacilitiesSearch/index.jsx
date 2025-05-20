import React from "react";
import styles from "./Facilities.module.css";
import SearchInput from "../UI/SearchInput";
import Button from "../UI/Button/Button";
import IconBox from "../UI/IconBox";
import { useNavigate } from "react-router-dom";
import { useHospitals } from "../../context/LocationContext";

function FacilitiesSearch() {
  const navigate = useNavigate();
  const {
    cities = [],
    states = [],
    selectedCity,
    setSelectedCity,
    selectedState,
    setSelectedState,
    fetchHospitals,
  } = useHospitals();
  const cardDetails = [
    { isActive: false, icon: "/Doctor-S.png", name: "Doctors" },
    { isActive: false, icon: "/Drugstore.png", name: "Labs" },
    { isActive: true, icon: "/Hos.png", name: "Hospitals" },
    { isActive: false, icon: "/Medicine.png", name: "Medical Store" },
    { isActive: false, icon: "/Ambulance.png", name: "Ambulance" },
  ];
  async function searchHandler() {
    fetchHospitals();
    const payload = { selectedCity, selectedState };
    navigate("/search-results", { state: payload });
  }
  return (
    <div className={styles.modalContainer}>
      <div className={styles.search}>
        <SearchInput
          placeholder="State"
          data={states || []}
          setSelected={setSelectedState}
          value={selectedState}
          id="state"
        />
        <SearchInput
          placeholder="City"
          data={cities || []}
          setSelected={setSelectedCity}
          value={selectedCity}
          id="city"
          disabled={!selectedState}
        />
        <Button search handler={searchHandler}>
          Search
        </Button>
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
