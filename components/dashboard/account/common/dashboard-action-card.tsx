import Link from "next/link";
import { LucideIcon } from "lucide-react";

const DashboardActionCard = ({
  label,
  href,
  icon: Icon,
  color,
}: {
  label: string;
  href: string;
  icon: LucideIcon;
  color: string;
}) => {
  return (
    <Link
      href={href}
      className="flex min-h-20 items-center justify-between rounded border border-neutral-200 bg-white p-4 transition hover:border-neutral-950"
    >
      <span className="font-Estedad-ExtraBold! text-neutral-950">{label}</span>
      <span className={`flex size-11 items-center justify-center rounded ${color}`}>
        <Icon className="size-6 text-white" />
      </span>
    </Link>
  );
};

export default DashboardActionCard;
