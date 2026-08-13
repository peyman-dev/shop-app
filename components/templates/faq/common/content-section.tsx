import type { ReactNode } from "react";

const ContentSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section className="border-b border-neutral-100 py-7 last:border-b-0">
      <h2 className="mb-5 text-center font-Estedad-ExtraBold! text-neutral-950">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default ContentSection;
