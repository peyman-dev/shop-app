"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ProductBrand,
  ProductCategory,
  ProductColor,
  ProductFilters,
  ProductsSort,
  ProductsViewMode,
} from "./types";
import {
  PRODUCT_BRANDS,
  PRODUCT_CATEGORIES,
  PRODUCT_COLORS,
  PRODUCT_PRICE_RANGE,
  PRODUCTS_SORT_OPTIONS,
} from "./products-data";

const getMultiParam = <T extends string>(
  searchParams: URLSearchParams,
  key: string,
  allowedValues: readonly T[]
) => {
  const selectedValues = searchParams.get(key)?.split(",").filter(Boolean) ?? [];

  return selectedValues.filter((value): value is T =>
    allowedValues.includes(value as T)
  );
};

const getNumberParam = (
  searchParams: URLSearchParams,
  key: string,
  fallback: number
) => {
  const param = searchParams.get(key);

  if (!param) {
    return fallback;
  }

  const value = Number(param);

  return Number.isFinite(value) ? value : fallback;
};

const clampPrice = (price: number) => {
  return Math.min(
    Math.max(price, PRODUCT_PRICE_RANGE.min),
    PRODUCT_PRICE_RANGE.max
  );
};

export const useProductsQuery = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentParams = new URLSearchParams(searchParams.toString());

  const sortParam = currentParams.get("sort") as ProductsSort | null;
  const sort: ProductsSort = PRODUCTS_SORT_OPTIONS.some(
    (option) => option.value === sortParam
  )
    ? (sortParam as ProductsSort)
    : "newest";

  const viewParam = currentParams.get("view") as ProductsViewMode | null;
  const view: ProductsViewMode = ["grid-3", "grid-4", "compact"].includes(
    viewParam ?? ""
  )
    ? (viewParam as ProductsViewMode)
    : "grid-3";
  const perPageParam = Number(currentParams.get("perPage"));
  const perPage = [9, 24, 36].includes(perPageParam) ? perPageParam : 9;

  const minPriceParam = clampPrice(
    getNumberParam(currentParams, "minPrice", PRODUCT_PRICE_RANGE.min)
  );
  const maxPriceParam = clampPrice(
    getNumberParam(currentParams, "maxPrice", PRODUCT_PRICE_RANGE.max)
  );

  const filters: ProductFilters = {
    categories: getMultiParam<ProductCategory>(
      currentParams,
      "category",
      PRODUCT_CATEGORIES
    ),
    brands: getMultiParam<ProductBrand>(currentParams, "brand", PRODUCT_BRANDS),
    colors: getMultiParam<ProductColor>(currentParams, "color", PRODUCT_COLORS),
    onlyAvailable: currentParams.get("available") === "1",
    minPrice: Math.min(minPriceParam, maxPriceParam),
    maxPrice: Math.max(minPriceParam, maxPriceParam),
  };

  const setParams = (nextParams: URLSearchParams) => {
    router.push(
      `${pathname}${nextParams.toString() ? `?${nextParams.toString()}` : ""}`,
      { scroll: false }
    );
  };

  const setValue = (key: string, value: string) => {
    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.set(key, value);
    setParams(nextParams);
  };

  const toggleMultiValue = (key: string, value: string) => {
    const nextParams = new URLSearchParams(searchParams.toString());
    const currentValues = nextParams.get(key)?.split(",").filter(Boolean) ?? [];
    const nextValues = currentValues.includes(value)
      ? currentValues.filter((currentValue) => currentValue !== value)
      : [...currentValues, value];

    if (nextValues.length > 0) {
      nextParams.set(key, nextValues.join(","));
    } else {
      nextParams.delete(key);
    }

    setParams(nextParams);
  };

  const toggleBoolean = (key: string) => {
    const nextParams = new URLSearchParams(searchParams.toString());

    if (nextParams.get(key) === "1") {
      nextParams.delete(key);
    } else {
      nextParams.set(key, "1");
    }

    setParams(nextParams);
  };

  const resetFilters = () => {
    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete("category");
    nextParams.delete("brand");
    nextParams.delete("color");
    nextParams.delete("available");
    nextParams.delete("minPrice");
    nextParams.delete("maxPrice");
    setParams(nextParams);
  };

  return {
    filters,
    sort,
    view,
    perPage,
    setValue,
    toggleMultiValue,
    toggleBoolean,
    resetFilters,
  };
};
