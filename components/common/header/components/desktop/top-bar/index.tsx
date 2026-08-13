import React from "react";
import Search from "../../common/search";
import ProfileDropdown from "./profile-dropdown";
import Divider from "@/components/ui/divider";
import Basket from "../../common/basket";
import { Bookmark } from "lucide-react";
import Link from "next/link";
import { authHref } from "../../../features/header-data";

const TopBar = () => {
  return (
    <div className="hidden bg-black text-white lg:block">
      <div className="mx-auto flex h-18 w-full max-w-[1440px] items-center justify-between gap-6 px-5 xl:px-8">
        <Link
          href="/"
          className="shrink-0 text-3xl font-Estedad-ExtraBold! tracking-normal transition hover:text-white/80 xl:text-4xl"
        >
          MODALITY
        </Link>
        <Search className="min-w-[320px] flex-1" />
        <div className="flex items-center gap-4">
          <ProfileDropdown />
          <Divider />
          <Link
            href={authHref}
            aria-label="علاقه‌مندی‌ها"
            className="flex size-10 items-center justify-center transition hover:text-white/70"
          >
            <Bookmark className="size-6" />
          </Link>
          <Divider />
          <Basket />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
