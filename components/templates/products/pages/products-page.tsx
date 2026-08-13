"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import Content from "../content";
import Sidebar from "../sidebar";
import { filterProducts, sortProducts } from "../utils/filter-products";
import { productsData } from "../utils/products-data";
import { useProductsQuery } from "../utils/use-products-query";

const ProductsPageContent = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDesktopFilterVisible, setIsDesktopFilterVisible] = useState(true);
  const [toast, setToast] = useState("");
  const { filters, sort, view, perPage } = useProductsQuery();

  const filteredProducts = useMemo(() => {
    return filterProducts(productsData, filters);
  }, [filters]);

  const products = useMemo(() => {
    return sortProducts(filteredProducts, sort).slice(0, perPage);
  }, [filteredProducts, perPage, sort]);

  useEffect(() => {
    const handleToast = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      setToast(detail);
      window.setTimeout(() => setToast(""), 2600);
    };

    window.addEventListener("shop-toast", handleToast);

    return () => window.removeEventListener("shop-toast", handleToast);
  }, []);

  return (
    <main className="container py-5 md:py-10">
      <div className="mb-6 hidden items-center justify-between border-b border-neutral-200 pb-5 text-sm md:flex">
        <nav className="flex items-center gap-2 text-neutral-500">
          <span>خانه</span>
          <span>/</span>
          <span className="font-bold text-neutral-950">محصولات</span>
        </nav>
        <button
          type="button"
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-2 font-bold text-neutral-950 lg:hidden"
        >
          <span>نمایش فیلترها</span>
          <SlidersHorizontal className="size-5" />
        </button>
      </div>

      <div className="flex items-start gap-8">
        {isDesktopFilterVisible ? (
          <Sidebar className="hidden w-[270px] min-w-[270px] lg:block" />
        ) : null}
        <Content
          products={products}
          totalCount={filteredProducts.length}
          view={view}
          onToggleFilters={() =>
            setIsDesktopFilterVisible((currentValue) => !currentValue)
          }
        />
      </div>

      {isFilterOpen ? (
        <div className="fixed inset-0 z-[80] bg-black/40 lg:hidden">
          <div className="absolute bottom-0 right-0 max-h-[88vh] w-full overflow-y-auto rounded-t bg-white p-4 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-bold text-neutral-950">فیلتر محصولات</p>
              <button
                type="button"
                onClick={() => setIsFilterOpen(false)}
                aria-label="بستن فیلترها"
                className="flex size-9 items-center justify-center rounded border border-neutral-200"
              >
                <X className="size-5" />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      ) : null}

      {toast ? (
        <div className="fixed bottom-6 left-4 z-[90] max-w-[calc(100vw-32px)] rounded bg-neutral-950 px-4 py-3 text-sm font-bold text-white shadow-xl md:left-6">
          {toast}
        </div>
      ) : null}
    </main>
  );
};

const ProductsPage = () => {
  return (
    <Suspense fallback={null}>
      <ProductsPageContent />
    </Suspense>
  );
};

export default ProductsPage;
