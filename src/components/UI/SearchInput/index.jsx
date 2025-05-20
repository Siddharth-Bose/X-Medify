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
    <div className={styles.searchContainer} id={id}>
      <img src="/SearchIcon.png" alt="search" className={styles.icon} />
      <select
        name={id}
        className={styles.input}
        defaultValue={value}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
        disabled={disabled}
      >
        <li>
          <option value={""}>{placeholder}</option>
        </li>
        {data.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </select>
    </div>
  );
};

export default SearchInput;
