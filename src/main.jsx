import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { HospitalProvider } from "./context/HospitalContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HospitalProvider>
      <Router>
        <App />
      </Router>
    </HospitalProvider>
  </StrictMode>
);
