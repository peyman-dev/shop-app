import { ReactNode } from "react";

export const arrayMap = (length: number, component: ReactNode) =>
  Array.from({ length }).map(() => component);
