import StaticImageDirector from "@/core/features/static-image-director";
import {
  BadgePercent,
  Gift,
  Headphones,
  PackageCheck,
  RotateCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";

export type LandingProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  tag?: string;
};

export const alertMessages = [
  {
    text: "ارسال سفارش‌های بالای ۲ میلیون تومان برای شهر تهران رایگان است.",
    className: "bg-[#b7efe0] text-[#145447]",
  },
  {
    text: "قبل از ثبت سفارش، سایزبندی و رنگ محصول را با دقت بررسی کنید.",
    className: "bg-[#f5b2b2] text-[#7a1d1d]",
  },
  {
    text: "برای دریافت کدهای تخفیف و موجودی‌های جدید، مدالیتی را در شبکه‌های اجتماعی دنبال کنید.",
    className: "bg-[#eaf2c1] text-[#525f13]",
  },
];

export const heroCategories = [
  {
    title: "New Season",
    subtitle: "دورس، هودی و شلوارهای روزمره",
    image: StaticImageDirector("product-1.jpg"),
  },
  {
    title: "Street Fit",
    subtitle: "استایل خیابانی برای استفاده روزانه",
    image: StaticImageDirector("hat-1.jpg"),
  },
  {
    title: "Women Edit",
    subtitle: "انتخاب‌های ساده و خوش‌فرم",
    image: StaticImageDirector("article-2.jpeg"),
  },
];

export const serviceItems = [
  {
    title: "ارسال سریع",
    description: "پردازش سفارش در کوتاه‌ترین زمان",
    icon: Truck,
  },
  {
    title: "ضمانت اصالت",
    description: "تضمین کیفیت و سلامت کالا",
    icon: ShieldCheck,
  },
  {
    title: "تعویض آسان",
    description: "امکان تعویض طبق قوانین فروشگاه",
    icon: RotateCcw,
  },
  {
    title: "پشتیبانی",
    description: "پاسخگویی قبل و بعد از خرید",
    icon: Headphones,
  },
];

const baseImages = [
  StaticImageDirector("product-1.jpg"),
  StaticImageDirector("hat-1.jpg"),
  StaticImageDirector("hat-2.jpg"),
  StaticImageDirector("hat-3.jpg"),
  StaticImageDirector("hat-4.jpg"),
];

const productTitles = [
  "بافت اورسایز کرم کد ۱۰۰۱",
  "دورس گرافیکی مدالیتی کد ۱۰۰۲",
  "ست روزمره روشن کد ۱۰۰۳",
  "هودی آزاد مشکی کد ۱۰۰۴",
  "شلوار بگ ذغالی کد ۱۰۰۵",
  "جین آبی روشن کد ۱۰۰۶",
  "دورس نیم‌زیپ کد ۱۰۰۷",
  "تیشرت گرافیکی سفید کد ۱۰۰۸",
  "هودی مینیمال زرشکی کد ۱۰۰۹",
  "شلوار کارگو خاکستری کد ۱۰۱۰",
  "جین راسته آبی تیره کد ۱۰۱۱",
  "شلوار پارچه‌ای آزاد کد ۱۰۱۲",
  "تیشرت صورتی ساده کد ۱۰۱۳",
  "پیراهن چهارخانه کد ۱۰۱۴",
  "ست دورس و شلوار کد ۱۰۱۵",
  "شلوار بگ مشکی کد ۱۰۱۶",
  "تیشرت چاپ برجسته کد ۱۰۱۷",
  "شلوار جین زاپ‌دار کد ۱۰۱۸",
  "هودی کلاهدار سبز کد ۱۰۱۹",
  "شلوار نیم‌بگ آبی کد ۱۰۲۰",
  "کلاه کپ مدالیتی کد ۲۰۰۱",
  "کیف کراس‌بادی مشکی کد ۲۰۰۲",
  "کلاه کپ طوسی کد ۲۰۰۳",
  "کیف دوشی اسپرت کد ۲۰۰۴",
  "کلاه کپ کرم کد ۲۰۰۵",
  "کیف روزمره سفید کد ۲۰۰۶",
  "کوله‌پشتی شهری مشکی کد ۳۰۰۱",
  "کوله‌پشتی دانشجویی کد ۳۰۰۲",
  "کیف کمری مینیمال کد ۳۰۰۳",
  "دورس نیم‌زیپ مشکی کد ۳۰۰۴",
];

export const featuredProducts: LandingProduct[] = productTitles.map(
  (title, index) => ({
    id: index + 1,
    title,
    image: baseImages[index % baseImages.length],
    category:
      index < 20 ? "پوشاک" : index < 26 ? "اکسسوری" : "کیف و کوله",
    price: 690000 + index * 45000,
    tag: index % 7 === 0 ? "New" : index % 6 === 0 ? "Sale" : undefined,
  })
);

export const mainProducts = featuredProducts.slice(0, 20);

export const accessoryProducts = featuredProducts.slice(20, 26);

export const backpackProducts = featuredProducts.slice(26, 30);

export const selectedProducts = [
  featuredProducts[4],
  featuredProducts[11],
  featuredProducts[18],
  featuredProducts[21],
  featuredProducts[27],
];

export const promoStats = [
  {
    title: "تخفیف‌های فعال",
    value: "تا ۴۰٪",
    icon: BadgePercent,
  },
  {
    title: "بسته‌بندی مطمئن",
    value: "اختصاصی",
    icon: PackageCheck,
  },
  {
    title: "هدیه خرید",
    value: "برای سفارش‌های ویژه",
    icon: Gift,
  },
];
