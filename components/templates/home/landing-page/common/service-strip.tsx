import { serviceItems } from "../utils/landing-data";
import React from "react";

const ServiceStrip = () => {
  return (
    <section className="border-y border-neutral-200 bg-white lg:h-24 *:h-full">
      <div className="container divide-y divide-x *:nth-[2]:border-l-0! lg:*:nth-[2]:border-l-1! lg:divide-x grid max-w-6xl grid-cols-2 *:h-full gap-px md:grid-cols-4">
        {serviceItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-center gap-3 px-3 py-4 text-center md:text-right"
            >
              <Icon className="size-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-Estedad-Bold! text-sm text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-primary-light/65">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceStrip;
