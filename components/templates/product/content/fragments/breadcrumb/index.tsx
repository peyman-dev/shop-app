import Link from "next/link";
import React from "react";
import ProductsNavigator from "./products-navigator";

const Breadcrumb = () => {
  return (
    <div className="h-10.5 *:flex-ic *:gap-3 flex-between px-3 bg-primary-light/5 rounded-md text-primary-light/60 font-Estedad-SemiBold! text-sm">
      <div>
        <Link href="/">خانه</Link>
        {" / "}
        <Link href="/">تیشرت</Link>
        {" / "}
        <Link href="/">باکسی</Link>
        {" / "}
        <Link href="/" className="text-primary-light!">پیراهن باکسی 2 جیب آستین 3 ربع – 303071</Link>
      </div>
      <ProductsNavigator />
    </div>
  );
};

export default Breadcrumb;
