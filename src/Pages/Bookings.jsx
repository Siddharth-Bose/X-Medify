import React from "react";
import HospitalCard from "../components/HospitalCard";
import { useHospitals } from "../context/HospitalContext";

function Bookings() {
  const { filteredBookings } = useHospitals();
  if (!filteredBookings.length)
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
        No Bookings Found
      </h4>
    );
  return (
    <div>
      {filteredBookings.map((booking, idx) => {
        return <HospitalCard hospitalData={booking} key={idx} />;
      })}
    </div>
  );
}

export default Bookings;
