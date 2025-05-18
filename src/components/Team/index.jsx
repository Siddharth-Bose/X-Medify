import React from "react";
import Heading from "../UI/Heading";
import styles from "./Team.module.css";
import { SwiperSlide } from "swiper/react";
import OfferCard from "../Carousel/Cards/OfferCard";
import Carousel from "../Carousel";
import TeamCard from "../Carousel/Cards/TeamCard";

function Team() {
  const originalSlides = [
      "/doc-4.png",
      "/doc-5.png",
      "/doc-1.png",
      "/doc-2.png",
      "/doc-3.png",
  ];
  const virtualSlides = [...originalSlides, ...originalSlides].slice(0, 9);
  return (
    <div className={styles.wrapper}>
      <Heading heading="Our Medical Specialist" />
      <div
        style={{
          width: "100%",
          overflow: "visible",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousel isTeam={true}>
          {virtualSlides.map((img, index) => (
            <SwiperSlide key={index}>
              <TeamCard img={img} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Team;
