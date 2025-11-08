"use client"
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-dvw bg-[#ffffff] h-[calc(100dvh-140px)] flex-center">
      <form action="#" className="bg-white w-[420px] rounded-md shadow border border-neutral-200 p-4" onSubmit={(e) => e.preventDefault()}>
        {children}
      </form>
    </main>
  );
};

export default layout;
