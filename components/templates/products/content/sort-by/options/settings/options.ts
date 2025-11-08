import { redirect } from "next/navigation";

export const sortOptions = [
  {
    id: crypto.randomUUID(),
    label: "پرفروش‌ترین",
    value: 1,
  },
  {
    id: crypto.randomUUID(),
    label: "مرتبط‌ترین",
    value: 2,
  },
  {
    id: crypto.randomUUID(),
    label: "پربازدیدترین",
    value: 3,
  },
  {
    id: crypto.randomUUID(),
    label: "جدیدترین",
    value: 4,
  },
  {
    id: crypto.randomUUID(),
    label: "ارزان‌ترین",
    value: 5,
  },
  {
    id: crypto.randomUUID(),
    label: "گران‌ترین",
    value: 6,
  },
];

