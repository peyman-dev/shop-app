"use client";
import Slider, { useSlider } from "@/components/common/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSlider = () => {
  const direction = (fileName: string) => `/assets/static/${fileName}`;
  const images = [
    direction("banner-1.gif"),
    direction("banner-2.png"),
    direction("banner-3.png"),
    direction("banner-4.gif"),
  ];
  const { ref, slideNext, slidePrev, ButtonsWrapper } = useSlider();
  return (
    <div className="relative group">
      <Slider
        ref={ref}
        className="relative "
        loop
        autoplay
        slidesPerView={1}
      >
        {images.map((src, i) => (
          <Image
            src={src}
            key={i}
            alt="banner"
            width={1920}
            height={400}
            layout="responsive"
            objectFit="cover"
            priority={true}
            placeholder="blur"
            blurDataURL="https://via.placeholder.com/1920x1080"
          />
        ))}
      </Slider>
      <ButtonsWrapper className="left-6! duration-300 transition-all invisible opacity-0 group-hover:opacity-100! group-hover:visible!">
        <button
          onClick={slidePrev}
          className="bg-white  rounded-full flex-center size-10"
        >
          <ChevronRight />
        </button>
        <button
          onClick={slideNext}
          className="bg-white  rounded-full flex-center size-10"
        >
          <ChevronLeft />
        </button>
      </ButtonsWrapper>
    </div>
  );
};

export default HeroSlider;
