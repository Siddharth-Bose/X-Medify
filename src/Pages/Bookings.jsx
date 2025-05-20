import React from "react";
import HospitalCard from "../components/HospitalCard";
import { useHospitals } from "../context/LocationContext";

function Bookings() {
  const { bookings } = useHospitals();
  return (
    <div>
      {bookings.map((booking) => {
        return (
          <HospitalCard
            key={booking.hospital.id}
            id={booking.hospital.id}
            name={booking.hospital.name}
            city={booking.hospital.city}
            state={booking.hospital.state}
            address={booking.hospital.address}
            ratings={booking.hospital["Hospital overall rating"]}
          />
        );
      })}
    </div>
  );
}

export default Bookings;
