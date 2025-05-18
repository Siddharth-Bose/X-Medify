// // import React, { useEffect, useRef } from "react";
// // import "./Carousel.css";
// // import { Swiper } from "swiper/react";
// // import { Pagination } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/pagination";
// // import useIsMobile from "../../hooks/useIsMobile";

// // function Carousel({ children }) {
// //   const isMobile = useIsMobile();
// //   const paginationRef = useRef(null);

// //   useEffect(() => {
// //     // Just make sure paginationRef is not null before rendering Swiper
// //   }, []);

// //   return (
// //     <div className="carousel-wrapper">
// //       <Swiper
// //         modules={[Pagination]}
// //         spaceBetween={30}
// //         slidesPerView={isMobile ? 1 : 3}
// //         loop={true}
// //         slidesPerGroup={3}
// //         pagination={{
// //           el: paginationRef.current,
// //           clickable: true,
// //           renderBullet: (_, className) =>
// //             `<span class="${className}"><span class="inner-dot"></span></span>`,
// //         }}
// //         onSwiper={(swiper) => {
// //           swiper.params.pagination.el = paginationRef.current;
// //           swiper.pagination.init();
// //           swiper.pagination.update();
// //         }}
// //       >
// //         {children}
// //       </Swiper>
// //       <div ref={paginationRef} className="custom-pagination"></div>
// //     </div>
// //   );
// // }

// // export default Carousel;

// import React, { useRef, useState } from "react";
// import "./Carousel.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import useIsMobile from "../../hooks/useIsMobile";

// function Carousel({ children, isTeam = false }) {
//   const isMobile = useIsMobile();
//   const paginationRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const totalBullets = isTeam ? 3 : 3;
//   return (
//     <div className="carousel-wrapper">
//       <Swiper
//         modules={[Pagination]}
//         spaceBetween={20}
//         slidesPerView={isMobile ? 1 : 3.2}
//         slidesPerGroup={1}
//         centeredSlides={true}
//         loop={true}
//         loopAdditionalSlides={10}
//         onSlideChange={(swiper) => {
//           const groupIndex = Math.floor(swiper.realIndex / 1);
//           setActiveIndex(groupIndex % totalBullets);
//         }}
//         onSwiper={(swiper) => {
//           swiper.params.pagination.el = paginationRef.current;
//           swiper.pagination.init();
//           swiper.pagination.render();
//           swiper.pagination.update();
//         }}
//         pagination={{
//           clickable: true,
//           renderBullet: () => "",
//         }}
//       >
//         {children}
//       </Swiper>

//       <div ref={paginationRef} className="custom-pagination">
//         {[...Array(totalBullets)].map((_, index) => (
//           <span
//             key={index}
//             className={`custom-bullet ${
//               activeIndex === index ? "swiper-pagination-bullet-active" : ""
//             }`}
//             onClick={() => {
//               const swiper = document.querySelector(".swiper")?.swiper;
//               if (swiper) swiper.slideToLoop(index * 3);
//             }}
//           >
//             <span className="inner-dot"></span>
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;

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
