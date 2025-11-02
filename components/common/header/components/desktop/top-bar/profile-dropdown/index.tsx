import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import React from "react";

const ProfileDropdown = () => {
  return (
    <div>
      <Button variant="outline" color="white" className="h-10 px-[17px] text-xs border border-[#E0E0E2] rounded-lg cursor-pointer duration-150 hover:bg-neutral-50 flex-center gap-2">
        <LogIn className="size-4" />
        <span>ورود | ثبت نام</span>
      </Button>

    </div>
  );
};

export default ProfileDropdown;
