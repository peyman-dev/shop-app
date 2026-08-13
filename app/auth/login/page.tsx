"use client";
import AuthField from "@/components/templates/auth/common/auth-field";
import AuthSubmitButton from "@/components/templates/auth/common/auth-submit-button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <main className="space-y-5">
        <AuthField
          id="login-identifier"
          label="شماره موبایل یا ایمیل"
          placeholder="مثلا ۰۹۱۲۱۲۳۴۵۶۷"
        />
        <AuthField id="login-password" label="گذرواژه" type="password" />
        <div className="flex items-center justify-between gap-3 text-xs font-bold">
          <label className="flex items-center gap-2 text-neutral-600">
            <input type="checkbox" className="size-4 accent-neutral-950" />
            مرا به خاطر بسپار
          </label>
          <Link href="/auth/register" className="text-neutral-950 underline">
            ساخت حساب جدید
          </Link>
        </div>
      </main>
      <footer>
        <AuthSubmitButton>ورود به حساب کاربری</AuthSubmitButton>
        <p className="mt-5 text-center text-xs leading-6 text-neutral-500">
          ورود شما به معنی پذیرش قوانین فروشگاه و سیاست حریم خصوصی است.
        </p>
      </footer>
    </>
  );
};

export default LoginPage;
