import SectionHeading from "./section-heading";

const CertificationPanel = () => {
  return (
    <section>
      <SectionHeading title="مجوزها و گواهینامه‌ها" />
      <div className="mx-auto max-w-xs border border-neutral-300 bg-white p-3">
        <div className="aspect-[1.55] border border-neutral-200 bg-neutral-50 p-4">
          <div className="flex h-full flex-col justify-between text-xs text-neutral-500">
            <div className="flex items-start justify-between">
              <div className="size-14 border border-neutral-300 bg-white" />
              <div className="space-y-2 text-left">
                <div className="h-2 w-20 bg-neutral-300" />
                <div className="h-2 w-16 bg-neutral-200" />
                <div className="h-2 w-24 bg-neutral-200" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-neutral-200" />
              <div className="h-2 w-10/12 bg-neutral-200" />
              <div className="h-2 w-8/12 bg-neutral-200" />
            </div>
            <p className="text-center font-bold text-neutral-700">
              گواهی اعتبار فروشگاه
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationPanel;
