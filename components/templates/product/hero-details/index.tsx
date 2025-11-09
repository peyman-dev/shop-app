import React from "react";
import ProductImages from "./components/product-images";
import { tv } from "tailwind-variants";
import Link from "next/link";
import ProductActions from "./components/product-actions";
import Title from "./components/title";
import MiniTitle from "./components/mini-title";
import Category from "./components/category";
import Image from "next/image";

const HeroDetails = () => {
  const heroCSS = tv({
    slots: {
      container: "gap-5 grid grid-cols-2 *:w-full *:p-5  divide-x",
      gallery: "",
    },
  });

  const { container, gallery } = heroCSS();

  return (
    <section className={container()}>
      <div className={gallery()}>
        <Image width={600} height={600} src="/assets/static/product-1.png" alt="product" />
      </div>
      <div>
        <div className="flex-between">
          <Category label="لوازم‌جانبی"/>
          <ProductActions />
        </div>
        <div className="mt-6">
          <div className="space-y-1">
            <Title text="لپ تاپ ایسوس ROG Strix G615JMR i7 14650HX 32GB 1TB SSD RTX 5060" />
            <MiniTitle
              text="ASUS ROG Strix G615JMR Core i7 14650HX 32GB DDR5 1TB SSD GeForce
              RTX 5060 16Inch IPS 1920 × 1200 (WUXGA)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDetails;
