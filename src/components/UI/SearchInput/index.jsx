import React from "react";
import styles from "./SearchInput.module.css";

const SearchInput = ({ placeholder = "Search...", onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <img src="/SearchIcon.png" alt="search" className={styles.icon} />
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default SearchInput;
