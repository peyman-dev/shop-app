"use client";

import Slider, { useSlider } from "@/components/common/slider";
import type { Swiper as SwiperType } from "swiper";
import LandingHeroControls from "./landing-hero-controls";
import LandingHeroSlide from "./landing-hero-slide";
import { landingHeroSlides } from "../utils/landing-hero-data";
import React from "react";

const LandingHero = () => {
  const { ref, slideNext, slidePrev } = useSlider();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="bg-white" dir="rtl">
      <div className="w-full ">
        <div className="relative overflow-hidden">
          <Slider
            ref={ref}
            loop
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            speed={700}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            className="h-[420px] sm:h-[500px] lg:h-[760px]"
          >
            {landingHeroSlides.map((slide) => (
              <LandingHeroSlide key={slide.id} slide={slide} />
            ))}
          </Slider>
          <LandingHeroControls
            activeIndex={activeIndex}
            total={landingHeroSlides.length}
            onNext={slideNext}
            onPrev={slidePrev}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
