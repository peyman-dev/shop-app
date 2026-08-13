import CategoryHighlights from "../common/category-highlights";
import LandingHero from "../common/landing-hero";
import ProductGridSection from "../common/product-grid-section";
import PromoAlerts from "../common/promo-alerts";
import PromoStats from "../common/promo-stats";
import ServiceStrip from "../common/service-strip";
import {
  accessoryProducts,
  backpackProducts,
  mainProducts,
  selectedProducts,
} from "../utils/landing-data";
import React from "react";

const LandingPage = () => {
  return (
    <main className="bg-[#f5f5f3]">
      <PromoAlerts />
      <LandingHero />
      <CategoryHighlights />
      <ServiceStrip />
      <ProductGridSection
        title="تازه‌ترین محصولات پوشاک مدالیتی"
        subtitle="منتخب آیتم‌های روزمره، خیابانی و قابل استفاده برای استایل‌های مختلف"
        products={mainProducts.slice(0, 15)}
      />
      <ProductGridSection
        title="تازه‌ترین محصولات اکسسوری"
        subtitle="کلاه، کیف و آیتم‌های کامل‌کننده استایل"
        products={accessoryProducts}
      />
      <ProductGridSection
        title="کیف و کوله‌های پرفروش"
        products={backpackProducts}
        compact
      />
      <PromoStats />
      <ProductGridSection
        title="پیشنهادهای ویژه مدالیتی"
        products={selectedProducts}
        compact
      />
    </main>
  );
};

export default LandingPage;
