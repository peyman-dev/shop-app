import Content from "@/components/templates/product/content";
import Gallery from "@/components/templates/product/gallery";
import React from "react";

const page = () => {
  return (
    <main id="product-page" className="container grid grid-cols-2 gap-5">
      <Gallery />
      <Content />
    </main>
  );
};

export default page;
