"use client";

import { useRouter } from "next/navigation";

const AuthSubmitButton = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/profile/me")}
      className="h-12 w-full rounded bg-neutral-950 px-5 text-sm font-Estedad-ExtraBold! text-white transition hover:bg-neutral-800"
    >
      {children}
    </button>
  );
};

export default AuthSubmitButton;
