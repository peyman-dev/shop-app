import { addressItems, contactChannels } from "../utils/contact-us-data";
import SectionHeading from "./section-heading";

const ContactInfo = () => {
  return (
    <section>
      <SectionHeading title="ارتباط با مدالیتی" />
      <div className="grid gap-5 md:grid-cols-2">
        {contactChannels.map((item) => {
          const Icon = item.icon;

          return (
            <div className="flex items-center gap-3 text-sm" key={item.title}>
              <Icon className="size-6 text-neutral-300" />
              <p className="leading-7 text-neutral-600">
                <span className="font-bold text-neutral-950">{item.title}: </span>
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-10 space-y-5">
        {addressItems.map((item) => (
          <div className="text-sm leading-8 text-neutral-700" key={item.title}>
            <span className="font-bold text-neutral-950">{item.title}: </span>
            {item.value}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
