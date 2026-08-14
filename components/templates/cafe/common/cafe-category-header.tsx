"use client";
import Image from "next/image";
import React from "react";
import { cleanImageUrl } from "../utils/image-helper";

interface Props {
  id: string;
  title: string;
  image: string | null;
  count: number;
  index: number;
}

const CafeCategoryHeader: React.FC<Props> = ({ id, title, image, count, index }) => {
  const cleanedImage = cleanImageUrl(image);

  // Alternating layout for visual diversity but still consistent
  const isEven = index % 2 === 0;

  if (!cleanedImage) {
    return (
      <div id={`cat-${id}`} className="scroll-mt-28 md:scroll-mt-32">
        <div className="group relative overflow-hidden rounded-[24px] border border-neutral-100 bg-[#fafaf8] p-6 transition-all duration-300 hover:border-neutral-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-8">
          {/* Subtle decoration */}
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-neutral-100 to-transparent opacity-60" />
          <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-tl from-stone-100 to-transparent opacity-60" />

          <div className="relative flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="text-[22px] font-bold tracking-tight text-neutral-900 md:text-[28px]">
                  {title}
                </h2>
              </div>
              <div className="flex items-center gap-2 pr-12">
                <span className="h-px w-8 bg-neutral-300" />
                <span className="text-sm text-neutral-500">{count} آیتم در این دسته</span>
              </div>
            </div>

            <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-400 group-hover:text-neutral-700 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={`cat-${id}`} className="scroll-mt-28 md:scroll-mt-32">
      <div className={`relative overflow-hidden rounded-[28px] bg-neutral-900 shadow-[0_16px_40px_rgba(0,0,0,0.12)] ${isEven ? "" : "md:rounded-[32px]"}`}>
        {/* Image container */}
        <div className="relative h-[260px] w-full md:h-[340px] lg:h-[380px]">
          <Image
            src={cleanedImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
            priority={index < 2}
          />

          {/* Gradient overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-transparent md:from-black/50" />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Top badges */}
          <div className="absolute left-4 top-4 flex items-center gap-2 md:left-6 md:top-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-black shadow-lg backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {count} آیتم
            </span>
            <span className="hidden rounded-full bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md border border-white/10 md:inline-flex">
              #{String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 lg:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <h2 className="max-w-2xl text-[28px] font-black leading-[1.1] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)] md:text-[38px] lg:text-[44px]">
                  {title}
                </h2>
                <div className="flex items-center gap-3">
                  <span className="h-0.5 w-12 rounded-full bg-white/80" />
                  <span className="text-sm font-medium text-white/80 md:text-[14px]">
                    انتخاب‌های ویژه این دسته را ببینید
                  </span>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2">
                <div className="rounded-full bg-white/10 p-3 backdrop-blur border border-white/10 text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M7 17L17 7M17 7H10M17 7V14" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle inner border for premium feel */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10 ring-inset" />
        </div>

        {/* Bottom accent line */}
        <div className="h-1 w-full bg-gradient-to-l from-amber-400 via-orange-400 to-transparent opacity-80" />
      </div>
    </div>
  );
};

export default CafeCategoryHeader;
