import React from "react";
import styles from "./SearchInput.module.css";

const SearchInput = ({
  placeholder = "Search...",
  data,
  setSelected,
  value,
  id,
  disabled = false,
}) => {
  return (
    <div className={styles.searchContainer}>
      <img src="/SearchIcon.png" alt="search" className={styles.icon} />
      <select
        name={id}
        id={id}
        className={styles.input}
        defaultValue={value}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
        disabled={disabled}
      >
        <option value={""}>{placeholder}</option>
        {data.map((item, idx) => {
          return (
            <option key={idx} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SearchInput;
