import { promoStats } from "../utils/landing-data";
import React from "react";

const PromoStats = () => {
  return (
    <section className="container max-w-6xl py-8">
      <div className="grid gap-3 md:grid-cols-3">
        {promoStats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-center gap-4 bg-primary px-5 py-6 text-white"
            >
              <Icon className="size-7 text-white" />
              <div>
                <p className="text-xs text-white/55">{item.title}</p>
                <strong className="mt-1 block font-Estedad-ExtraBold! text-white">
                  {item.value}
                </strong>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PromoStats;
