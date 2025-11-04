import React from "react";
import Rates from "./rates";
import Availability from "./availability";

const Main = () => {
  return (
    <main className="px-2 mt-[30px] space-y-4">
      <h2 className="text-ellipsis text-[#3f4064] line-clamp-2 text-sm font-bold! max-h-[52px] h-[52px] tracking-wide leading-6">
        گوشی اپل iPhone 16 Pro Max CH رجیسترشده دو سیم‌کارت 256 گیگابایت با رم 8
        گیگابایت - نات اکتیو
      </h2>

      <div className="flex-between">
        <Availability />
        <Rates />
      </div>

    </main>
  );
};

export default Main;
