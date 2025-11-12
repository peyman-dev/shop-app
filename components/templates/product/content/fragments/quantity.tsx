"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
      .replace(/٬/g, "")
      .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
    if (value === "" || /^\d+$/.test(value)) {
      setQuantity(Number(value) || 1);
    }
  };

  return (
    <div className="h-10 *:flex-center *:h-full flex border rounded-lg overflow-hidden divide-x border-neutral-200">
      <button
        className="w-8 *:size-5!"
        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
      >
        <Minus />
      </button>
      <input
        type="text"
        className="min-w-10  max-w-10 w-max text-center"
        value={quantity.toLocaleString("fa-IR")}
        onChange={handleChange}
      />
      <button
        className="w-8 *:size-5!"
        onClick={() => setQuantity((q) => q + 1)}
      >
        <Plus />
      </button>
    </div>
  );
};

export default Quantity;
