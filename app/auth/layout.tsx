"use client"
import AuthHeader from "@/components/templates/auth/common/auth-header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-dvw bg-[#ffffff] h-[calc(100dvh-140px)] flex-center">
      <form action="#" className="bg-white space-y-5 w-[420px] rounded-md shadow border border-neutral-200 p-4" onSubmit={(e) => e.preventDefault()}>
        <AuthHeader />
        {children}
      </form>
    </main>
  );
};

export default layout;
