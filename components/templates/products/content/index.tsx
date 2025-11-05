import ProductCard from "@/components/common/cards/product";
import { arrayMap } from "@/core/features/array-map";
import React from "react";
import SortBy from "./sort-by";

const Content = () => {
  return (
    <section>
      <SortBy />
      <div className="grid grow w-full grid-cols-4 divide-x divide-y">
        {arrayMap(50, <ProductCard />)}
      </div>
    </section>
  );
};

export default Content;
