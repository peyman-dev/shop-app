"use client";
import { Button } from "@/components/ui/button";
import { Loader2, LogIn } from "lucide-react";
import { redirect, RedirectType } from "next/navigation";
import React, { useState, useTransition } from "react";

const ProfileDropdown = () => {
  const [isPending, startTransition] = useTransition();

  const redirector = () => {
    startTransition(async () => {
      await redirect("/auth/login?redirect=/", RedirectType.push);
    });
  };
  return (
    <div>
      <Button
        onClick={redirector}
        variant="outline"
        color="white"
        className="h-10 px-[17px] text-xs border border-[#E0E0E2] rounded-lg cursor-pointer duration-150 hover:bg-neutral-50 flex-center gap-2"
      >
        {isPending ? (
          <>
            <Loader2 className="size-4.5 animate-spin" />
            <span>درحال انتقال ..</span>
          </>
        ) : (
          <>
            <LogIn className="size-4" />
            <span>ورود | ثبت نام</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default ProfileDropdown;
