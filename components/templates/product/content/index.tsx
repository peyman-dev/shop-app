import React from "react";
import Breadcrumb from "./fragments/breadcrumb/";
import Title from "./fragments/title";
import Price from "./fragments/price";
import Colors from "./fragments/colors";
import Quantity from "./fragments/quantity";
import AddToCart from "./fragments/add-to-cart";
import Notification from "./fragments/notification";

const Content = () => {
  return (
    <section>
      <Breadcrumb />

      <div className="mt-10 space-y-10">
        <div className="space-y-5">
          <Title />
          <Price />
        </div>
        <Colors />

        <div className="flex-ic gap-6">
          <Quantity />
          <AddToCart />
        </div>
        <Notification />
      </div>
    </section>
  );
};

export default Content;
