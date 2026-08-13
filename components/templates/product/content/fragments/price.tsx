import React from "react";

const Price = () => {
  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex items-end gap-1">
        <p className="text-xl font-Estedad-ExtraBold!">
          {Number(2_690_000).toLocaleString("fa-IR")}
        </p>
        <span className="font-Estedad-Bold!">تومان</span>
      </div>
      <span className="text-sm font-Estedad-Bold! text-primary-light">
        موجود
      </span>
    </div>
  );
};

export default Price;
