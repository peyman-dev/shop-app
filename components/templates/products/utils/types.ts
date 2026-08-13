export type ProductColor = "سرمه ای" | "قهوه ای" | "مشکی" | "طوسی" | "سبز";

export type ProductCategory = "کلاه" | "تیشرت" | "هودی" | "شلوار";

export type ProductBrand = "korean" | "newshin" | "modality";

export type ProductsViewMode = "grid-3" | "grid-4" | "compact";

export type ProductsSort = "newest" | "popular" | "price-asc" | "price-desc";

export type ProductItem = {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: ProductCategory;
  brand: ProductBrand;
  color: ProductColor;
  price: number;
  oldPrice?: number;
  isNew?: boolean;
  isAvailable: boolean;
  sales: number;
  createdAt: string;
};

export type ProductFilters = {
  categories: ProductCategory[];
  brands: ProductBrand[];
  colors: ProductColor[];
  onlyAvailable: boolean;
  minPrice: number;
  maxPrice: number;
};
