import StaticImageDirector from "@/core/features/static-image-director";
import { Bookmark, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";
import Quantity from "./content/fragments/quantity";

const StickyPurchaseBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur">
      <div className="container flex min-h-16 items-center justify-between gap-3 py-2">
        <div className="hidden min-w-0 items-center gap-3 md:flex">
          <Image
            src={StaticImageDirector("product-1.jpg")}
            alt="تصویر محصول"
            width={48}
            height={48}
            className="size-12 rounded-sm object-cover"
          />
          <p className="truncate text-sm font-Estedad-Bold!">
            جاگرفول بگی کمر calvin مشکی کد ۵۰۴۲۹۳
          </p>
        </div>

        <div className="flex flex-1 items-center justify-between gap-3 md:flex-none md:justify-end">
          <button className="hidden text-primary-light md:block">
            <Bookmark className="size-5" />
          </button>
          <div className="hidden items-center gap-2 text-sm md:flex">
            <span>موجود</span>
            <span className="font-Estedad-ExtraBold!">
              {Number(2_690_000).toLocaleString("fa-IR")}
            </span>
            <span>تومان</span>
          </div>
          <Quantity />
          <button className="h-10 rounded-sm bg-[#f44336] px-4 text-sm font-Estedad-Bold! text-white flex-center gap-2 sm:px-5">
            <ShoppingBag className="size-5" />
            <span>افزودن به سبد خرید</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyPurchaseBar;
