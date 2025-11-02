"use client"
import React from "react";
import {motion} from 'motion/react'

const StoryCard = () => {
  return (
    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 1}} className="size-[86px] cursor-pointer flex-center bg-linear-to-t rounded-full from-pink-500 to-purple-600">
      <div className="size-[74px] rounded-full  ring-3 ring-white">
        {/* <img src="" alt="" /> */}
      </div>
    </motion.div>
  );
};

export default StoryCard;
