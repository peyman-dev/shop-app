import { ProductFilters, ProductItem, ProductsSort } from "./types";

export const filterProducts = (
  products: ProductItem[],
  filters: ProductFilters
) => {
  return products.filter((product) => {
    const matchesCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category);
    const matchesBrand =
      filters.brands.length === 0 || filters.brands.includes(product.brand);
    const matchesColor =
      filters.colors.length === 0 || filters.colors.includes(product.color);
    const matchesAvailability = !filters.onlyAvailable || product.isAvailable;
    const matchesPrice =
      product.price >= filters.minPrice && product.price <= filters.maxPrice;

    return (
      matchesCategory &&
      matchesBrand &&
      matchesColor &&
      matchesAvailability &&
      matchesPrice
    );
  });
};

export const sortProducts = (
  products: ProductItem[],
  sort: ProductsSort
) => {
  return [...products].sort((firstProduct, secondProduct) => {
    if (sort === "price-asc") {
      return firstProduct.price - secondProduct.price;
    }

    if (sort === "price-desc") {
      return secondProduct.price - firstProduct.price;
    }

    if (sort === "popular") {
      return secondProduct.sales - firstProduct.sales;
    }

    return (
      new Date(secondProduct.createdAt).getTime() -
      new Date(firstProduct.createdAt).getTime()
    );
  });
};
