"use client";
import React from "react";

interface Props {
  cafeName: string;
  totalCategories: number;
  totalItems: number;
}

const CafeHero: React.FC<Props> = ({ cafeName, totalCategories, totalItems }) => {
  const decodedName = (() => {
    try {
      return decodeURIComponent(cafeName);
    } catch {
      return cafeName;
    }
  })();

  return (
    <div className="relative overflow-hidden bg-[#0f0f0f] text-white" dir="rtl">
      {/* Decorative background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#1a1a1a]" />
        <div className="absolute top-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 blur-[80px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-stone-500/10 to-neutral-500/10 blur-[80px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16 lg:py-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-sm text-neutral-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              کافه باز است
            </span>
            <span className="hidden items-center gap-1.5 md:inline-flex">
              <span className="h-px w-6 bg-white/20" />
              منوی دیجیتال
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-Estedad-ExtraBold max-w-3xl text-[32px] leading-[1.15] tracking-tight md:text-[48px] lg:text-[58px]">
              <span className="bg-gradient-to-l from-white via-white to-neutral-300 bg-clip-text text-transparent">
                {decodedName}
              </span>
            </h1>
            <p className="max-w-xl text-[15px] leading-7 text-neutral-300 md:text-[16px]">
              تجربه طعم‌های اصیل در فضایی دنج — دسته‌بندی‌ها را مرور کنید و نوشیدنی یا خوراکی محبوب خود را انتخاب کنید.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-lg">
              <span className="text-neutral-500">{totalCategories}</span>
              <span>دسته‌بندی</span>
              <span className="h-3 w-px bg-black/10" />
              <span>{totalItems}</span>
              <span>آیتم</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              سرویس‌دهی سریع • کیفیت ممتاز
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeHero;
