"use client";
import { CopyCheck, Share } from "lucide-react";
import React from "react";
import { Tooltip } from "@mantine/core";
import { tv } from "tailwind-variants";
import clsx from "clsx";

const ShareAction = () => {
  const [isCopied, setIsCopied] = React.useState(false);
  const shareUI = tv({
    base: "transition-all duration-150",
    slots: {
      isCopied: "bg-emerald-500/15! text-emerald-500! ",
    },
  });

  const handleCopy = () => {
    console.log(window.location.href);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
      return null;
    }, 1250);
  };

  const tooltipContent = isCopied ? "کپی شد" : "اشتراک گذاری";
  const { isCopied: isCopiedCSS } = shareUI();

  return (
    <Tooltip label={tooltipContent} withArrow>
      <button
        onClick={handleCopy}
        className={clsx(isCopied ? isCopiedCSS() : null)}
      >
        {isCopied ? <CopyCheck /> : <Share className="size-5" />}
      </button>
    </Tooltip>
  );
};

export default ShareAction;
