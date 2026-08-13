import React from "react";
import MegaMenu from "./fragments/mega-menu";
import Divider from "@/components/ui/divider";
import NavLink from "./fragments/nav-link";
import {
  authHref,
  headerNavItems,
} from "@/components/common/header/features/header-data";
import Link from "next/link";
import { User } from "lucide-react";

const Navigation = () => {
  return (
    <div className="hidden border-b border-neutral-200 bg-white lg:block">
      <div className="mx-auto flex h-12 w-full max-w-[1440px] items-center justify-between gap-4 px-5 text-sm xl:px-8">
        <div className="flex h-full min-w-0 items-center">
          <MegaMenu />
          <Divider />
          <div className="flex h-full min-w-0 flex-wrap items-center overflow-hidden">
            {headerNavItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </div>
        </div>
        <Link
          href={authHref}
          className="flex h-full shrink-0 items-center gap-2 whitespace-nowrap px-3 font-Estedad-Bold text-sm text-neutral-700 transition hover:text-primary"
        >
          <User className="size-5" />
          <span>مشاهده حساب کاربری</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
