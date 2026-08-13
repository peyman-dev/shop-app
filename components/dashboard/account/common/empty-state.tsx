import Link from "next/link";

const EmptyState = ({
  title,
  description,
  actionLabel,
  actionHref,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}) => {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-Estedad-ExtraBold! text-neutral-950 md:text-5xl">
        {title}
      </h1>
      <p className="mt-6 max-w-md text-base font-bold leading-8 text-neutral-800">
        {description}
      </p>
      {actionLabel && actionHref ? (
        <Link
          href={actionHref}
          className="mt-7 flex h-12 items-center justify-center rounded bg-green-600 px-8 text-sm font-Estedad-ExtraBold! text-white transition hover:bg-green-700"
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
};

export default EmptyState;
