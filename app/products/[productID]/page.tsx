import Content from "@/components/templates/product/content";
import DeliveryInfo from "@/components/templates/product/delivery-info";
import Gallery from "@/components/templates/product/gallery";
import StickyPurchaseBar from "@/components/templates/product/sticky-purchase-bar";
import React from "react";

const page = () => {
  return (
    <>
      <main
        id="product-page"
        className="container grid max-w-5xl grid-cols-1 gap-5 py-6 pb-24 md:grid-cols-2"
      >
        <Gallery />
        <Content />
      </main>
      <DeliveryInfo />
      <StickyPurchaseBar />
    </>
  );
};

export default page;
