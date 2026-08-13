import StaticImageDirector from "@/core/features/static-image-director";
import {
  ProductBrand,
  ProductCategory,
  ProductColor,
  ProductItem,
  ProductsSort,
} from "./types";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "کلاه",
  "تیشرت",
  "هودی",
  "شلوار",
];

export const PRODUCT_BRANDS: ProductBrand[] = ["korean", "newshin", "modality"];

export const PRODUCT_COLORS: ProductColor[] = [
  "سرمه ای",
  "قهوه ای",
  "مشکی",
  "طوسی",
  "سبز",
];

export const PRODUCT_PRICE_RANGE = {
  min: 350_000,
  max: 2_900_000,
};

export const PRODUCTS_SORT_OPTIONS: {
  label: string;
  value: ProductsSort;
}[] = [
  { label: "جدیدترین", value: "newest" },
  { label: "پرفروش‌ترین", value: "popular" },
  { label: "ارزان‌ترین", value: "price-asc" },
  { label: "گران‌ترین", value: "price-desc" },
];

const productImages = [
  "hat-2.jpg",
  "hat-3.jpg",
  "hat-1.jpg",
  "hat-4.jpg",
  "product-1.jpg",
];

export const productsData: ProductItem[] = [
  {
    id: "1",
    title: "کلاه بیسبالی وارداتی چهارخونه korean سرمه ای",
    slug: "korean-navy-check-cap",
    image: StaticImageDirector(productImages[0]),
    category: "کلاه",
    brand: "korean",
    color: "سرمه ای",
    price: 980_000,
    oldPrice: 1_180_000,
    isNew: true,
    isAvailable: true,
    sales: 94,
    createdAt: "2026-07-14",
  },
  {
    id: "2",
    title: "کلاه بیسبالی وارداتی چهارخونه korean کرم قهوه ای",
    slug: "korean-brown-check-cap",
    image: StaticImageDirector(productImages[1]),
    category: "کلاه",
    brand: "korean",
    color: "قهوه ای",
    price: 980_000,
    isNew: true,
    isAvailable: true,
    sales: 88,
    createdAt: "2026-07-13",
  },
  {
    id: "3",
    title: "کلاه بیسبالی وارداتی چهارخونه korean کرم مشکی",
    slug: "korean-black-check-cap",
    image: StaticImageDirector(productImages[3]),
    category: "کلاه",
    brand: "korean",
    color: "مشکی",
    price: 980_000,
    isNew: true,
    isAvailable: true,
    sales: 81,
    createdAt: "2026-07-12",
  },
  {
    id: "4",
    title: "هودی اورسایز نیوشین مدل کلاسیک مشکی",
    slug: "newshin-oversize-black-hoodie",
    image: StaticImageDirector(productImages[4]),
    category: "هودی",
    brand: "newshin",
    color: "مشکی",
    price: 1_780_000,
    oldPrice: 2_050_000,
    isNew: true,
    isAvailable: true,
    sales: 62,
    createdAt: "2026-07-10",
  },
  {
    id: "5",
    title: "تیشرت پنبه‌ای modality رنگ طوسی",
    slug: "modality-gray-cotton-tshirt",
    image: StaticImageDirector(productImages[4]),
    category: "تیشرت",
    brand: "modality",
    color: "طوسی",
    price: 690_000,
    isNew: false,
    isAvailable: true,
    sales: 71,
    createdAt: "2026-07-05",
  },
  {
    id: "6",
    title: "شلوار کتان نیوشین رنگ سبز",
    slug: "newshin-green-pants",
    image: StaticImageDirector(productImages[4]),
    category: "شلوار",
    brand: "newshin",
    color: "سبز",
    price: 1_390_000,
    isNew: false,
    isAvailable: false,
    sales: 34,
    createdAt: "2026-06-29",
  },
  {
    id: "7",
    title: "تیشرت طرح مینیمال korean سرمه ای",
    slug: "korean-navy-minimal-tshirt",
    image: StaticImageDirector(productImages[4]),
    category: "تیشرت",
    brand: "korean",
    color: "سرمه ای",
    price: 760_000,
    isNew: true,
    isAvailable: true,
    sales: 59,
    createdAt: "2026-07-09",
  },
  {
    id: "8",
    title: "هودی سبک modality رنگ قهوه ای",
    slug: "modality-brown-light-hoodie",
    image: StaticImageDirector(productImages[4]),
    category: "هودی",
    brand: "modality",
    color: "قهوه ای",
    price: 1_590_000,
    isNew: false,
    isAvailable: true,
    sales: 46,
    createdAt: "2026-06-24",
  },
  {
    id: "9",
    title: "کلاه کپ ساده نیوشین رنگ طوسی",
    slug: "newshin-gray-cap",
    image: StaticImageDirector(productImages[4]),
    category: "کلاه",
    brand: "newshin",
    color: "طوسی",
    price: 840_000,
    isNew: false,
    isAvailable: true,
    sales: 103,
    createdAt: "2026-06-21",
  },
];
