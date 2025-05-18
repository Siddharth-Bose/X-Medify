/* eslint-disable no-unused-vars */
import React from "react";
const stateEndpoint = "https://meddata-backend.onrender.com/states";
const cityEndpoint = "https://meddata-backend.onrender.com/cities/:state";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className={styles.SearchBar}>
      <FaSearch />
    </div>
  );
}

export default SearchBar;
