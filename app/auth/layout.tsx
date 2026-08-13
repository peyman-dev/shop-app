"use client";
import AuthHeader from "@/components/templates/auth/common/auth-header";
import Link from "next/link";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {

  return (
    <main className="min-h-dvh bg-white">
      <header className="border-b border-neutral-200">
        <div className="bg-black text-white">
          <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5">
            <Link
              href="/"
              className="text-3xl font-Estedad-ExtraBold! tracking-normal"
            >
              MODALITY
            </Link>
            <Link
              href="/products"
              className="hidden text-sm font-Estedad-ExtraBold! transition hover:text-white/70 sm:block"
            >
              بازگشت به فروشگاه
            </Link>
          </div>
        </div>
        <div className="mx-auto flex h-11 w-full max-w-5xl items-center justify-center px-5 text-xs font-bold text-neutral-500 sm:justify-start">
          ورود امن به حساب کاربری مدالیتی
        </div>
      </header>
      <section className="container flex min-h-[calc(100dvh-110px)] items-center justify-center py-10">
      <form
        action="#"
        className="relative w-full max-w-[440px] space-y-8 border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <AuthHeader />
        {children}
      </form>
      </section>
    </main>
  );
};

export default layout;
