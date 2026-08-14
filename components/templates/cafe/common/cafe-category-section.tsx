"use client";
import React from "react";
import { CafeCategory } from "../types";
import CafeCategoryHeader from "./cafe-category-header";
import CafeMenuItemCard from "./cafe-menu-item-card";

interface Props {
  category: CafeCategory;
  index: number;
  innerRef?: (el: HTMLElement | null) => void;
}

const CafeCategorySection: React.FC<Props> = ({ category, index, innerRef }) => {
  return (
    <section
      ref={innerRef as any}
      data-category-id={category.category_id}
      className="scroll-mt-28 md:scroll-mt-32"
      dir="rtl"
    >
      <div className="space-y-6 md:space-y-8">
        <CafeCategoryHeader
          id={category.category_id}
          title={category.category}
          image={category.image}
          count={category.data.length}
          index={index}
        />

        {category.data.length > 0 ? (
          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-4">
            {category.data.map((item) => (
              <CafeMenuItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-[20px] border border-dashed border-neutral-200 bg-[#fafaf8] p-10 text-center">
            <p className="text-sm text-neutral-500">فعلاً آیتمی در این دسته وجود ندارد</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CafeCategorySection;
