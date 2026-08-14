"use client";
import Image from "next/image";
import React from "react";
import { CafeMenuItem } from "../types";
import { cleanImageUrl } from "../utils/image-helper";

interface Props {
  item: CafeMenuItem;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("fa-IR").format(price);
};

const CafeMenuItemCard: React.FC<Props> = ({ item }) => {
  const imageUrl = cleanImageUrl(item.image) || (item.images && item.images.length > 0 ? cleanImageUrl(item.images[0]) : null);

  return (
    <div className="group relative flex gap-4 overflow-hidden rounded-[20px] border border-neutral-100 bg-white p-4 transition-all duration-300 hover:border-neutral-200 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] md:p-5">
      {/* Text content */}
      <div className="flex flex-1 flex-col justify-between gap-3">
        <div className="space-y-1.5">
          <h3 className="text-[16px] font-bold leading-6 text-neutral-900 md:text-[17px] group-hover:text-black transition-colors">
            {item.name}
          </h3>
          {item.description ? (
            <p className="line-clamp-2 text-[13px] leading-5 text-neutral-500 md:text-[13.5px]">
              {item.description}
            </p>
          ) : (
            <p className="text-[12px] text-neutral-400">بدون توضیحات</p>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 pt-1">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-3 py-1.5 text-[13px] font-bold text-white shadow-sm">
            <span className="tabular-nums">{formatPrice(item.price)}</span>
            <span className="text-[11px] font-medium opacity-80">{item.currency || "تومان"}</span>
          </div>

          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition-all hover:bg-black hover:text-white hover:border-black md:h-9 md:w-9"
            aria-label="افزودن"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="relative h-[84px] w-[84px] shrink-0 overflow-hidden rounded-[14px] bg-[#f6f6f4] md:h-[92px] md:w-[92px]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="96px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-50 to-stone-100 text-neutral-300">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M8 13l2.5-2.5L14 14l2-2 2.5 2.5" />
              <circle cx="9" cy="8" r="1.5" />
            </svg>
          </div>
        )}
      </div>

      {/* Hover accent */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-l from-transparent via-neutral-200 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
};

export default CafeMenuItemCard;
