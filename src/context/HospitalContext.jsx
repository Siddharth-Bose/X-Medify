import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const HospitalContext = createContext();

export const HospitalProvider = ({ children }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [bookings, setBookings] = useState(() => {
    const stored = localStorage.getItem("bookings");
    return stored ? JSON.parse(stored) : [];
  });

  // Keep bookings in sync with localStorage
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
    } catch (error) {
      console.error("Error Fetching Hospitals:", error);
    }
  };

  // Reset city when state changes
  useEffect(() => {
    setSelectedCity("");
  }, [selectedState]);

  // Fetch states on mount
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

  // Fetch cities when selectedState changes
  useEffect(() => {
    const fetchCities = async () => {
      if (!selectedState) {
        setCities([]);
        return;
      }
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
    fetchCities();
  }, [selectedState]);

  // Filter bookings by hospital name using searchQuery
  const filteredBookings = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return bookings;

    return bookings.filter((booking) =>
      booking?.["Hospital Name"]?.toLowerCase().includes(query)
    );
  }, [bookings, searchQuery]);

  return (
    <HospitalContext.Provider
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
        searchQuery,
        setSearchQuery,
        filteredBookings,
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospitals = () => useContext(HospitalContext);
