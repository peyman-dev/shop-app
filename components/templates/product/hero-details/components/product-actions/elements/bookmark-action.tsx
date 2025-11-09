import { Tooltip } from "@mantine/core";
import { Heart } from "lucide-react";
import React from "react";
import { tv } from "tailwind-variants";

const BookmarkAction = () => {
  const bookmarkUI = tv({
    slots: {
      buttonUI: "transition-all duration-150",
    },
  });

  const { buttonUI } = bookmarkUI();

  return (
    <Tooltip label="افزودن به علاقه‌مندی">
      <button className={buttonUI()}>
        <Heart className="size-5" />
      </button>
    </Tooltip>
  );
};

export default BookmarkAction;
