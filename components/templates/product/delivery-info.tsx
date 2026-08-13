import { Zap } from "lucide-react";
import React from "react";

const DeliveryInfo = () => {
  return (
    <section className="mt-12 border-y border-neutral-200 bg-neutral-50 py-10">
      <div className="container max-w-2xl space-y-5 text-center">
        <div className="flex items-center justify-center gap-2">
          <Zap className="size-6" />
          <h2 className="text-lg font-Estedad-ExtraBold!">نحوه ارسال کالا</h2>
        </div>
        <p className="text-sm text-primary-light/50">
          این محصول چگونه و چه زمانی به دست من می‌رسد؟
        </p>
        <h3 className="font-Estedad-ExtraBold!">
          هزینه، روش و زمان ارسال این کالا
        </h3>
        <div className="space-y-4 text-sm leading-8 text-primary-light/80">
          <p>
            در صفحه‌ی صورت‌حساب شما می‌توانید یکی از روش‌های پستی پیشتاز و یا
            تیپاکس پس کرایه را به عنوان روش ارسال انتخاب نمایید.
          </p>
          <p>
            در روش پست پیشتاز هزینه پست در سایت محاسبه می‌شود و شما نیازی به
            پرداخت هزینه به مامور پست نخواهید داشت. اما در روش تیپاکس هزینه
            ارسال در مقصد بر اساس مسافت توسط اداره تیپاکس از شما دریافت خواهد شد.
          </p>
          <p>
            ارسال سفارش‌ها حداکثر ۲ روز کاری زمان می‌برد و پس از پردازش، کد
            مرسوله برای پیگیری در اختیار شما قرار می‌گیرد.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
