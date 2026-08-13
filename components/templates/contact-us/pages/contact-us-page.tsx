import ContactCard from "../common/contact-card";
import CertificationPanel from "../common/certification-panel";
import ContactInfo from "../common/contact-info";
import SocialLinks from "../common/social-links";
import SupportHours from "../common/support-hours";
import { contactCards } from "../utils/contact-us-data";

const ContactUsPage = () => {
  return (
    <main className="bg-white">
      <section className="container min-h-[330px] border-b border-neutral-100 pt-16 md:min-h-[430px]" />

      <section className="container max-w-5xl py-12 md:py-16">
        <div className="mb-10 flex items-center gap-2 text-sm text-neutral-500">
          <span>خانه</span>
          <span>/</span>
          <span className="font-bold text-neutral-950">تماس با ما</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1px_1fr]">
          <div className="space-y-10">
            <ContactInfo />
            <div className="grid gap-5 md:grid-cols-2">
              {contactCards.map((item) => (
                <ContactCard {...item} key={item.title} />
              ))}
            </div>
            <SocialLinks />
          </div>

          <div className="hidden bg-neutral-200 lg:block" />

          <div className="space-y-10">
            <SupportHours />
            <CertificationPanel />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;
