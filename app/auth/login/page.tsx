"use client"
import React from "react";
import { tv } from "tailwind-variants";

const LoginPage = () => {
  const input = tv({
    slots: {
      label:
        "text-neutral-500 select-none text-xs relative after:content-[':'] after:absolute flex-ic after:-left-1 after:text-neutral-400 after:text-xs",
    },
  });

  const { label } = input();
  return (
    <main className="space-y-4">
      <div>
        <label htmlFor="login-phoneNumber" className={label()}>
          شماره موبایل:
        </label>
        <input id="login-phoneNumber" dir="ltr" className="w-full  h-10 border border-neutral-300 rounded-md px-3 mt-2"/>
      </div>
    </main>
  );
};

export default LoginPage;
