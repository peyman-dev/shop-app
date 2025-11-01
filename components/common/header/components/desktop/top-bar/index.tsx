import React from "react";
import Search from "../../common/search";
import ProfileDropdown from "./profile-dropdown";

const TopBar = () => {
  return (
    <div className="h-17 container flex-between">
      <div>
        <Search />
      </div>
      <div>
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default TopBar;
