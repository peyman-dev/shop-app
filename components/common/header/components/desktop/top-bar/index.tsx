import React from "react";
import Search from "../../common/search";
import ProfileDropdown from "./profile-dropdown";
import Divider from "@/components/ui/divider";
import Basket from "../../common/basket";

const TopBar = () => {
  return (
    <div className="h-17 container flex-between">
      <div>
        <Search />
      </div>
      <div className="flex-ic gap-4">
        <ProfileDropdown />
        <Divider />
        <Basket />
      </div>
    </div>
  );
};

export default TopBar;
