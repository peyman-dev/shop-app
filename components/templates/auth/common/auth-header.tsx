"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AuthHeader = () => {
  const path = usePathname();
  const isLogin = path.includes("login");
  const BackButton = (
    <Link href={"/"} className="absolute right-6 top-6">
      <ArrowRight />
    </Link>
  );

  switch (isLogin) {
    case true:
      return (
        <header className="flex-center flex-col gap-1">
          {BackButton}
          <h1 className="text-xl font-black!">خوش برگشتید.</h1>
          <p className="text-sm text-neutral-500">
            لطفا شماره موبایل یا ایمیل خود را وارد کنید
          </p>
        </header>
      );
    case false:
      return (
        <header className="flex-center flex-col gap-1">
          {BackButton}
          <h1 className="text-xl font-black!">خوش آمدید</h1>
          <p className="text-sm text-neutral-500">
            لطفا جهت استفاده از خدمات وبسایت ثبت‌نام بفرمائید.
          </p>
        </header>
      );
  }
};

export default AuthHeader;
