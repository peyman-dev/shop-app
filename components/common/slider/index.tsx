import React, { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Swiper>
        {Children.map(children, (child, i) => {
          return <SwiperSlide key={i}> {child}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

export default Slider;
