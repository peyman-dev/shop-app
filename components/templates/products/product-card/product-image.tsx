import Image from "next/image";
import ProductTags from "./product-tags";
import { ProductItem } from "../utils/types";

const ProductImage = ({ product }: { product: ProductItem }) => {
  return (
    <div className="relative aspect-[4/5.35] w-full overflow-hidden rounded bg-neutral-100">
      <ProductTags product={product} />
      <Image
        src={product.image}
        alt={product.title}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 390px"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
  );
};

export default ProductImage;
