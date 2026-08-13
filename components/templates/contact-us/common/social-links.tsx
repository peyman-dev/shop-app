import Link from "next/link";
import { socialItems } from "../utils/contact-us-data";
import SectionHeading from "./section-heading";

const SocialLinks = () => {
  return (
    <section>
      <SectionHeading title="مدالیتی در شبکه‌های اجتماعی" />
      <div className="flex flex-wrap items-center justify-center gap-3">
        {socialItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              href={item.href}
              target="_blank"
              className="flex h-10 items-center gap-2 rounded border border-neutral-200 px-3 text-sm font-bold text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950"
              key={item.title}
            >
              <Icon className="size-4" />
              {item.value}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SocialLinks;
