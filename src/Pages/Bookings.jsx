import React from "react";
import HospitalCard from "../components/HospitalCard";
import { useHospitals } from "../context/LocationContext";

function Bookings() {
  const { bookings } = useHospitals();
  return (
    <div>
      {bookings.map((booking) => {
        return <HospitalCard hospitalData={booking} />;
      })}
    </div>
  );
}

export default Bookings;
