/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "../HospitalCard.module.css";

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

const DateTabs = () => {
  const allDates = getNext7Dates();
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlot, setCurrentSlot] = useState(getTimeOfDay());

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

  const isToday = activeIndex === 0;

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
        // For today: only include slots later than current time
        return !isToday || slotMinutes > currentMinutes;
      });
      availableCount += availableSlots.length;
    });

    return availableCount;
  };

  const isSlotDisabled = (period, time) => {
    const today = new Date();
    const activeDate = allDates[activeIndex];
    const isToday = today.toDateString() === activeDate.toDateString();

    if (!isToday) return false;

    const currentMinutes = today.getHours() * 60 + today.getMinutes();
    const slotMinutes = convertTo24Hour(time);

    return slotMinutes <= currentMinutes;
  };

  return (
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
                <div className="date">{formatDate(date)}</div>{" "}
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
            <h4 className={styles.periodHeading}>
              {period.charAt(0) + period.slice(1)}
            </h4>
            <div className={styles.slotGroup}>
              {SLOT_TIMES[period].map((time) => (
                <div
                  key={time}
                  className={`${styles.slot} ${
                    isSlotDisabled(period, time) ? styles.disabled : ""
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateTabs;
