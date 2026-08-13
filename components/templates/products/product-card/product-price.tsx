import { ProductItem } from "../utils/types";

const ProductPrice = ({ product }: { product: ProductItem }) => {
  return (
    <div className="border-t border-dashed border-neutral-200 px-1 pt-3 text-center md:px-2">
      <p className="text-sm font-bold text-neutral-950 md:text-base">
        {product.price.toLocaleString("fa-IR")} تومان
      </p>
      {product.oldPrice ? (
        <p className="mt-1 text-xs font-bold text-neutral-400 line-through">
          {product.oldPrice.toLocaleString("fa-IR")}
        </p>
      ) : null}
    </div>
  );
};

export default ProductPrice;
