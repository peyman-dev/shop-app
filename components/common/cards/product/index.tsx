"use client";
import React, { useState } from "react";
import StaticImageDirector from "@/core/features/static-image-director";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import { tv } from "tailwind-variants";
import { Divider } from "@mantine/core";

const productUI = tv({
  slots: {
    card: "space-y-3",
    header: "h-[285px] w-full rounded-lg overflow-hidden cursor-pointer",
  },
});

const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { card, header } = productUI();

  const mouseEvents = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return (
    <article className={card()} {...mouseEvents}>
      <header className={header()}>
        {isHovered ? (
          <AnimatePresence>
            <motion.img
              className="size-full object-cover"
              src={StaticImageDirector("product-2.png")}
              initial={{ scale: 1 }}
              animate={{ scale: 1.3 }}
              exit={{ scale: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </AnimatePresence>
        ) : (
          <Image
            src={StaticImageDirector("product-1.png")}
            width={244}
            height={285}
            alt="Product"
            className="size-full object-cover"
          />
        )}
      </header>
      <main className="p-3 text-center">
        <h3 className="font-bold text-primary">
          دورس بافت راه راه طوسی مشکی کد ۴۰۸۰۶۶
        </h3>
      </main>
      <Divider variant="dashed" size="md" />
      <footer className="flex-center  pt-2">
        <p>
          {Number(1_260_000).toLocaleString("fa-IR")} تومان
        </p>
      </footer>
    </article>
  );
};

export default ProductCard;
