import ProductCard from "../product-card";
import { ProductItem, ProductsViewMode } from "../utils/types";
import ProductsToolbar from "./sort-by";

const Content = ({
  products,
  totalCount,
  view,
  onToggleFilters,
}: {
  products: ProductItem[];
  totalCount: number;
  view: ProductsViewMode;
  onToggleFilters: () => void;
}) => {
  const gridClassName =
    view === "grid-4"
      ? "grid-cols-2 lg:grid-cols-4"
      : view === "compact"
      ? "grid-cols-2 xl:grid-cols-3"
      : "grid-cols-2 xl:grid-cols-3";

  return (
    <section className="min-w-0 flex-1">
      <ProductsToolbar
        productsCount={products.length}
        totalCount={totalCount}
        onToggleFilters={onToggleFilters}
      />
      {products.length > 0 ? (
        <div className={`grid gap-x-4 gap-y-9 md:gap-x-8 md:gap-y-10 ${gridClassName}`}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-80 flex-col items-center justify-center border border-dashed border-neutral-200 text-center">
          <p className="font-bold text-neutral-950">محصولی پیدا نشد</p>
          <p className="mt-2 text-sm text-neutral-500">
            فیلترها را تغییر دهید یا پاک کنید.
          </p>
        </div>
      )}
    </section>
  );
};

export default Content;
