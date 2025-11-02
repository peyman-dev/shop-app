import React from "react";
import ProductImage from "./fragments/product-image";
import LabelTag from "./fragments/label-tag";
import Title from "./fragments/title";
import Price from "./fragments/price";

const PromotedProduct = () => {
  return (
    <article className="relative">
      <LabelTag />
      <ProductImage />
      <main className="space-y-4">
        <Title />
        <Price />
      </main>
    </article>
  );
};

export default PromotedProduct;
