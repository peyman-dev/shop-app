"use client";
import { dashboardMenuItems } from "@/components/dashboard/account/utils/dashboard-data";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";

const ProfileDropdown = () => {
  return (
    <div className="group relative">
      <Link
        href={"/profile/me"}
        className="h-10 px-[17px] text-xs font-bold! text-white transition duration-150 flex-center gap-2 hover:text-white/70"
      >
        <CircleUserRound className="size-4" />
        <span>مشاهده حساب کاربری</span>
      </Link>
      <div className="invisible absolute left-0 top-full z-50 w-60 translate-y-2 border border-neutral-200 bg-white text-neutral-950 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
          <span className="font-Estedad-ExtraBold! text-sm">
            خوش آمدید :)
          </span>
          <span className="flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-red-500">
            <CircleUserRound className="size-6" />
          </span>
        </div>
        <nav>
          {dashboardMenuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                href={item.href}
                className="flex min-h-10 items-center justify-between gap-3 border-b border-dashed border-neutral-200 px-4 text-sm font-bold text-neutral-800 transition last:border-b-0 hover:bg-neutral-50"
                key={item.href}
              >
                <span>{item.label}</span>
                <Icon className="size-4 text-neutral-500" />
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default ProfileDropdown;
