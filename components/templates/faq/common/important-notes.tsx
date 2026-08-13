import { AlertCircle } from "lucide-react";
import { importantNotes } from "../utils/faq-data";
import ContentSection from "./content-section";

const ImportantNotes = () => {
  return (
    <ContentSection title="پیشاپیش از اینکه محدودیت‌های ما را درک می‌کنید ممنونیم">
      <div className="rounded border border-neutral-200 bg-neutral-50 p-5">
        <ul className="space-y-3 text-sm leading-8 text-neutral-700">
          {importantNotes.map((item) => (
            <li className="flex gap-2" key={item}>
              <AlertCircle className="mt-1 size-4 shrink-0 text-neutral-950" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </ContentSection>
  );
};

export default ImportantNotes;
