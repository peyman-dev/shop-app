import Image from "next/image";
import React from "react";

const PrimaryImage = () => {
  return (
    <div className="size-[548px] **:object-cover!">
      <Image
        src="/assets/static/product-1.png"
        width={548}
        height={548}
        alt="product image"
      />
    </div>
  );
};

export default PrimaryImage;
