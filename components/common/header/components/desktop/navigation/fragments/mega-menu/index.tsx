"use client";

import { headerCategories } from "@/components/common/header/features/header-data";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const MegaMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="relative h-full"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-full cursor-pointer items-center gap-2 whitespace-nowrap px-3 text-neutral-700 transition hover:text-primary"
        aria-expanded={isOpen}
      >
        <Menu className="size-5" />
        <span>دسته‌بندی کالاها</span>
        <ChevronDown
          className={`size-4 transition ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen ? (
        <div className="absolute right-0 top-full z-50 w-56 border border-neutral-200 bg-white py-2 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
          {headerCategories.map((item) => (
            <Link
              key={item.value}
              href={item.href}
              className="block px-4 py-3 text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default MegaMenu;
