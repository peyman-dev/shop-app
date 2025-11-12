import { Alert } from "@mantine/core";
import React from "react";

const Notification = () => {
  return (
    <Alert color="green" variant="light" className="text-xl! font-Estedad-Bold!">
      با اطمینان خرید کنید! تصویر این محصول توسط تیم تولید محتوای نیوشین از
      کالای اصلی عکاسی شده و نیوشین مطابقت تصویر و محصول ارسالی را تضمین
      می‌نماید.
    </Alert>
  );
};

export default Notification;
