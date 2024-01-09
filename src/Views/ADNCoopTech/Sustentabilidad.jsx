import React from "react";

import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Media

import ADNquienessomos from "/src/assets/ADN-quienessomos.jpg";

const Sustentabilidad = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div>
          <img className="w-full" src={ADNquienessomos} alt="" />
        </div>
        <h1
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            fontSize: "50px",
          }}
          className="w-3/4 z-50 text-white"
        >
          Sustentabilidad
        </h1>
        <h1
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            fontSize: "20px",
          }}
          className="w-3/4 z-50 text-white "
        >
          Nuestros talentos, evolucionan los negocios.
          <br />
        </h1>
      </div>

      <div className="flex flex-row justify-center p-14">
        <div className="col-md-8 p-8 ">
          <div className="flex px-8 text-[50px]">SUSTENTABILIDAD</div>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <div className="col-md-8 p-8 ">
          <div className="flex px-8">
            <Swiper
              className="w-[70rem]"
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img src="src/assets/Logo-1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="src/assets/Logo-2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="src/assets/Logo-3.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="src/assets/Logo-4.jpg" alt="" />
              </SwiperSlide>
              ...
            </Swiper>
          </div>
        </div>
      </div>

    </>
  );
};

export default Sustentabilidad;
