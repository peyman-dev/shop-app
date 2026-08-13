import Link from "next/link";
import React from "react";
import ProductsNavigator from "./products-navigator";

const Breadcrumb = () => {
  return (
    <div className="flex min-h-10 items-center justify-between gap-3 rounded-sm bg-primary-light/5 px-3 text-xs font-Estedad-SemiBold! text-primary-light/60 sm:text-sm">
      <div className="min-w-0 truncate">
        <Link href="/">خانه</Link>
        {" / "}
        <Link href="/">تیشرت</Link>
        {" / "}
        <Link href="/">باکسی</Link>
        {" / "}
        <Link href="/" className="text-primary-light!">
          پیراهن باکسی 2 جیب آستین 3 ربع – 303071
        </Link>
      </div>
      <ProductsNavigator />
    </div>
  );
};

export default Breadcrumb;
