import StaticImageDirector from "@/core/features/static-image-director";

export type LandingHeroSlide = {
  id: number;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  cta: string;
  href: string;
};

export const landingHeroSlides: LandingHeroSlide[] = [
  {
    id: 1,
    title: "MODALITY",
    eyebrow: "Men's & Women's Wear",
    description:
      "کالکشن روزمره مدالیتی با فرم‌های آزاد، رنگ‌های قابل ست کردن و آیتم‌هایی که برای استفاده واقعی طراحی شده‌اند.",
    image: StaticImageDirector("banner-2048x872.jpg"),
    cta: "مشاهده محصولات",
    href: "/products",
  },
  {
    id: 2,
    title: "استایل روزمره",
    eyebrow: "Daily Outfit",
    description:
      "پوشاک راحت و خوش‌فرم برای ست‌های روزمره، دانشگاه، کار و قرارهای شهری.",
    image: StaticImageDirector("banner-1.gif"),
    cta: "خرید پوشاک",
    href: "/products",
  },
  {
    id: 3,
    title: "اکسسوری مدالیتی",
    eyebrow: "Bags & Accessories",
    description:
      "کیف، کلاه و آیتم‌های کامل‌کننده برای ساختن استایل تمیز و کاربردی.",
    image: StaticImageDirector("banner-4.png"),
    cta: "دیدن اکسسوری‌ها",
    href: "/products",
  },
];
