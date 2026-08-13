"use client";

import {
  Grid2X2,
  Grid3X3,
  LayoutGrid,
  SlidersHorizontal,
} from "lucide-react";
import { PRODUCTS_SORT_OPTIONS } from "../../utils/products-data";
import { ProductsViewMode } from "../../utils/types";
import { useProductsQuery } from "../../utils/use-products-query";

const viewOptions: {
  label: string;
  value: ProductsViewMode;
  icon: typeof Grid3X3;
}[] = [
  { label: "سه ستونه", value: "grid-3", icon: Grid3X3 },
  { label: "چهار ستونه", value: "grid-4", icon: LayoutGrid },
  { label: "فشرده", value: "compact", icon: Grid2X2 },
];

const ProductsToolbar = ({
  productsCount,
  totalCount,
  onToggleFilters,
}: {
  productsCount: number;
  totalCount: number;
  onToggleFilters: () => void;
}) => {
  const { sort, view, perPage, setValue } = useProductsQuery();

  return (
    <div className="mb-6 border-b border-neutral-200 pb-4">
      <div className="mb-4 flex flex-col gap-4 text-sm md:mb-6 md:flex-row md:items-center md:justify-between">
        <select
          value={sort}
          onChange={(event) => setValue("sort", event.target.value)}
          className="h-11 w-full rounded border border-neutral-200 bg-white px-3 text-sm font-bold text-neutral-950 outline-none transition focus:border-neutral-950 md:hidden"
        >
          {PRODUCTS_SORT_OPTIONS.map((option) => (
            <option value={option.value} key={option.value}>
              مرتب‌سازی بر اساس {option.label}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={onToggleFilters}
          className="hidden items-center gap-2 font-bold text-neutral-950 transition hover:text-neutral-500 md:flex"
        >
          <span>نمایش فیلترها</span>
          <SlidersHorizontal className="size-5" />
        </button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="hidden items-center gap-2 md:flex">
          <select
            value={sort}
            onChange={(event) => setValue("sort", event.target.value)}
            className="h-10 rounded border border-neutral-200 bg-white px-3 text-sm font-bold text-neutral-950 outline-none transition focus:border-neutral-950"
          >
            {PRODUCTS_SORT_OPTIONS.map((option) => (
              <option value={option.value} key={option.value}>
                مرتب‌سازی بر اساس {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-neutral-500 md:text-sm">
            <span>تعداد نمایش:</span>
            {[9, 24, 36].map((count, index) => (
              <span className="flex items-center gap-2" key={count}>
                {index > 0 ? <span>/</span> : null}
                <button
                  type="button"
                  onClick={() => setValue("perPage", count.toString())}
                  className={`font-bold transition hover:text-neutral-950 ${
                    perPage === count ? "text-neutral-950" : "text-neutral-500"
                  }`}
                >
                  {count.toLocaleString("fa-IR")}
                </button>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {viewOptions.map((option) => {
              const Icon = option.icon;

              return (
                <button
                  type="button"
                  aria-label={option.label}
                  onClick={() => setValue("view", option.value)}
                  className={`text-neutral-400 transition hover:text-neutral-950 ${
                    view === option.value ? "text-neutral-950" : ""
                  }`}
                  key={option.value}
                >
                  <Icon className="size-5" />
                </button>
              );
            })}
          </div>
        </div>
        <p className="hidden font-bold text-neutral-950 md:block">
          نمایش ۱-{productsCount.toLocaleString("fa-IR")} از{" "}
          {totalCount.toLocaleString("fa-IR")} نتیجه
        </p>
      </div>
    </div>
  );
};

export default ProductsToolbar;
