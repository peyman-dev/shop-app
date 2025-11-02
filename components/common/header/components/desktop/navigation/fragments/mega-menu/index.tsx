import { Menu } from "lucide-react";
import React from "react";

const MegaMenu = () => {
  return (
    <div>
      <button className="flex-ic gap-2 cursor-pointer text-neutral-600">
        <span>
          <Menu className="size-5"/>
        </span>
        <span>دسته‌بندی کالاها</span>
      </button>
    </div>
  );
};

export default MegaMenu;
