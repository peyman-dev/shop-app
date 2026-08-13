import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Smartphone,
} from "lucide-react";

export const contactChannels = [
  {
    title: "ایمیل پشتیبانی",
    value: "support@modality.ir",
    icon: Mail,
  },
  {
    title: "ایمیل مدیریت",
    value: "m.zendegol@gmail.com",
    icon: Mail,
  },
  {
    title: "تلفن دفتر",
    value: "۰۲۱-۵۵۵۰۴۳۸۵",
    icon: Phone,
  },
  {
    title: "پشتیبانی تلگرام",
    value: "۰۹۳۰۹۵۰۶۷۸",
    icon: Smartphone,
  },
  {
    title: "اکانت پشتیبانی",
    value: "modalitysupport@",
    icon: MessageCircle,
  },
];

export const addressItems = [
  {
    title: "نشانی انبار جهت گرفتن پیک",
    value:
      "تهران، اندیشه، فاز ۱، ابتدای بلوار نیلوفر، کوچه گلریز، پلاک ۲۶ واحد ۱",
  },
  {
    title: "شعبه حضوری",
    value:
      "تهران، اندیشه، فاز ۱، بلوار آزادی، مجتمع تجاری نگارستان، بلوک A، طبقه ۲، پلاک ۸",
  },
  {
    title: "نشانی دفتر",
    value:
      "البرز، فردیس، شهرک راه آهن، خیابان بنفشه جنوبی، پلاک ۳۰۴ واحد ۱",
  },
];

export const supportHours = [
  "شنبه تا چهارشنبه از ساعت ۱۱ تا ۲۱",
  "پنجشنبه از ساعت ۱۱ تا ۱۶",
  "جمعه‌ها و روزهای تعطیل پاسخگویی انجام نمی‌شود",
];

export const branchHours = [
  {
    day: "یکشنبه تا پنجشنبه",
    hours: ["۱۱:۰۰ تا ۱۴:۰۰", "۱۷:۰۰ تا ۲۱:۳۰"],
  },
  {
    day: "جمعه‌ها",
    hours: ["۱۶:۳۰ تا ۲۱:۳۰"],
  },
];

export const socialItems = [
  {
    title: "اینستاگرام",
    value: "modality.style",
    href: "https://instagram.com/modality.style",
    icon: Instagram,
  },
  {
    title: "تلگرام",
    value: "modalitysupport@",
    href: "https://t.me/modalitysupport",
    icon: Send,
  },
  {
    title: "واتساپ",
    value: "۰۹۳۰۹۵۰۶۷۸",
    href: "https://wa.me/98930950678",
    icon: MessageCircle,
  },
];

export const contactCards = [
  {
    title: "پاسخگویی سریع",
    value: "برای پرسش‌های خرید و پیگیری سفارش، تلگرام سریع‌ترین مسیر ارتباطی است.",
    icon: Smartphone,
  },
  {
    title: "مراجعه حضوری",
    value: "قبل از مراجعه حضوری، هماهنگی تلفنی انجام دهید تا سفارش آماده تحویل باشد.",
    icon: MapPin,
  },
];
