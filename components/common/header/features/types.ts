import type { ReactNode } from "react";

export interface INavLinkProps {
  href: string;
  label: string;
  icon?: ReactNode;
}

export type HeaderNavItem = {
  href: string;
  label: string;
};

export type HeaderCategoryItem = {
  href: string;
  label: string;
  value: string;
};
