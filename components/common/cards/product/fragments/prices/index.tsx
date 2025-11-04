import Toman from "@/components/icons/toman";
import React from "react";
import OffPercent from "./elements/off-percent";

const Prices = () => {
  return (
    <div className="flex px-4 flex-col  items-end justify-end">
      <div className="flex-ic text-[#3f4064] text-lg font-bold! gap-2">
        <span>4,765,000</span>
        <Toman />
      </div>
      <div className="text-neutral-400 font-medium flex-ic mt-1 text-sm line-through">
        5,150,000 
        <Toman />
      </div>
      <OffPercent percent={24}/> 
    </div>
  );
};

export default Prices;
