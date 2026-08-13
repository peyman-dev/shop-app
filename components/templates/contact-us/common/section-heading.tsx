const SectionHeading = ({ title }: { title: string }) => {
  return (
    <div className="mb-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-neutral-200" />
      <h2 className="shrink-0 font-Estedad-ExtraBold! text-neutral-950">
        {title}
      </h2>
      <div className="h-px flex-1 bg-neutral-200" />
    </div>
  );
};

export default SectionHeading;
