"use client";

import { headerCategories } from "@/components/common/header/features/header-data";
import { ChevronDown, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type SearchProps = {
  className?: string;
  compact?: boolean;
};

const Search = ({ className = "", compact = false }: SearchProps) => {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState(headerCategories[0].value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams();
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      params.set("search", trimmedQuery);
    }

    if (category !== "all") {
      params.set("category", category);
    }

    const queryString = params.toString();
    router.push(queryString ? `/products?${queryString}` : "/products");
  };

  if (compact) {
    return (
      <form
        onSubmit={handleSubmit}
        className={`flex h-11 items-center rounded-sm bg-neutral-100 px-3 text-neutral-600 ${className}`}
      >
        <button
          type="submit"
          aria-label="جستجو"
          className="flex size-8 shrink-0 items-center justify-center"
        >
          <SearchIcon className="size-5" />
        </button>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="h-full min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-neutral-500"
          placeholder="جستجوی محصولات"
        />
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      dir="ltr"
      className={`flex h-10 w-full max-w-[620px] items-center border border-white/25 bg-black text-white ${className}`}
    >
      <button
        type="submit"
        aria-label="جستجو"
        className="flex h-full w-12 shrink-0 items-center justify-center border-r border-white/20 transition hover:bg-white hover:text-primary"
      >
        <SearchIcon className="size-5" />
      </button>
      <label
        dir="rtl"
        className="relative flex h-full shrink-0 items-center border-r border-white/20"
      >
        <ChevronDown className="pointer-events-none absolute left-3 size-4 text-white/70" />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="h-full appearance-none bg-transparent py-0 pr-4 pl-10 text-xs outline-none"
          aria-label="انتخاب دسته‌بندی"
        >
          {headerCategories.map((item) => (
            <option key={item.value} value={item.value} className="text-black">
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <input
        dir="rtl"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        type="text"
        className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/50"
        placeholder="جستجوی محصولات"
      />
    </form>
  );
};

export default Search;
