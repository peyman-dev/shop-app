"use client";
import AuthHeader from "@/components/templates/auth/common/auth-header";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {

  return (
    <main className="w-dvw bg-[#ffffff] h-[calc(100dvh-140px)] flex-center">
      <form
        action="#"
        className="bg-white relative! space-y-8 w-[400px]! max-h-max rounded-md shadow border border-neutral-200 p-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <AuthHeader />
        {children}
      </form>
    </main>
  );
};

export default layout;
