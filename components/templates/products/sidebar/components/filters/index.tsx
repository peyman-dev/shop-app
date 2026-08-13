"use client";

import {
  PRODUCT_BRANDS,
  PRODUCT_CATEGORIES,
  PRODUCT_COLORS,
  PRODUCT_PRICE_RANGE,
} from "../../../utils/products-data";
import { useProductsQuery } from "../../../utils/use-products-query";

const Filters = () => {
  const { filters, toggleMultiValue, toggleBoolean, setValue, resetFilters } =
    useProductsQuery();

  return (
    <div className="rounded border border-neutral-200 bg-white p-4">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-bold text-neutral-950">Filters</h2>
        <button
          type="button"
          onClick={resetFilters}
          className="text-xs font-bold text-neutral-500 transition hover:text-neutral-950"
        >
          حذف فیلترها
        </button>
      </div>

      <div className="space-y-6">
        <fieldset>
          <legend className="mb-3 text-sm font-bold text-neutral-950">
            دسته‌بندی
          </legend>
          <div className="space-y-3">
            {PRODUCT_CATEGORIES.map((category) => (
              <label
                className="flex items-center justify-between gap-3 text-sm text-neutral-700"
                key={category}
              >
                <span>{category}</span>
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={() => toggleMultiValue("category", category)}
                  className="size-4 accent-neutral-950"
                />
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 text-sm font-bold text-neutral-950">
            برند
          </legend>
          <div className="space-y-3">
            {PRODUCT_BRANDS.map((brand) => (
              <label
                className="flex items-center justify-between gap-3 text-sm text-neutral-700"
                key={brand}
              >
                <span>{brand}</span>
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => toggleMultiValue("brand", brand)}
                  className="size-4 accent-neutral-950"
                />
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 text-sm font-bold text-neutral-950">
            رنگ
          </legend>
          <div className="flex flex-wrap gap-2">
            {PRODUCT_COLORS.map((color) => (
              <button
                type="button"
                onClick={() => toggleMultiValue("color", color)}
                className={`rounded border px-3 py-1.5 text-xs font-bold transition ${
                  filters.colors.includes(color)
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-950"
                }`}
                key={color}
              >
                {color}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 text-sm font-bold text-neutral-950">
            قیمت
          </legend>
          <div className="space-y-3">
            <label className="block text-xs font-bold text-neutral-500">
              از {filters.minPrice.toLocaleString("fa-IR")} تومان
              <input
                type="range"
                min={PRODUCT_PRICE_RANGE.min}
                max={PRODUCT_PRICE_RANGE.max}
                step={50_000}
                value={filters.minPrice}
                onChange={(event) => setValue("minPrice", event.target.value)}
                className="mt-2 w-full accent-neutral-950"
              />
            </label>
            <label className="block text-xs font-bold text-neutral-500">
              تا {filters.maxPrice.toLocaleString("fa-IR")} تومان
              <input
                type="range"
                min={PRODUCT_PRICE_RANGE.min}
                max={PRODUCT_PRICE_RANGE.max}
                step={50_000}
                value={filters.maxPrice}
                onChange={(event) => setValue("maxPrice", event.target.value)}
                className="mt-2 w-full accent-neutral-950"
              />
            </label>
          </div>
        </fieldset>

        <label className="flex items-center justify-between gap-3 border-t border-neutral-100 pt-4 text-sm font-bold text-neutral-950">
          <span>فقط کالاهای موجود</span>
          <input
            type="checkbox"
            checked={filters.onlyAvailable}
            onChange={() => toggleBoolean("available")}
            className="size-4 accent-neutral-950"
          />
        </label>
      </div>
    </div>
  );
};

export default Filters;
