import { ProductItem } from "../utils/types";

const ProductBody = ({ product }: { product: ProductItem }) => {
  return (
    <div className="px-1 pt-4 text-center md:px-2">
      <h3 className="min-h-16 text-sm font-bold leading-7 text-neutral-950 md:min-h-12 md:text-base md:leading-6">
        {product.title}
      </h3>
    </div>
  );
};

export default ProductBody;
