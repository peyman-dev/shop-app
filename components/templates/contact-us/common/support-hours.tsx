import { branchHours, supportHours } from "../utils/contact-us-data";
import SectionHeading from "./section-heading";

const SupportHours = () => {
  return (
    <aside className="space-y-8">
      <section>
        <SectionHeading title="ساعات کاری بخش پشتیبانی" />
        <div className="space-y-4 text-sm leading-8 text-neutral-700">
          <p>
            کاربران و مشتریان محترم فروشگاه اینترنتی مدالیتی می‌توانند در
            روزهای کاری از طریق تلفن، تلگرام، واتساپ و اینستاگرام با ما در
            ارتباط باشند.
          </p>
          <ul className="space-y-2">
            {supportHours.map((item) => (
              <li className="font-bold text-neutral-950" key={item}>
                {item}
              </li>
            ))}
          </ul>
          <p>
            لطفا در خارج از این ساعات، پیام خود را ارسال کنید تا در اولین زمان
            کاری پاسخ داده شود.
          </p>
        </div>
      </section>

      <section>
        <SectionHeading title="ساعات کاری شعبه حضوری" />
        <div className="space-y-5 text-center text-sm text-neutral-700">
          {branchHours.map((item) => (
            <div key={item.day}>
              <p className="font-Estedad-ExtraBold! text-neutral-950">
                {item.day}:
              </p>
              <div className="mt-2 space-y-1">
                {item.hours.map((hour) => (
                  <p key={hour}>{hour}</p>
                ))}
              </div>
            </div>
          ))}
          <p className="font-bold text-neutral-950">
            شنبه‌ها تعطیل می‌باشد.
          </p>
        </div>
      </section>
    </aside>
  );
};

export default SupportHours;
