"use client";
import Image from "next/image";
import React from "react";
import { CafeCategory } from "../types";
import { cleanImageUrl } from "../utils/image-helper";

interface Props {
  categories: CafeCategory[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

const CafeCategoryNav: React.FC<Props> = ({ categories, activeId, onSelect }) => {
  return (
    <div className="sticky top-0 z-30 border-b border-neutral-100 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto max-w-6xl px-2 md:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none md:gap-2.5 md:py-4">
          {/* Label */}
          <div className="sticky right-0 z-10 flex shrink-0 items-center gap-2 bg-gradient-to-l from-white via-white to-white/0 pl-3 md:pl-4">
            <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white md:flex">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <span className="whitespace-nowrap text-[13px] font-bold text-neutral-800 md:text-sm">دسته‌بندی‌ها</span>
          </div>

          {categories.map((cat, idx) => {
            const img = cleanImageUrl(cat.image);
            const isActive = activeId === cat.category_id;
            return (
              <button
                key={cat.category_id}
                onClick={() => onSelect(cat.category_id)}
                className={`group relative flex shrink-0 items-center gap-2.5 rounded-full border px-1 py-1 pr-3 text-sm font-medium transition-all duration-300 md:pr-4 ${
                  isActive
                    ? "border-black bg-black text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50"
                }`}
              >
                <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-neutral-100 md:h-8 md:w-8">
                  {img ? (
                    <Image src={img} alt={cat.category} fill className="object-cover" sizes="32px" />
                  ) : (
                    <div className={`flex h-full w-full items-center justify-center text-[11px] font-bold ${isActive ? "bg-white/10 text-white" : "bg-neutral-100 text-neutral-500"}`}>
                      {idx + 1}
                    </div>
                  )}
                </div>
                <span className="max-w-[120px] truncate whitespace-nowrap md:max-w-[160px]">{cat.category}</span>
                <span
                  className={`ml-1 inline-flex min-w-5 justify-center rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums ${
                    isActive ? "bg-white/15 text-white" : "bg-neutral-100 text-neutral-600"
                  }`}
                >
                  {cat.data.length}
                </span>
              </button>
            );
          })}

          <div className="shrink-0 w-2" />
        </div>
      </div>
    </div>
  );
};

export default CafeCategoryNav;
