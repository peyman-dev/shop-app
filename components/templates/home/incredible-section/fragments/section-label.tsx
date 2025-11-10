import StaticImageDirector from "@/core/features/static-image-director";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const SectionLabel = () => {
  return (
      <div className="mx-5 h-full w-25 flex-col-center justify-between ">
        <Image
          width={88}
          height={88}
          src={StaticImageDirector("Amazings.svg")}
          alt="بهترین ها"
        />
             <Image
          width={77}
          height={77}
          src={StaticImageDirector("AmazingOfferFace.svg")}
          alt="بهترین ها"
        />
        <Link href="/products?event=incredible-offer" className="flex-center gap-0.5 text-sm font-YekanBakh-Bold text-white">
          مشاهده همه
          <ChevronLeft className="size-4"/>
        </Link>
      </div>
  );
};

export default SectionLabel;
