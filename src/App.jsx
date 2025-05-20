import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import SearchResult from "./Pages/SearchResult";
import Bookings from "./Pages/Bookings";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Downloads from "./components/Downloads";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <SearchBox />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/my-bookings" element={<Bookings />} />
      </Routes>
      {location.pathname !== "/my-bookings" && <FAQ />}
      <Downloads />
      <Footer />
    </div>
  );
}

export default App;
