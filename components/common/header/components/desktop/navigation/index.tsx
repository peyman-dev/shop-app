import React from "react";
import MegaMenu from "./fragments/mega-menu";
import Divider from "@/components/ui/divider";
import NavLink from "./fragments/nav-link";

const Navigation = () => {
  return (
    <div className="border-b  border-neutral-300">
      <div className="container *:flex-ic text-sm! *:h-full  h-10 mt-2 flex-between">
        <div className="gap-4">
          <MegaMenu />
          <Divider />
          <div className="flex-ic">
            <NavLink href="/" label="شگفت‌انگیز‌ها" />
            <NavLink href="/" label="همه محصولات" />
            <NavLink href="/" label="پرفروش ترین‌ها" />
          </div>
          <Divider />
          <NavLink href="/" label="سوالی دارید؟" />
        </div>
        <div>2</div>
      </div>
    </div>
  );
};

export default Navigation;
