"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardMenuItems } from "../utils/dashboard-data";

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full border-neutral-200 lg:w-[280px] lg:border-l lg:pl-8">
      <h2 className="mb-5 border-b border-neutral-200 pb-5 text-lg font-Estedad-ExtraBold! text-neutral-950">
        حساب کاربری من
      </h2>
      <nav className="overflow-hidden border border-neutral-200 lg:border-0">
        {dashboardMenuItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === `/profile/me`
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <Link
              href={item.href}
              className={`flex min-h-12 items-center justify-between gap-3 border-b border-dashed border-neutral-200 px-4 text-sm font-Estedad-ExtraBold! transition last:border-b-0 ${
                isActive
                  ? "border-l-2 border-l-red-500 text-neutral-950"
                  : "text-neutral-800 hover:bg-neutral-50"
              }`}
              key={item.href}
            >
              <span>{item.label}</span>
              <Icon className="size-4 text-neutral-500" />
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
