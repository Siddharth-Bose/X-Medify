/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import HospitalCard from "../components/HospitalCard";
import { useLocation } from "react-router-dom";
import { useHospitals } from "../context/LocationContext";

function SearchResult() {
  const location = useLocation();
  const { state: navState } = location;
  const { hospitals, setSelectedState, setSelectedCity } = useHospitals();

  useEffect(() => {
    if (navState?.selectedState && navState?.selectedCity) {
      setSelectedState(navState.selectedState);
      setSelectedCity(navState.selectedCity);
    }
  }, [navState]);

  if (!hospitals || hospitals.length === 0)
    return (
      <h4 style={{ textAlign: "center", margin: "5%" }}>No Hospitals Found</h4>
    );

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hospitals.map((hospital) => (
        <HospitalCard
          key={hospital["Provider ID"]}
          id={hospital["Provider ID"]}
          name={hospital["Hospital Name"]}
          city={hospital.City}
          state={hospital.State}
          address={hospital.Address}
          ratings={hospital["Hospital overall rating"]}
        />
      ))}
    </div>
  );
}

export default SearchResult;
