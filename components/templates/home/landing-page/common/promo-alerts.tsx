import { alertMessages } from "../utils/landing-data";
import React from "react";

const PromoAlerts = () => {
  return (
    <section className="container max-w-6xl space-y-2 py-10">
      {alertMessages.map((item) => (
        <p
          key={item.text}
          className={`${item.className} px-4 py-2 text-center text-xs leading-6 md:text-sm`}
        >
          {item.text}
        </p>
      ))}
    </section>
  );
};

export default PromoAlerts;
