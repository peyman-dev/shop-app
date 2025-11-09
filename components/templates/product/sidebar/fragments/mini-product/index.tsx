import Image from "next/image";
import React from "react";

const MiniProduct = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/assets/static/product-1.png"
        width={66}
        height={66}
        alt="product"
      />
      <div>
        <p className="text-sm text-slate-800">
          <strong>
            لپ تاپ ایسوس ROG Strix G615JMR i7 14650HX 32GB 1TB SSD RTX 5060
          </strong>
        </p>
      </div>
    </div>
  );
};

export default MiniProduct;
