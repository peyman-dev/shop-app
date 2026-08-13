import { ShoppingBag } from "lucide-react";
import React from "react";

const AddToCart = () => {
  return (
    <button className="h-10 rounded-sm bg-[#f44336] px-4 text-sm font-Estedad-Bold! text-white transition-all duration-150 flex-center gap-2 hover:bg-primary-light sm:px-5">
      <ShoppingBag className="size-5" />
      <span>افزودن به سبد خرید</span>
    </button>
  );
};

export default AddToCart;
