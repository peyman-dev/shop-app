import React from "react";

const Variants = () => {
  return (
    <div className="mr-5">
      <ul className="list-disc space-y-1.5">
        <li className=" gap-1 text-xs">
          <span>رنگ محصول</span>
          <span className="px-1 text-blue-500 inline-block">
            <strong>مشکی</strong>
          </span>
        </li>
        <li className=" gap-1 text-xs">
          <span>گارانتی</span>
          <span className="px-1 text-blue-500 inline-block">
            <strong>۳۶ماهه</strong>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Variants;
