import { MessageCircle } from "lucide-react";
import { supportInfo } from "../utils/faq-data";

const SupportBox = () => {
  return (
    <aside className="rounded border border-neutral-200 bg-white p-5">
      <div className="mb-5 flex items-center gap-2">
        <MessageCircle className="size-5 text-neutral-950" />
        <h2 className="font-Estedad-ExtraBold! text-neutral-950">
          ارتباط با پشتیبانی
        </h2>
      </div>
      <div className="space-y-4">
        {supportInfo.map((item) => (
          <div className="text-sm leading-7" key={item.title}>
            <p className="font-bold text-neutral-950">{item.title}</p>
            <p className="text-neutral-600">{item.value}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SupportBox;
