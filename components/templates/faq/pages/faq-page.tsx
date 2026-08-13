import ContentSection from "../common/content-section";
import ExchangeSteps from "../common/exchange-steps";
import ImportantNotes from "../common/important-notes";
import PageTitle from "../common/page-title";
import SupportBox from "../common/support-box";
import { exchangeIntro } from "../utils/faq-data";

const FaqPage = () => {
  return (
    <main className="bg-white">
      <PageTitle />
      <section className="container max-w-5xl py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div className="text-center">
            <ContentSection title="شرایط کلی تعویض">
              <div className="mx-auto max-w-3xl space-y-4 text-sm leading-9 text-neutral-700">
                {exchangeIntro.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </ContentSection>
            <ExchangeSteps />
            <ImportantNotes />
            <ContentSection title="قبل از خرید مطالعه فرمایید">
              <p className="mx-auto max-w-3xl text-sm leading-9 text-neutral-700">
                قوانین تعویض در تمامی صفحات سایت به‌صورت واضح نمایش داده شده
                است. بنابراین پیش از خرید، حتما شرایط تعویض، ارسال و محدودیت‌ها
                را مطالعه کنید.
              </p>
            </ContentSection>
          </div>
          <SupportBox />
        </div>
      </section>
    </main>
  );
};

export default FaqPage;
