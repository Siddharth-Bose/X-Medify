import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./SearchBox.module.css";
import Button from "../UI/Button/Button";
import useIsMobile from "../../hooks/useIsMobile";
import { useHospitals } from "../../context/HospitalContext";
import SearchInput from "../UI/SearchInput";

function SearchBox() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const {
    states,
    cities,
    selectedState,
    selectedCity,
    setSelectedState,
    setSelectedCity,
    fetchHospitals,
    searchQuery,
    setSearchQuery,
  } = useHospitals();
  return (
    <div
      className={styles.searchContainer}
      style={{
        padding: isMobile && "1%",
      }}
    >
      {location.pathname == "/my-bookings"
        ? !isMobile && <h1 className={styles.bookingText}>My Bookings</h1>
        : null}
      <div
        className={styles.searchBox}
        style={{
          right: location.pathname == "/my-bookings" && "10%",
          width:
            location.pathname != "/my-bookings"
              ? isMobile
                ? "100%"
                : "70%"
              : null,

          position: isMobile && "static",
        }}
      >
        {location.pathname != "/my-bookings" ? (
          <>
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
            <Button
              search
              handler={() => {
                fetchHospitals();
              }}
            >
              Search
            </Button>
          </>
        ) : (
          <>
            <div className={`${styles.firstBooking} ${styles.inputWrapper}`}>
              <span className={styles.icon}>
                <img src="/pin.png" alt="location" />
              </span>
              <input
                type="text"
                placeholder="Search Bookings..."
                className={`${styles.input}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button search disabled>
              Search
            </Button>{" "}
            {/* or remove this if filtering is live */}
          </>
        )}
      </div>
    </div>
  );
}

export default SearchBox;
