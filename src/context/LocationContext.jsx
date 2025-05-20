import React, { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [bookings, setBookings] = useState(() => {
    const stored = localStorage.getItem("bookings");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (booking) => {
    setBookings((prev) => [...prev, booking]);
  };

  const fetchHospitals = async () => {
    if (!selectedState || !selectedCity) return;
    try {
      const response = await fetch(
        `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
      );
      const data = await response.json();
      setHospitals(data);
      console.log("Fetched Hospitals:", data);
    } catch (error) {
      console.error("Error Fetching Hospitals:", error);
    }
  };
  useEffect(() => {
    fetchHospitals();
  }, []);

  useEffect(() => {
    setSelectedCity("");
  }, [selectedState]);
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(
          "https://meddata-backend.onrender.com/states"
        );
        const data = await response.json();
        setStates(data);
      } catch (error) {
        console.error("Error fetching states: ", error);
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          `https://meddata-backend.onrender.com/cities/${selectedState}`
        );
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities: ", error);
      }
    };
    if (selectedState) fetchCities();
    else setCities([]);
  }, [selectedState]);

  return (
    <LocationContext.Provider
      value={{
        states,
        cities,
        selectedState,
        setSelectedState,
        selectedCity,
        setSelectedCity,
        hospitals,
        setHospitals,
        fetchHospitals,
        selectedDay,
        setSelectedDay,
        selectedSlot,
        setSelectedSlot,
        bookings,
        addBooking,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useHospitals = () => useContext(LocationContext);
