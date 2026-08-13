import { Alert } from "@mantine/core";
import React from "react";

const Notification = () => {
  return (
    <Alert color="green" variant="light" className="text-sm! leading-7 font-Estedad-Bold!">
      با اطمینان خرید کنید! تصویر این محصول توسط تیم تولید محتوای مدالیتی از
      کالای اصلی عکاسی شده و مدالیتی مطابقت تصویر و محصول ارسالی را تضمین
      می‌نماید.
    </Alert>
  );
};

export default Notification;
