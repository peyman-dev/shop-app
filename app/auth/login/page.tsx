"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { tv } from "tailwind-variants";

const LoginPage = () => {
  const inputCSS = tv({
    slots: {
      label:
        "text-neutral-500 select-none text-xs relative after:content-[':'] after:absolute flex-ic after:-left-1 after:text-neutral-400 after:text-xs",
      input:
        "w-full  h-10 border border-neutral-100 outline-none focus-within:ring-4 duration-150 transition-all ring-blue-500/20 focus-within:border-sky-300/50! rounded-md px-3 mt-2",
    },
  });

  const { label, input } = inputCSS();
  return (
    <>
      <main className="space-y-4">
        <div>
          <label htmlFor="login-identifier" className={label()}>
            شماره موبایل:
          </label>
          <input id="login-identifier" dir="ltr" className={input()} />
        </div>
        <div>
          <label htmlFor="login-password" className={label()}>
            گذرواژه:
          </label>
          <input
            id="login-password"
            type="password"
            dir="ltr"
            className={input()}
          />
        </div>
      </main>
      <footer>
        <Button
          className="w-full h-10 cursor-pointer bg-blue-500 hover:bg-blue-400"
          variant="default"
        >
          ورود
        </Button>
      </footer>
    </>
  );
};

export default LoginPage;
