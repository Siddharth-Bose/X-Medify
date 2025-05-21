/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import HospitalCard from "../components/HospitalCard";
import { useLocation } from "react-router-dom";
import { useHospitals } from "../context/HospitalContext";
import { TbRosetteDiscountCheck } from "react-icons/tb";

function SearchResult() {
  const location = useLocation();
  const { state: navState } = location;
  const { hospitals, setSelectedState, setSelectedCity, selectedCity } =
    useHospitals();

  useEffect(() => {
    if (navState?.selectedState && navState?.selectedCity) {
      setSelectedState(navState.selectedState);
      setSelectedCity(navState.selectedCity);
    }
  }, [navState]);

  if (!hospitals.length)
    return (
      <h4
        style={{
          textAlign: "center",
          marginTop: "5%",
          backgroundColor: "#fff",
          padding: "3%",
          borderRadius: "8px",
          boxShadow: "0px 15px 45px -5px #00000012",
        }}
      >
        No Hospitals Found
      </h4>
    );

  return (
    <div>
      <div style={{ paddingLeft: "10%", marginTop: "5%" }}>
        <h1>
          {`${
            hospitals.length
          } medical centers available in ${selectedCity.toLowerCase()}`}
        </h1>
        <p style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
          <TbRosetteDiscountCheck style={{ height: "40px" }} />
          Book appointments with minimum wait-time & verified doctor details
        </p>
      </div>
      {hospitals.map((hospital) => (
        <HospitalCard
          key={hospital["Provider ID"]}
          hospitalData={{
            "Hospital Name": hospital["Hospital Name"],
            City: hospital.City,
            State: hospital.State,
            "Hospital Type": hospital["Hospital Type"],
            address: hospital.address,
            "Hospital overall rating": hospital["Hospital overall rating"],
          }}
        />
      ))}
    </div>
  );
}

export default SearchResult;
