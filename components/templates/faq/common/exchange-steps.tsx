import { CheckCircle2 } from "lucide-react";
import { exchangeSteps } from "../utils/faq-data";
import ContentSection from "./content-section";

const ExchangeSteps = () => {
  return (
    <ContentSection title="تعویض فقط تا ۴۸ ساعت بعد از تحویل مرسوله امکان‌پذیر است">
      <div className="space-y-7">
        {exchangeSteps.map((step, index) => (
          <article className="text-sm leading-8 text-neutral-700" key={step.title}>
            <h3 className="mb-3 font-Estedad-ExtraBold! text-neutral-950">
              {index + 1}- {step.title}
            </h3>
            <ul className="space-y-2">
              {step.items.map((item) => (
                <li className="flex gap-2" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-neutral-950" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </ContentSection>
  );
};

export default ExchangeSteps;
