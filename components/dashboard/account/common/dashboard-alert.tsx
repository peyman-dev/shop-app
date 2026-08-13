import { AlertCircle } from "lucide-react";

const DashboardAlert = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-16 items-center gap-3 rounded border border-neutral-200 bg-white px-5 text-sm font-Estedad-ExtraBold! text-neutral-950">
      <AlertCircle className="size-5 shrink-0 text-red-500" />
      <span>{children}</span>
    </div>
  );
};

export default DashboardAlert;
