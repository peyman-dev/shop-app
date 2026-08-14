import { request } from "@/core/lib/request";
import { cleanImageUrl } from "@/components/templates/cafe/utils/image-helper";
import { CafeCategory } from "@/components/templates/cafe/types";

export type RawCategory = {
  category_id: string;
  category: string;
  image: string | null;
  data: any[];
};

export const getCafeMenu = async (cafeName: string): Promise<CafeCategory[]> => {
  try {
    // If BASE_URL not set, will fallback to mock outside. This tries real endpoint.
    const response = await request.get(`/cafe/${encodeURIComponent(cafeName)}/menu`);
    const data = response.data;

    // Normalize to CafeCategory[]
    // API might return { categories: [...] } or directly array
    const rawCategories: RawCategory[] = Array.isArray(data) ? data : data.categories || data.data || [];

    return rawCategories.map((cat) => ({
      category_id: cat.category_id,
      category: cat.category,
      image: cleanImageUrl(cat.image),
      data: cat.data || [],
    }));
  } catch (err) {
    console.warn("Failed to fetch cafe menu, returning empty - will use mock", err);
    return [];
  }
};
