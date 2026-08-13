import { LandingProduct } from "../utils/landing-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type LandingProductCardProps = {
  product: LandingProduct;
};

const LandingProductCard = ({ product }: LandingProductCardProps) => {
  return (
    <article className="group relative overflow-hidden border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
      <Link
        href={`/products/${product.id}`}
        className="absolute inset-0 z-20"
        aria-label={product.title}
      />
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f1f1ef]">
        {product.tag ? (
          <span className="absolute left-3 top-3 z-10 bg-primary px-2.5 py-1 text-[10px] font-Estedad-Bold! uppercase text-white">
            {product.tag}
          </span>
        ) : null}
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 576px) 50vw, (max-width: 992px) 25vw, 180px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 p-3">
        <p className="text-[11px] text-primary-light/45">{product.category}</p>
        <h3 className="line-clamp-2 min-h-10 text-xs leading-5 text-primary md:text-sm">
          {product.title}
        </h3>
        <p className="pt-1 font-Estedad-ExtraBold! text-xs text-primary md:text-sm">
          {product.price.toLocaleString("fa-IR")} تومان
        </p>
      </div>
    </article>
  );
};

export default LandingProductCard;
