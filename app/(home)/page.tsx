import HeroSlider from "@/components/templates/home/hero-slider";
import IncredibleSection from "@/components/templates/home/incredible-section";
import Stories from "@/components/templates/home/stories";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Stories />
      <HeroSlider />
      <IncredibleSection />
    </>
  );
};

export default HomePage;
