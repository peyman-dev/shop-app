import { authHref } from "@/components/common/header/features/header-data";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const Basket = () => {
  return (
    <Link
      href={authHref}
      aria-label="سبد خرید"
      className="relative flex size-10 items-center justify-center transition hover:text-white/70"
    >
      <ShoppingCart className="size-6" />
      <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-white text-[10px] text-primary">
        ۰
      </span>
    </Link>
  );
};

export default Basket;
