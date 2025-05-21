import React, { useState, useRef, useEffect } from "react";
import styles from "./SearchInput.module.css";

const SearchInput = ({
  placeholder = "Search...",
  data = [],
  setSelected,
  value,
  id,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    setSelectedValue(item);
    setIsOpen(false);
    setSelected(item);
  };

  return (
    <div className={styles.searchContainer} id={id} ref={dropdownRef}>
      <img src="/SearchIcon.png" alt="search" className={styles.icon} />
      <div
        className={`${styles.input} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsOpen((prev) => !prev);
        }}
      >
        {selectedValue || placeholder}
      </div>

      {isOpen && (
        <ul className={styles.dropdown}>
          <li className={styles.dropdownItem} onClick={() => handleSelect("")}>
            {placeholder}
          </li>
          {data.map((item, idx) => (
            <li
              key={idx}
              className={styles.dropdownItem}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
