import React, { useRef, useState, useEffect } from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useIsMobile from "../../hooks/useIsMobile";

function Carousel({ children, isTeam = false }) {
  const isMobile = useIsMobile();
  const paginationRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalBullets = 3;

  useEffect(() => {
    if (swiperInstance && paginationRef.current) {
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance]);

  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Pagination]}
        spaceBetween={isTeam ? 0 : 30}
        slidesPerView={isMobile ? 1 : isTeam ? 3.5 : 3}
        slidesPerGroup={1}
        initialSlide={Math.floor(children.length / 2)}
        centeredSlides={isTeam}
        loop={true}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => {
          const groupIndex = Math.floor(swiper.realIndex / 3);
          setActiveIndex(groupIndex % totalBullets);
        }}
        pagination={{
          clickable: true,
          renderBullet: () => {
            return "";
          },
        }}
      >
        {children}
      </Swiper>

      <div ref={paginationRef} className="custom-pagination">
        {[...Array(totalBullets)].map((_, index) => (
          <span
            key={index}
            className={`custom-bullet ${
              activeIndex === index ? "swiper-pagination-bullet-active" : ""
            }`}
            onClick={() => {
              swiperInstance?.slideToLoop(index * 3);
            }}
          >
            <span className="inner-dot"></span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
