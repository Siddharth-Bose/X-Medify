import React from "react";
import Hero from "../components/Hero";
import FacilitiesSearch from "../components/FacilitiesSearch";
import Carousel from "../components/Carousel";
import Specialization from "../components/Specialization";
import { SwiperSlide } from "swiper/react";
import OfferCard from "../components/Carousel/Cards/OfferCard";
import Team from "../components/Team";
import HeroImg from "../components/HeroImg";
import Blogs from "../components/Blogs";
import Acquisition from "../components/Acquisition";

function Home() {
  return (
    <div>
      <Hero />
      <FacilitiesSearch />
      <div style={{ width: "80%", margin: "5% auto" }}>
        <Carousel>
          {Array.from({ length: 9 }).map((_, index) => (
            <SwiperSlide key={index}>
              <OfferCard img={index % 2 === 0 ? "/car-2.png" : "/car-1.png"} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
      <Specialization />
      <Team />
      <HeroImg />
      <Blogs />
      <Acquisition />
    </div>
  );
}

export default Home;
