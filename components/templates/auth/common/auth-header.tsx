"use client";
import { ArrowRight, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AuthHeader = () => {
  const path = usePathname();
  const isLogin = path.includes("login");
  const BackButton = (
    <Link
      href={"/"}
      aria-label="بازگشت به صفحه اصلی"
      className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-950 transition hover:border-neutral-950"
    >
      <ArrowRight className="size-5" />
    </Link>
  );

  switch (isLogin) {
    case true:
      return (
        <header className="flex-center flex-col gap-3 pt-8 text-center">
          {BackButton}
          <span className="flex size-14 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-950">
            <UserRound className="size-7" />
          </span>
          <h1 className="text-2xl font-Estedad-ExtraBold! text-neutral-950">
            خوش برگشتید.
          </h1>
          <p className="max-w-xs text-sm leading-7 text-neutral-500">
            برای مشاهده حساب کاربری، شماره موبایل یا ایمیل خود را وارد کنید.
          </p>
        </header>
      );
    case false:
      return (
        <header className="flex-center flex-col gap-3 pt-8 text-center">
          {BackButton}
          <span className="flex size-14 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-950">
            <UserRound className="size-7" />
          </span>
          <h1 className="text-2xl font-Estedad-ExtraBold! text-neutral-950">
            ساخت حساب کاربری
          </h1>
          <p className="max-w-xs text-sm leading-7 text-neutral-500">
            برای خرید سریع‌تر و پیگیری سفارش‌ها اطلاعات خود را ثبت کنید.
          </p>
        </header>
      );
  }
};

export default AuthHeader;
