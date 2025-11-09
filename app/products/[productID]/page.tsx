import HeroDetails from "@/components/templates/product/hero-details";
import Sidebar from "@/components/templates/product/sidebar";
import React from "react";

const page = () => {
  return (
    <main
      id="product-details"
      className="grid grid-cols-8 gap-5 *:w-full  container"
    >
      <div id="content" className="*:w-full col-span-6 space-y-5 *:p-5  *:rounded-lg *:border *:border-neutral-200">
      <HeroDetails />
      <div>1*4</div>
      <div>1*4</div>
      <div>1*4</div>
      <div>1*4</div>
      <div>1*4</div>
      </div>
      <Sidebar />
    </main>
  );
};

export default page;
