import Slider from "@/components/common/slider";
import React from "react";
import IncredibleCard from "./incredible-card";

const ProductsSlider = () => {
  return (
    <div className="grow relative! h-full!">
      <Slider slidesPerView={2}>
        {Array.from({ length: 20 }).map((product, i) => (
          <IncredibleCard key={i} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductsSlider;
