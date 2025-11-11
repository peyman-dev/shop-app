"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider, { useSlider } from "@/components/common/slider";
import SectionLabel from "./fragments/section-label";
import IncredibleCard from "./fragments/incredible-card";
import SeeAll from "./fragments/see-all";
import { ChevronLeft } from "lucide-react";
import { SwiperRef } from "swiper/react";

const IncredibleSection = () => {
  const ref = useRef<SwiperRef>(null);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const swiper = ref.current?.swiper;
    if (swiper) {
      const updateEnd = () => setIsAtEnd(swiper.isEnd);
      swiper.on("slideChange", updateEnd);
      updateEnd(); // Initial check
      return () => {
        swiper.off("slideChange", updateEnd);
      };
    }
  }, []);

  return (
    <section className="container group relative flex-center rounded-2xl bg-blue-600 h-[294px] my-20">
      <Slider
        className="h-[85%] ml-5! my-auto!"
        ref={ref}
        autoplay={{
          delay: 2500,
        }}
        slidesPerView={8}
        spaceBetween={4}
      >
        <SectionLabel />
        {Array.from({ length: 10 }).map((product, i) => (
          <IncredibleCard key={i} />
        ))}
        <SeeAll />
      </Slider>
      {!isAtEnd && (
        <button
          onClick={() => {
            ref.current?.swiper.slideNext();
          }}
          className="absolute left-4 ps-1 z-90! bg-white shadow-l flex-center size-10 rounded-full border"
        >
          <ChevronLeft />
        </button>
      )}
    </section>
  );
};

export default IncredibleSection;