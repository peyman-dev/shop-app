"use client";
import { Button } from "@/components/ui/button";
import { Loader2, LogIn } from "lucide-react";
import Link from "next/link";

const ProfileDropdown = () => {
  return (
    <div>
      <Link
        href={"/auth/login"}
        className="h-10 px-[17px] hover:bg-primary! bg-white hover:text-text-inverted font-bold! text-xs border border-[#E0E0E2] rounded-lg cursor-pointer duration-150 flex-center gap-2"
      >
          <LogIn className="size-4" />
          <span>ورود | ثبت نام</span>
      </Link>
    </div>
  );
};

export default ProfileDropdown;
