import {
  Bookmark,
  Edit3,
  Home,
  LogOut,
  Menu,
  ShoppingBag,
  Store,
} from "lucide-react";

export const profileID = "me";

export const dashboardMenuItems = [
  {
    label: "پیشخوان",
    href: `/profile/${profileID}`,
    icon: Home,
  },
  {
    label: "سفارش‌ها",
    href: `/profile/${profileID}/orders`,
    icon: Menu,
  },
  {
    label: "جزئیات حساب",
    href: `/profile/${profileID}/personal-info`,
    icon: Edit3,
  },
  {
    label: "لیست دلخواه",
    href: `/profile/${profileID}/favorites`,
    icon: Bookmark,
  },
  {
    label: "خروج از حساب کاربری",
    href: "/auth/login",
    icon: LogOut,
  },
];

export const dashboardActionCards = [
  {
    label: "مشاهده محصولات",
    href: "/products",
    icon: Store,
    color: "bg-neutral-400",
  },
  {
    label: "سبد خرید",
    href: `/profile/${profileID}/orders`,
    icon: ShoppingBag,
    color: "bg-amber-400",
  },
  {
    label: "سفارش‌ها",
    href: `/profile/${profileID}/orders`,
    icon: Menu,
    color: "bg-green-500",
  },
  {
    label: "جزئیات حساب",
    href: `/profile/${profileID}/personal-info`,
    icon: Edit3,
    color: "bg-teal-600",
  },
  {
    label: "لیست دلخواه",
    href: `/profile/${profileID}/favorites`,
    icon: Bookmark,
    color: "bg-red-500",
  },
  {
    label: "خروج از حساب کاربری",
    href: "/auth/login",
    icon: LogOut,
    color: "bg-neutral-950",
  },
];

export const accountDefaultValues = {
  phone: "۰۹۹۸۸۷۱۵۹۶",
  firstName: "",
  lastName: "",
  username: "۷۳۴۹۷۲۳۴۱۶۷۰",
  email: "",
};
