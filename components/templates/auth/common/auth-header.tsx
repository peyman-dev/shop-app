"use client";
import { usePathname } from "next/navigation";
import React from "react";

const AuthHeader = () => {
  const path = usePathname();
  const isLogin = path.includes("login");

  switch (isLogin) {
    case true:
      return (
        <header className="flex-center flex-col gap-1">
          <h1 className="text-xl font-black!">خوش برگشتید.</h1>
          <p className="text-sm text-neutral-500">
            لطفا جهت ادامه مشخصات خود را وارد کنید.
          </p>
        </header>
      );
    case false:
      return (
        <header className="flex-center flex-col gap-3">
          <h1 className="text-xl font-black!">خوش آمدید</h1>
          <p className="text-sm text-neutral-500">
        لطفا جهت استفاده از خدمات وبسایت ثبت‌نام بفرمائید.
          </p>
        </header>
      );
  }
};

export default AuthHeader;
