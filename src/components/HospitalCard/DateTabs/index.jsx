/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "../HospitalCard.module.css";
import CustomModal from "../../Modal";
import { useHospitals } from "../../../context/HospitalContext";

const getNext7Dates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    dates.push(nextDate);
  }
  return dates;
};

const SLOT_TIMES = {
  morning: ["11:30 AM"],
  afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
  evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
};

const getTimeOfDay = () => {
  const hour = new Date().getHours();
  if (hour >= 17) return "evening";
  if (hour >= 12) return "afternoon";
  return "morning";
};

const DateTabs = ({ hospitalData }) => {
  const allDates = getNext7Dates();
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlot, setCurrentSlot] = useState(getTimeOfDay());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    setSelectedDay,
    setSelectedSlot,
    selectedDay,
    selectedSlot,
    bookings,
    addBooking,
  } = useHospitals();

  useEffect(() => {
    setCurrentSlot(getTimeOfDay());
  }, []);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + 3 < allDates.length) setStartIndex(startIndex + 1);
  };

  const formatDate = (date) => {
    const today = new Date();
    if (date.toDateString() === today.toDateString()) return "Today";
    if (
      date.toDateString() ===
      new Date(today.setDate(today.getDate() + 1)).toDateString()
    )
      return "Tomorrow";
    return date.toDateString().slice(0, 10);
  };

  const convertTo24Hour = (timeStr) => {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  const getAvailableSlots = (date) => {
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    const currentMinutes = today.getHours() * 60 + today.getMinutes();
    let availableCount = 0;

    Object.entries(SLOT_TIMES).forEach(([period, slots]) => {
      const availableSlots = slots.filter((time) => {
        const slotMinutes = convertTo24Hour(time);
        return !isToday || slotMinutes > currentMinutes;
      });
      availableCount += availableSlots.length;
    });

    return availableCount;
  };

  const isSlotDisabled = (date, time) => {
    const today = new Date();
    const isToday = today.toDateString() === date.toDateString();
    const currentMinutes = today.getHours() * 60 + today.getMinutes();
    const slotMinutes = convertTo24Hour(time);

    if (isToday && slotMinutes <= currentMinutes) return true;

    return bookings.some((booking) => {
      const bookedDate = new Date(booking.bookingDate).toDateString();
      const selectedDate = date.toDateString();
      const hospitalMatch =
        booking["Hospital Name"]?.toLowerCase() ===
        hospitalData["Hospital Name"]?.toLowerCase();
      return (
        bookedDate === selectedDate &&
        booking.bookingTime === time &&
        hospitalMatch
      );
    });
  };

  return (
    <>
      <div className={styles.container}>
        <hr />
        <hr className={styles.activeHr} />

        <div className={styles.tabNav}>
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={styles.navBtn}
          >
            <img src="/prev.png" alt="previous" />
          </button>

          <div className={styles.tabs}>
            {allDates.slice(startIndex, startIndex + 3).map((date, idx) => {
              const globalIndex = startIndex + idx;
              return (
                <button
                  key={globalIndex}
                  className={`${styles.tab} ${
                    activeIndex === globalIndex ? styles.active : ""
                  }`}
                  onClick={() => setActiveIndex(globalIndex)}
                >
                  <p className="date">{formatDate(date)}</p>{" "}
                  <div className={styles.availableSlot}>
                    {getAvailableSlots(date)} slots available
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex + 3 >= allDates.length}
            className={styles.navBtn}
          >
            <img src="/next.png" alt="next" />
          </button>
        </div>

        <div className={styles.slotsContainer}>
          {["morning", "afternoon", "evening"].map((period) => (
            <div key={period} className={styles.slotGroupWrapper}>
              <p className={styles.periodHeading}>
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </p>
              <div className={styles.slotGroup}>
                {SLOT_TIMES[period].map((time) => (
                  <div
                    key={time}
                    className={`${styles.slot} ${
                      isSlotDisabled(allDates[activeIndex], time)
                        ? styles.disabled
                        : ""
                    }`}
                    onClick={() => {
                      if (!isSlotDisabled(allDates[activeIndex], time)) {
                        setSelectedDay(allDates[activeIndex]);
                        setSelectedSlot(time);
                        setIsModalOpen(true);
                      }
                    }}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        title="Confirm Booking"
      >
        <p>Are you sure you want to create a booking?</p>
        <p>
          <strong>
            {selectedDay
              ? new Date(selectedDay).toLocaleDateString()
              : "No date"}{" "}
            at {selectedSlot}
          </strong>
        </p>
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
        >
          <button
            onClick={() => {
              addBooking({
                "Hospital Name": hospitalData["Hospital Name"],
                City: hospitalData.City,
                State: hospitalData.State,
                "Hospital Type": hospitalData["Hospital Type"],
                address: hospitalData.address,
                "Hospital overall rating":
                  hospitalData["Hospital overall rating"],
                bookingDate: selectedDay.toDateString(),
                bookingTime: selectedSlot,
              });

              setIsModalOpen(false);
            }}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#16a34a",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
          >
            Confirm
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#dc2626",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </CustomModal>
    </>
  );
};

export default DateTabs;
