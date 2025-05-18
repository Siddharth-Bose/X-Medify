import React from "react";
import "../Carousel.css";
function TeamCard({ img }) {
  return (
    <div className="team-card">
      <img src={img} alt="img" />
    </div>
  );
}

export default TeamCard;
