import React from "react";
import "../Carousel.css";

function OfferCard({ img }) {
  return <div className="card" style={{ background: `url(${img})` }}></div>;
}

export default OfferCard;
