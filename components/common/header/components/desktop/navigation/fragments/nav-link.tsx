"use client";
import { INavLinkProps } from "@/components/common/header/features/types";
import Link from "next/link";
import React from "react";

const NavLink = (props: INavLinkProps) => {
  return (
    <Link
      href={props.href}
      className='px-2 relative text-neutral-600 font-Estedad-Bold before:absolute before:-bottom-2.5 before:right-0 before:content-["_"] before:transition-all before:duration-400 before:bg-primary-dark! flex-ic gap-2 hover:before:w-full before:h-px before:w-0'
    >
        <span>
            {props.icon}
        </span>
      <span>{props.label}</span>
    </Link>
  );
};

export default NavLink;
