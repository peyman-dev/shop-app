import { LucideIcon } from "lucide-react";

const ContactCard = ({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: LucideIcon;
}) => {
  return (
    <article className="flex gap-4 border-b border-neutral-100 pb-5 last:border-b-0">
      <div className="flex size-12 shrink-0 items-center justify-center rounded border border-neutral-200 bg-neutral-50 text-neutral-400">
        <Icon className="size-6" />
      </div>
      <div>
        <h3 className="font-Estedad-ExtraBold! text-sm text-neutral-950">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-7 text-neutral-600">{value}</p>
      </div>
    </article>
  );
};

export default ContactCard;
