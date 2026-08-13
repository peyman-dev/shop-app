"use client";

import {
  authHref,
  headerCategories,
  headerNavItems,
} from "@/components/common/header/features/header-data";
import { Bookmark, Menu, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Search from "../common/search";

const Mobile = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden" dir="rtl">
      <div className="bg-black text-white">
        <div className="flex h-14 items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="باز کردن منو"
            className="flex size-10 items-center justify-center"
          >
            <Menu className="size-6" />
          </button>
          <Link
            href="/"
            className="text-2xl font-Estedad-ExtraBold! tracking-normal"
          >
            MODALITY
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href={authHref}
              aria-label="علاقه‌مندی‌ها"
              className="flex size-9 items-center justify-center"
            >
              <Bookmark className="size-5" />
            </Link>
            <Link
              href={authHref}
              aria-label="سبد خرید"
              className="relative flex size-9 items-center justify-center"
            >
              <ShoppingCart className="size-5" />
              <span className="absolute right-1 top-1 flex size-3.5 items-center justify-center rounded-full bg-white text-[9px] text-primary">
                ۰
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-neutral-200 bg-white px-4 py-2 sm:px-6">
        <Search compact />
      </div>
      {isOpen ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="بستن منو"
            className="absolute inset-0 bg-black/45"
            onClick={() => setIsOpen(false)}
          />
          <aside className="relative h-full w-[86vw] max-w-sm overflow-y-auto bg-white shadow-2xl">
            <div className="flex h-16 items-center justify-between border-b border-neutral-200 px-4">
              <Link
                href="/"
                className="text-2xl font-Estedad-ExtraBold! text-primary"
              >
                MODALITY
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="بستن منو"
                className="flex size-10 items-center justify-center text-neutral-700"
              >
                <X className="size-6" />
              </button>
            </div>
            <div className="border-b border-neutral-200 p-4">
              <Link
                href={authHref}
                className="flex h-12 items-center justify-center gap-2 bg-black px-4 font-Estedad-Bold! text-sm text-white"
              >
                <User className="size-5" />
                مشاهده حساب کاربری
              </Link>
            </div>
            <nav className="border-b border-neutral-200 py-2">
              {headerNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-5 py-3 text-sm font-Estedad-Bold text-neutral-800 transition hover:bg-neutral-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="py-2">
              <p className="px-5 py-2 text-xs text-neutral-500">
                دسته‌بندی کالاها
              </p>
              {headerCategories.map((item) => (
                <Link
                  key={item.value}
                  href={item.href}
                  className="block px-5 py-3 text-sm text-neutral-700 transition hover:bg-neutral-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
};

export default Mobile;
