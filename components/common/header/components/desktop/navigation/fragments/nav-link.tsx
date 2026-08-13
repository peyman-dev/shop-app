"use client";
import { INavLinkProps } from "@/components/common/header/features/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = (props: INavLinkProps) => {
  const pathname = usePathname();
  const isActive =
    props.href === "/" ? pathname === "/" : pathname.startsWith(props.href.split("?")[0]);

  return (
    <Link
      href={props.href}
      className={clsx(
        'relative flex h-12 shrink-0 items-center gap-2 px-3 font-Estedad-Bold text-sm text-neutral-700 transition before:absolute before:right-0 before:-bottom-px before:h-px before:bg-primary-dark before:content-["_"] before:transition-all before:duration-300 hover:text-primary hover:before:w-full',
        isActive ? "text-primary before:w-full" : "before:w-0"
      )}
    >
      {props.icon ? <span>{props.icon}</span> : null}
      <span>{props.label}</span>
    </Link>
  );
};

export default NavLink;
