import { Badge } from "@mantine/core";
import React from "react";
import { tv } from "tailwind-variants";

const Label = () => {
  const badgeUI = tv({
    base: "absolute right-4 top-4 shadow-lg z-50",
  });
  return (
    <Badge color="green" className={badgeUI()}>
        محصول جدید
    </Badge>
  );
};

export default Label;
