"use client";
import StaticImageDirector from "@/core/features/static-image-director";
import React from "react";
import Magnifier from "react-magnifier";

const PrimaryImage = () => {
  return (
    <div className="h-[734px] w-full relative ">
      {/* @ts-expect-error Outdated library types are incompatible with React 18's ReactNode return type */}
      <Magnifier
        className="size-full! h-full! object-cover!"
        src={StaticImageDirector("product-1.png")}
        width={400}
        height={734}
        mgWidth={400}
        mgHeight={400}
      />
    </div>
  );
};

export default PrimaryImage;