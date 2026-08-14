import React from "react";
import CafePage from "@/components/templates/cafe/pages/cafe-page";
import { CafeCategory } from "@/components/templates/cafe/types";
import { getCafeMenu } from "@/core/actions/cafe";

// Mock data generator - in real app this would be fetched from API
// URL example: http://141.11.18.66:9000/api/cafe/[cafeName]/menu

function getMockCategories(): CafeCategory[] {
  // Sample provided plus extra to demonstrate UX for multiple categories with/without images
  return [
    {
      category_id: "28a03f39-0a72-4adf-92eb-bcb818948fb9",
      category: "نوشیدنی‌ها 2",
      image: "http://141.11.18.66:9000/media/categories/44996505f23d4ba1960778ce4db26d60.png",
      data: [
        {
          id: "c4b6b3d6-846c-4229-8800-a96fc4b9bd1d",
          name: "لاته",
          description: "اسپرسو، شیر بخار داده شده، فوم لطیف شیر",
          price: 85000,
          currency: "تومان",
          image: null,
          images: [],
        },
        {
          id: "c9022d63-9bb8-4ad8-9d9f-cc06febacbe0",
          name: "کروسان",
          description: null,
          price: 55000,
          currency: "تومان",
          image: null,
          images: [],
        },
        {
          id: "aa92eb5b-889e-4fbf-8a48-c023569f0f9b",
          name: "مافین",
          description: "مافین شکلاتی تازه روزانه",
          price: 45000,
          currency: "تومان",
          image: null,
          images: [],
        },
        {
          id: "a1b542eb-9410-4382-8622-5d5c50868d64",
          name: "شیرینی",
          description: null,
          price: 35000,
          currency: "تومان",
          image: null,
          images: [],
        },
        {
          id: "db236df2-f17a-44c4-ad4c-112e8bdd48ed",
          name: "موکا",
          description: "ترکیب شکلات و اسپرسو با شیر",
          price: 95000,
          currency: "تومان",
          image: null,
          images: [],
        },
        {
          id: "653404df-2283-454e-9660-0bb4846ee558",
          name: "چای سبز",
          description: null,
          price: 40000,
          currency: "تومان",
          image: null,
          images: [],
        },
        {
          id: "03b34072-d77a-44e0-bda8-3dbe6bd95b38",
          name: "کیک",
          description: "کیک روز - شکلاتی",
          price: 65000,
          currency: "تومان",
          image: null,
          images: [],
        },
        {
          id: "2d9bd1c4-e11c-41fc-833a-d4bfc2ea4071",
          name: "ماچیاتو",
          description: null,
          price: 80000,
          currency: "تومان",
          image: null,
          images: [],
        },
      ],
    },
    {
      category_id: "cold-drinks",
      category: "نوشیدنی‌های سرد",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop",
      data: [
        {
          id: "cold-1",
          name: "آیس لاته",
          description: "اسپرسو سرد با شیر و یخ",
          price: 90000,
          currency: "تومان",
          image: null,
          images: [],
        },
        {
          id: "cold-2",
          name: "فراپه کارامل",
          description: "ترکیب قهوه، شیر و کارامل با بستنی",
          price: 110000,
          currency: "تومان",
          image: null,
          images: [],
        },
        {
          id: "cold-3",
          name: "لیموناد نعنایی",
          description: "طبیعی و تازه",
          price: 70000,
          currency: "تومان",
          image: null,
          images: [],
        },
      ],
    },
    {
      category_id: "breakfast",
      category: "صبحانه کافه",
      image: null, // Testing empty image case - باید خالی بذاری
      data: [
        {
          id: "br-1",
          name: "املت مخصوص",
          description: "املت با پنیر و سبزیجات تازه",
          price: 120000,
          currency: "تومان",
          image: null,
          images: [],
        },
        {
          id: "br-2",
          name: "پنکیک عسل",
          description: "سه لایه پنکیک با عسل طبیعی",
          price: 95000,
          currency: "تومان",
          image: null,
          images: [],
        },
      ],
    },
    {
      category_id: "pastries",
      category: "شیرینی و کیک",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
      data: [
        {
          id: "pas-1",
          name: "چیزکیک نیویورکی",
          description: null,
          price: 85000,
          currency: "تومان",
          image: null,
          images: [],
        },
        {
          id: "pas-2",
          name: "تیرامیسو",
          description: "کلاسیک ایتالیایی",
          price: 90000,
          currency: "تومان",
          image: null,
          images: [],
        },
        {
          id: "pas-3",
          name: "کوکی شکلاتی",
          description: null,
          price: 35000,
          currency: "تومان",
          image: null,
          images: [],
        },
      ],
    },
    {
      category_id: "hot",
      category: "نوشیدنی‌های گرم",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
      data: [
        {
          id: "hot-1",
          name: "اسپرسو سینگل",
          description: null,
          price: 50000,
          currency: "تومان",
          image: null,
          images: [],
        },
        {
          id: "hot-2",
          name: "کاپوچینو",
          description: "اسپرسو با فوم شیر مخملی",
          price: 80000,
          currency: "تومان",
          image: null,
          images: [],
        },
      ],
    },
  ];
}

interface PageProps {
  params: Promise<{ cafeName: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { cafeName } = await params;

  // Try real API first if BASE_URL is configured
  let categories: CafeCategory[] = [];
  try {
    if (process.env.BASE_URL) {
      const fetched = await getCafeMenu(cafeName);
      if (fetched && fetched.length > 0) {
        categories = fetched;
      }
    }
  } catch (_) {
    // ignore
  }

  // Fallback to mock data for demo / beautiful UX showcase
  if (categories.length === 0) {
    categories = getMockCategories();
  }

  return <CafePage cafeName={cafeName} categories={categories} />;
};

export async function generateMetadata({ params }: PageProps) {
  const { cafeName } = await params;
  let decoded = cafeName;
  try {
    decoded = decodeURIComponent(cafeName);
  } catch {}
  return {
    title: `منوی ${decoded} | کافه`,
    description: `مشاهده منوی دیجیتال کافه ${decoded} - دسته‌بندی‌های متنوع با تصاویر اختصاصی`,
  };
}

export default Page;
