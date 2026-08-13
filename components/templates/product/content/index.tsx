import React from "react";
import Breadcrumb from "./fragments/breadcrumb/";
import Title from "./fragments/title";
import Price from "./fragments/price";
import Quantity from "./fragments/quantity";
import AddToCart from "./fragments/add-to-cart";
import Notification from "./fragments/notification";
import { Bookmark, CircleMinus, CirclePlus } from "lucide-react";

const Content = () => {
  return (
    <section className="min-w-0">
      <Breadcrumb />

      <div className="mt-7 space-y-6">
        <div className="space-y-4 text-left">
          <Title />
          <Price />
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
          <Quantity />
          <AddToCart />
        </div>

        <button className="mr-auto flex items-center gap-2 text-sm text-primary-light">
          <Bookmark className="size-5" />
          <span>افزودن به لیست دلخواه</span>
        </button>

        <Notification />

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          <details className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-Estedad-ExtraBold!">
              <span>توضیحات</span>
              <CirclePlus className="size-4 text-neutral-500 group-open:hidden" />
              <CircleMinus className="hidden size-4 text-[#f44336] group-open:block" />
            </summary>
            <p className="pt-4 text-sm leading-8 text-primary-light/70">
              این محصول با پارچه لطیف و برش آزاد طراحی شده و برای استفاده روزمره
              و استایل خیابانی انتخابی راحت و کاربردی است.
            </p>
          </details>

          <details className="group py-4" open>
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-Estedad-ExtraBold!">
              <span>دیدگاه‌ها (۵)</span>
              <CirclePlus className="size-4 text-neutral-500 group-open:hidden" />
              <CircleMinus className="hidden size-4 text-[#f44336] group-open:block" />
            </summary>

            <form className="mt-5 space-y-4">
              <textarea className="h-32 w-full resize-none rounded-sm border border-neutral-200 p-3 text-sm outline-none transition focus:border-primary" />
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="space-y-1 text-sm">
                  <span>
                    نام <b className="text-[#f44336]">*</b>
                  </span>
                  <input className="h-10 w-full rounded-sm border border-neutral-200 px-3 outline-none transition focus:border-primary" />
                </label>
                <label className="space-y-1 text-sm">
                  <span>
                    ایمیل <b className="text-[#f44336]">*</b>
                  </span>
                  <input className="h-10 w-full rounded-sm border border-neutral-200 px-3 outline-none transition focus:border-primary" />
                </label>
              </div>
              <label className="flex items-start gap-2 text-xs leading-6 text-primary-light/70">
                <input type="checkbox" className="mt-1" />
                <span>
                  ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره
                  دیدگاهی می‌نویسم.
                </span>
              </label>
              <button className="rounded-sm bg-[#7fbf2f] px-6 py-2 text-sm font-Estedad-Bold! text-white">
                ثبت
              </button>
            </form>
          </details>
        </div>

        <p className="text-left text-sm font-Estedad-Bold! text-primary-light/80">
          دسته: شلوار، شلوار جاگر
        </p>
      </div>
    </section>
  );
};

export default Content;
