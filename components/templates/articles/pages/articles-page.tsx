import ArticleCard from "../common/article-card";
import ArticlesBreadcrumb from "../common/articles-breadcrumb";
import ArticlesSidebar from "../common/articles-sidebar";
import { articlesData } from "../utils/articles-data";

const ArticlesPage = () => {
  return (
    <main className="container max-w-6xl py-8 md:py-12">
      <ArticlesBreadcrumb title="همه مطالب" />
      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <section>
          <div className="mb-8 text-center">
            <h1 className="font-Estedad-ExtraBold! text-2xl text-neutral-950 md:text-3xl">
              مجله مدالیتی
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-neutral-500">
              راهنمای خرید، نگهداری و ست کردن پوشاک و اکسسوری‌های روزمره.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {articlesData.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </section>
        <ArticlesSidebar />
      </div>
    </main>
  );
};

export default ArticlesPage;
