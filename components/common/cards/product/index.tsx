"use client";
import React, { useState } from "react";
import StaticImageDirector from "@/core/features/static-image-director";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import { tv } from "tailwind-variants";
import { Divider } from "@mantine/core";
import Label from "./fragments/label";
import { ShoppingBag } from "lucide-react";
import MoreInfo from "./fragments/more-info";
import Link from "next/link";

const productUI = tv({
  slots: {
    card: "space-y-1 relative!",
    header:
      "h-[285px] relative w-full bg-black rounded-lg overflow-hidden cursor-pointer",
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
      <Label />
      <Link className="size-full right-0 top-0 absolute z-40" href={`/products/product`}/>
      <header className={header()}>
        {isHovered ? (
          <AnimatePresence>
            <motion.img
              className="size-full object-cover"
              src={StaticImageDirector("product-2.png")}
              initial={{ scale: 1, }}
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
        <AnimatePresence>
          {isHovered && (
            <MoreInfo />
          )}
        </AnimatePresence>
      </header>
      <main className="px-3 pt-1 text-center">
        <h3 className="font-bold text-primary">
          دورس بافت راه راه طوسی مشکی کد ۴۰۸۰۶۶
        </h3>
      </main>
      <Divider variant="dashed" size="md" />
      <footer className="flex-center  pt-2">
        <p className="font-medium!">
          {Number(1_260_000).toLocaleString("fa-IR")}
          تومان
        </p>
      </footer>
    </article>
  );
};

export default ProductCard;
