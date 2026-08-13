import LandingProductCard from "./landing-product-card";
import LandingSectionTitle from "./landing-section-title";
import { LandingProduct } from "../utils/landing-data";
import React from "react";

type ProductGridSectionProps = {
  title: string;
  subtitle?: string;
  products: LandingProduct[];
  compact?: boolean;
};

const ProductGridSection = ({
  title,
  subtitle,
  products,
  compact = false,
}: ProductGridSectionProps) => {
  return (
    <section className="container max-w-6xl py-10 md:py-14">
      <LandingSectionTitle title={title} subtitle={subtitle} />
      <div
        className={
          compact
            ? "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
            : "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        }
      >
        {products.map((product) => (
          <LandingProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGridSection;
