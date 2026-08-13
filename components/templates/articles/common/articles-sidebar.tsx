import Link from "next/link";
import { articlesData } from "../utils/articles-data";

const ArticlesSidebar = () => {
  return (
    <aside className="space-y-6">
      <section className="border border-neutral-200 p-5">
        <h2 className="mb-4 border-b border-dashed border-neutral-200 pb-3 font-Estedad-ExtraBold! text-neutral-950">
          آخرین مطالب
        </h2>
        <div className="space-y-4">
          {articlesData.slice(0, 4).map((article) => (
            <Link
              href={`/articles/${article.slug}`}
              className="block text-sm font-bold leading-7 text-neutral-700 transition hover:text-neutral-950"
              key={article.slug}
            >
              {article.title}
            </Link>
          ))}
        </div>
      </section>
      <section className="border border-neutral-200 p-5">
        <h2 className="mb-4 border-b border-dashed border-neutral-200 pb-3 font-Estedad-ExtraBold! text-neutral-950">
          دسته‌بندی‌ها
        </h2>
        <div className="flex flex-wrap gap-2">
          {["پوشاک", "اکسسوری", "استایل", "نگهداری لباس"].map((item) => (
            <span
              className="border border-neutral-200 px-3 py-1.5 text-xs font-bold text-neutral-600"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default ArticlesSidebar;
