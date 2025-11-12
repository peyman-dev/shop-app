import { ChevronLeft, ChevronRight, Grid2x2 } from "lucide-react";
import React from "react";

const ProductsNavigator = () => {
  return (
    <div className="gap-1!">
      <button>
      <ChevronRight />
      </button>
      <button>
        <Grid2x2 className="size-5"/>
      </button>
      <button>
        <ChevronLeft />
      </button>
    </div>
  );
};

export default ProductsNavigator;
