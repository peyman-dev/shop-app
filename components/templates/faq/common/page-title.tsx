import { FileText } from "lucide-react";

const PageTitle = () => {
  return (
    <section className="border-b border-neutral-100 bg-white py-8">
      <div className="container max-w-5xl">
        <div className="flex items-center gap-3">
          <FileText className="size-6 text-neutral-950" />
          <div>
            <h1 className="font-Estedad-ExtraBold! text-xl text-neutral-950">
              قوانین تعویض
            </h1>
            <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
              <span>صفحه اصلی</span>
              <span>/</span>
              <span className="font-bold text-neutral-950">قوانین تعویض</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
