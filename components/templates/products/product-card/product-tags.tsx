import { ProductItem } from "../utils/types";

const ProductTags = ({ product }: { product: ProductItem }) => {
  return (
    <div className="absolute right-4 top-4 z-10 flex flex-col items-start gap-2">
      {product.isNew ? (
        <span className="rounded bg-neutral-700 px-3 py-1 text-xs font-bold text-white">
          NEW
        </span>
      ) : null}
      {!product.isAvailable ? (
        <span className="rounded bg-white px-3 py-1 text-xs font-bold text-neutral-900 shadow-sm">
          ناموجود
        </span>
      ) : null}
    </div>
  );
};

export default ProductTags;
