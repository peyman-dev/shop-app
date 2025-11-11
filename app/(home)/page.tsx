import Articles from "@/components/templates/home/articles";
import Categories from "@/components/templates/home/categories";
import FavoriteBrands from "@/components/templates/home/favorite-brands";
import HeroSlider from "@/components/templates/home/hero-slider";
import HotProducts from "@/components/templates/home/hot-products";
import IncredibleSection from "@/components/templates/home/incredible-section";
import LatestProducts from "@/components/templates/home/latest-products";
import MostSelling from "@/components/templates/home/most-selling";
import Stories from "@/components/templates/home/stories";
import React from "react";

const HomePage = () => {
  return (
    <main id="home-pag-content" className="*:my-10 *:first:my-0!">
      <Stories />
      <HeroSlider />
      <LatestProducts />
      <IncredibleSection />
      <Categories />
      <FavoriteBrands />
      <MostSelling />
      <HotProducts />
      <Articles />
    </main>
  );
};

export default HomePage;
