"use client";

import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import ProductBody from "./product-body";
import ProductImage from "./product-image";
import ProductPrice from "./product-price";
import { ProductItem } from "../utils/types";

const ProductCard = ({ product }: { product: ProductItem }) => {
  const handleFavorite = () => {
    window.dispatchEvent(
      new CustomEvent("shop-toast", {
        detail: `${product.title} به علاقه‌مندی‌ها اضافه شد`,
      })
    );
  };

  const handleAddToCart = () => {
    window.dispatchEvent(
      new CustomEvent("shop-toast", {
        detail: `${product.title} به سبد خرید اضافه شد`,
      })
    );
  };

  return (
    <article className="group relative">
      <Link href={`/products/${product.slug}`} className="block">
        <ProductImage product={product} />
        <ProductBody product={product} />
        <ProductPrice product={product} />
      </Link>
      <div className="mt-3 grid grid-cols-[1fr_42px] gap-2">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!product.isAvailable}
          className="flex h-10 items-center justify-center gap-1 rounded border border-neutral-900 bg-neutral-950 px-2 text-xs font-bold leading-4 text-white transition hover:bg-neutral-800 disabled:border-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-400 md:gap-2 md:px-3"
        >
          <ShoppingBag className="size-4" />
          {product.isAvailable ? "افزودن به سبد" : "ناموجود"}
        </button>
        <button
          type="button"
          aria-label="افزودن به علاقه‌مندی‌ها"
          onClick={handleFavorite}
          className="flex h-10 items-center justify-center rounded border border-neutral-200 bg-white text-neutral-900 transition hover:border-neutral-950"
        >
          <Heart className="size-4" />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
