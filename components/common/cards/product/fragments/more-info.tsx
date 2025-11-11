import React from "react";
import { tv } from "tailwind-variants";
import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";

const MoreInfo = () => {
  const styles = tv({
    base: "absolute gap-1 whitespace-nowrap overflow-hidden py-2 bottom-0 right-0 z-60 w-full flex-center text-white bg-primary",
  });
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 60, opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
      className={styles()}
    >
      <ShoppingBag className="size-4" />
      <span>جزئیات بیشتر</span>
    </motion.div>
  );
};

export default MoreInfo;
