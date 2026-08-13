"use client";
import StaticImageDirector from "@/core/features/static-image-director";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import Magnifier from "react-magnifier";

const PrimaryImage = () => {
  const images = [
    StaticImageDirector("product-1.jpg"),
    StaticImageDirector("hat-1.jpg"),
    StaticImageDirector("hat-2.jpg"),
    StaticImageDirector("hat-3.jpg"),
  ];
  const [selectedImage, setSelectedImage] = React.useState(images[0]);

  return (
    <div className="w-full">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-neutral-100">
        <span className="absolute right-4 top-4 z-10 rounded-sm bg-neutral-700 px-3 py-1 text-xs font-Estedad-Bold! text-white">
          NEW
        </span>
        {/* @ts-expect-error Outdated library types are incompatible with React 18's ReactNode return type */}
        <Magnifier
          className="size-full! h-full! object-cover!"
          src={selectedImage}
          width="100%"
          height="100%"
          mgWidth={260}
          mgHeight={260}
        />
        <button className="absolute bottom-4 left-4 z-10 flex size-11 items-center justify-center rounded-full bg-white text-neutral-500 shadow-lg transition hover:text-primary">
          <Search className="size-5" />
        </button>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            onClick={() => setSelectedImage(image)}
            className="aspect-square overflow-hidden rounded-sm border border-neutral-200 bg-neutral-100 transition hover:border-primary"
          >
            <Image
              src={image}
              alt="تصویر محصول"
              width={120}
              height={120}
              className="size-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PrimaryImage;
