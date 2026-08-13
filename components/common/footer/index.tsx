"use client";
import { Award, Instagram, Link2, Mail, Menu, Phone, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const menuItems = [
    "صفحه اصلی",
    "حساب کاربری من",
    "صفحه پرداخت",
    "سبد خرید",
    "درباره مدالیتی",
    "تماس با مدالیتی",
    "قوانین تعویض",
  ];

  const serviceItems = [
    "حساب کاربری من",
    "رهگیری مرسوله پستی",
    "سوالات متداول",
    "روش‌های پرداخت",
    "روش‌های ارسال",
    "قوانین و مقررات مدالیتی",
    "قوانین تعویض",
    "سیاست حریم خصوصی",
  ];

  return (
    <footer className="border-t border-gray-200 bg-white pt-10">
      <div className="container max-w-5xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <section className="space-y-5">
            <div className="flex items-center justify-center gap-2 border-b border-dashed border-neutral-200 pb-4">
              <Menu className="size-5" />
              <h3 className="font-Estedad-ExtraBold!">منو اصلی</h3>
            </div>
            <ul className="space-y-3 text-sm text-primary-light/80">
              {menuItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full border border-primary-light" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-5">
            <div className="flex items-center justify-center gap-2 border-b border-dashed border-neutral-200 pb-4">
              <Users className="size-5" />
              <h3 className="font-Estedad-ExtraBold!">خدمات مشتریان</h3>
            </div>
            <ul className="space-y-3 text-sm text-primary-light/80">
              {serviceItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full border border-primary-light" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-5">
            <div className="flex items-center justify-center gap-2 border-b border-dashed border-neutral-200 pb-4">
              <Award className="size-5" />
              <h3 className="font-Estedad-ExtraBold!">مجوزها و گواهینامه‌ها</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex aspect-square items-center justify-center rounded-sm border border-neutral-200 text-sm font-Estedad-Bold! text-primary-light/60">
                eNamad
              </div>
              <div className="flex aspect-square items-center justify-center rounded-sm border border-neutral-200 text-sm font-Estedad-Bold! text-primary-light/60">
                Samandehi
              </div>
            </div>
            <p className="text-center text-xs leading-6 text-primary-light/60">
              مدالیتی دارای نماد اعتماد الکترونیکی و مجوزهای رسمی کسب و کارهای
              مجازی است.
            </p>
          </section>

          <section className="space-y-5">
            <div className="flex items-center justify-center gap-2 border-b border-dashed border-neutral-200 pb-4">
              <Link2 className="size-5" />
              <h3 className="font-Estedad-ExtraBold!">تماس با مدالیتی</h3>
            </div>
            <ul className="space-y-3 text-sm text-primary-light/80">
              <li className="flex items-center gap-2">
                <Phone className="size-4" />
                تلفن دفتر: ۰۲۱-۵۵۵۰۴۳۸۵
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4" />
                پشتیبانی: ۰۹۳۰۹۵۰۶۷۸
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4" />
                MODALITYsupport@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="size-4" />
                MODALITY.style
              </li>
            </ul>
            <p className="text-sm leading-7 text-primary-light/80">
              نشان آدرس: تهران، شهر ری، خیابان پیروزی، مجتمع تجاری کوروش، بلوک
              ۵، پلاک ۱ واحد ۱
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8 text-center">
          <h3 className="font-Estedad-ExtraBold!">فروشگاه اینترنتی مدالیتی</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-primary-light/70">
            مدالیتی فروشگاه آنلاین پوشاک، لباس و اکسسوری است و تلاش می‌کند
            تجربه‌ای ساده، سریع و مطمئن برای خرید اینترنتی فراهم کند.
          </p>
        </div>
      </div>

      <div className="mt-10 bg-[#202020] py-5 text-center text-xs text-white">
        <Link href={"https://instagram.com/novexcode"}>
        توسعه و طراحی شده توسط تیم نووکس 
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
