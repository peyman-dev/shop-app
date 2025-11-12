import React from "react";

const Price = () => {
  return (
    <div className="flex-ic gap-3">
      <div className="flex text-base! text-primary-light/60 line-through items-end gap-1">
        <p className="text-xl font-bold">
          {Number(748_000).toLocaleString("fa-IR")}{" "}
        </p>
        <span className="font-bold">تومان</span>
      </div>
      <div className="flex items-end gap-1">
        <p className="text-2xl font-bold">
          {Number(438_000).toLocaleString("fa-IR")}{" "}
        </p>
        <span className="font-bold">تومان</span>
      </div>
    </div>
  );
};

export default Price;
