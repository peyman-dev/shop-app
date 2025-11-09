import { Blockquote } from "@mantine/core";
import React from "react";

const NoticeDescription = () => {
  return (
    <div>
      <Blockquote className="p-3! text-xs text-yellow-700!" color="yellow">
        به دلیل نوسانات ارزی، لغو سفارش برای این کالا (کالای سفارشی) ، به دلیل
        انصراف از خرید میسر نمی‌باشد.
      </Blockquote>
    </div>
  );
};

export default NoticeDescription;
