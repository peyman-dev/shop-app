import StaticImageDirector from "@/core/features/static-image-director";
import Image from "next/image";
import React from "react";
import { tv } from "tailwind-variants";

const IncredibleCard = () => {
  const cardUI = tv({
    slots: {
      base: "w-full min-h-max h-full *:w-[90%] *:mx-auto py-3 bg-white flex-col-between relative",
      header: "flex-center"
    },
  });

  const { base, header } = cardUI();

  return (
    <article className={base()}>
      <header className={header()}>
        <Image 
          alt="Product"
          src={StaticImageDirector("product-2.png")}
          width={132}
          height={132}
        />
      </header>
      <main>
        <h3 className="text-sm text-slate-600 line-clamp-2 leading-6" >
        لپ تاپ 16 اینچی لنوو مدل Legion 5 16IRX9-i7 14650HX 16GB 1SSD RTX4050
        </h3>
      </main>
      <footer className="flex items-center justify-end text-sm font-Estedad-ExtraBold! text-zinc-700">
        {Number(1_760_000).toLocaleString("fa-IR")} تومان
      </footer>
    </article>
  );
};

export default IncredibleCard;
