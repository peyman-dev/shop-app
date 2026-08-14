export interface CafeMenuItem {
  id: string;
  name: string;
  description: string | null;
  price: number;
  currency: string;
  image: string | null;
  images: string[];
}

export interface CafeCategory {
  category_id: string;
  category: string;
  image: string | null;
  data: CafeMenuItem[];
}

export interface CafeData {
  cafeName: string;
  categories: CafeCategory[];
}
