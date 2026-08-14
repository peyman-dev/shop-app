"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { CafeCategory } from "../types";
import CafeHero from "../common/cafe-hero";
import CafeCategoryNav from "../common/cafe-category-nav";
import CafeCategorySection from "../common/cafe-category-section";

interface Props {
  cafeName: string;
  categories: CafeCategory[];
}

const CafePage: React.FC<Props> = ({ cafeName, categories }) => {
  const [activeId, setActiveId] = useState<string | null>(categories[0]?.category_id ?? null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const totalItems = useMemo(() => categories.reduce((sum, c) => sum + c.data.length, 0), [categories]);

  const scrollToCategory = (id: string) => {
    setActiveId(id);
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 116; // offset for sticky nav
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // IntersectionObserver for active category
  useEffect(() => {
    if (!categories.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const id = visible[0].target.getAttribute("data-category-id");
          if (id) setActiveId(id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  if (!categories.length) {
    return (
      <div className="min-h-[60vh] bg-[#f5f5f3] p-8">
        <div className="mx-auto max-w-6xl rounded-[24px] bg-white p-10 text-center shadow-sm">
          <p className="text-neutral-600">منویی برای این کافه یافت نشد</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f3]" dir="rtl">
      <CafeHero cafeName={cafeName} totalCategories={categories.length} totalItems={totalItems} />

      <CafeCategoryNav categories={categories} activeId={activeId} onSelect={scrollToCategory} />

      <main className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10 lg:py-12">
        <div className="space-y-10 md:space-y-16 lg:space-y-20">
          {categories.map((category, idx) => (
            <CafeCategorySection
              key={category.category_id}
              category={category}
              index={idx}
              innerRef={(el) => {
                if (el) sectionRefs.current[category.category_id] = el;
              }}
            />
          ))}
        </div>

        {/* Footer hint */}
        <div className="mt-16 rounded-[24px] border border-neutral-200 bg-white p-6 text-center md:mt-20 md:p-8">
          <div className="mx-auto max-w-lg space-y-3">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h4 className="text-[16px] font-bold text-neutral-900">از حضور شما سپاسگزاریم</h4>
            <p className="text-sm leading-6 text-neutral-500">
              این منو به صورت زنده به‌روزرسانی می‌شود. برای سفارش، آیتم مورد نظر را به پرسنل اعلام کنید.
            </p>
          </div>
        </div>
      </main>

      {/* Floating active category indicator for mobile */}
      <div className="pointer-events-none fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 rounded-full bg-black/90 px-4 py-2 text-xs font-medium text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur md:hidden">
        در حال مشاهده: {categories.find((c) => c.category_id === activeId)?.category}
      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default CafePage;
