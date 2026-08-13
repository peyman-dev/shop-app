import type { HeaderCategoryItem, HeaderNavItem } from "./types";

export const headerNavItems: HeaderNavItem[] = [
  {
    href: "/",
    label: "صفحه اصلی",
  },
  {
    href: "/products?category=clothing",
    label: "پوشاک مدالیتی",
  },
  {
    href: "/products?category=accessories",
    label: "اکسسوری مدالیتی",
  },
  {
    href: "/products?sort=discount",
    label: "تخفیف ویژه",
  },
  {
    href: "/faq",
    label: "قوانین تعویض",
  },
  {
    href: "/contact-us",
    label: "تماس با ما",
  },
  {
    href: "/articles",
    label: "مجله مدالیتی",
  },
  {
    href: "/brands",
    label: "برندها",
  },
];

export const headerCategories: HeaderCategoryItem[] = [
  {
    href: "/products",
    label: "همه محصولات",
    value: "all",
  },
  {
    href: "/products?category=pants",
    label: "شلوار",
    value: "pants",
  },
  {
    href: "/products?category=coat",
    label: "جکت و وست",
    value: "coat",
  },
  {
    href: "/products?category=shirt",
    label: "تیشرت",
    value: "shirt",
  },
  {
    href: "/products?category=bag",
    label: "کیف",
    value: "bag",
  },
  {
    href: "/products?category=hat",
    label: "کلاه",
    value: "hat",
  },
  {
    href: "/products?category=socks",
    label: "جوراب و دستکش",
    value: "socks",
  },
  {
    href: "/categories",
    label: "مشاهده دسته‌بندی‌ها",
    value: "categories",
  },
];

export const authHref = "/profile/me";
