"use client";

import React, { Children, forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps, SwiperRef } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import clsx from "clsx";

type SliderProps = {
  children: React.ReactNode;
} & Omit<SwiperProps, "children">;

export const useSlider = () => {
  const swiperRef = React.useRef<SwiperRef | null>(null);

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const ButtonsWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
      <div className={clsx("absolute bottom-4 z-10000!  flex gap-3", className)}>
        {children}
      </div>
    );
  };

  return { ref: swiperRef, slideNext, slidePrev, ButtonsWrapper };
};

const Slider = forwardRef<SwiperRef, SliderProps>(
  ({ children, ...props }, ref) => {
    return (
      <div className="relative max-h-max">
        <Swiper loop ref={ref} {...props} modules={[Navigation, Pagination, Scrollbar, A11y]}>
          {Children.map(children, (child, i) => (
            <SwiperSlide key={i}>{child}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
);

Slider.displayName = "Slider";

export default Slider;