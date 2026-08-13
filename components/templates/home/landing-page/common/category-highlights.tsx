"use client"
import StaticImageDirector from "@/core/features/static-image-director";
import Categories from "../../categories";
import Image from "next/image";
import Link from "next/link";
const categories = [
  {
    title: "انواع کیف",
    eyebrow: "کیف های متنوع مدالیتی",
    description:
      "کلیک کن تا کیف های خفن مدالیتی، کراس بک، کوله دوشی، کوله و ... رو ببینی",
    image: StaticImageDirector("category-1.jpg"),
  },
  {
    title: "انواع کلاه",
    eyebrow: "کلاه های متنوع مدالیتی",
    description:
      "کلیک کن تا کلاه های جذاب مدالیتی، کلاه بیسبالی، کلاه بافت، باکت و... رو ببینی!",
    image: StaticImageDirector("category-3.jpg"),
  },
  {
    title: "انواع استیکر",
    eyebrow: "استیکر های جذاب",
    description: "اینجا کلی بک و کلی استیکر جذاب ببین!",
    image: StaticImageDirector("category-4.jpg"),
  },
  {
    title: "انواع جوراب و دستکش",
    eyebrow: "جوراب و دستکش مدالیتی",
    description:
      "کلیک کن تا جوراب، دستکش، ساق دست و مچ بند های مدالیتی رو ببینی",
    image: StaticImageDirector("category-5.jpg"),
  },
  {
    title: "انواع شلوار",
    description: "شلوار جین، خاکی، شلوار پارچه ای و سایر شلوارها",
    image: StaticImageDirector("category-6.jpg"),
  },
  {
    title: "انواع تیشرت",
    description: "تیشرت اورسایز، تیشرت طرح دار، بیسیک و باکسی",
    image: StaticImageDirector("category-2.jpg"),
  },
  {
    title: "جورتس و شلوارک",
    description: "جورتس و شلوارک جین کتان و ریسبنگ",
    image: StaticImageDirector("category-7.jpg"),
  },
  {
    title: "انواع جکت و وست",
    description: "جکت ریسبنگ، وست و جلیقه",
    image: StaticImageDirector("category-8.jpg"),
  },
  {
    title: "بیلرسوت و اورال",
    description:
      "کلیک کن تا انواع بیلرسوت، اورال با مشخصه مدالیتی رو ببینی!",
    image: StaticImageDirector("category-9.jpg"),
  },
  {
    title: "انواع ست",
    description:
      "کت و شلوار، سوییشرت و شلواری، وست و شلوارک، پیراهن و شلواری و ...",
    image: StaticImageDirector("category-10.jpg"),
  },
  {
    title: "پیراهن و شومیز",
    description: "برای مشاهده ی محصولات شومیز جین، کتان و لینن کلیک کنید",
    image: StaticImageDirector("category-11.jpg"),
  },
  {
    title: "پاییز و زمستان",
    description:
      "انواع پالتو، کاپشن، بافت، ترنچ کت، هودی، دورس و سوییشرت",
    image: StaticImageDirector("category-12.jpg"),
  },
];

const CategoryHighlights = () => {
  return <section className="bg-[#eeeeee] py-5" dir="rtl">
    <div className="container max-w-[1192px]">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            href="/products"
            key={category.title}
            className="group  relative flex h-[176px]!  flex-row items-center justify-between overflow-hidden rounded-[4px] bg-white px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
          >
            <div className="z-10 flex h-full min-w-0 flex-1 flex-col items-start text-right">
              {category.eyebrow ? (
                <span className="mb-2 text-xs text-[#ff3c1f]">
                  {category.eyebrow}
                </span>
              ) : null}
              <h3 className="font-Estedad-ExtraBold! text-[#202020]">
                {category.title}
              </h3>
              <p className="mt-2 max-w-[145px] text-xs text-[#202020]">
                {category.description}
              </p>
              <span className="mt-2 hidden rounded-md bg-[#f6f6f6] px-5 py-2 text-sm text-[#a3a3a3] opacity-0 transition duration-300 group-hover:opacity-100 lg:inline-flex">
                مشاهده و خرید
              </span>
            </div>
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="size-full! inset-0  object-cover top-0 absolute  transition duration-500 group-hover:scale-105"
              />
          </Link>
        ))}
      </div>
    </div>
  </section>
};

export default CategoryHighlights;
