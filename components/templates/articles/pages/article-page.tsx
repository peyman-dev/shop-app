import { notFound } from "next/navigation";
import Image from "next/image";
import ArticlesBreadcrumb from "../common/articles-breadcrumb";
import ArticlesSidebar from "../common/articles-sidebar";
import { getArticleBySlug } from "../utils/articles-data";

const ArticlePage = ({ slug }: { slug: string }) => {
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="container max-w-6xl py-8 md:py-12">
      <ArticlesBreadcrumb title={article.title} />
      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <article className="min-w-0">
          <div className="mb-6 text-center">
            <p className="text-xs font-bold text-neutral-500">
              {article.category} / {article.date} / {article.readTime}
            </p>
            <h1 className="mx-auto mt-3 max-w-3xl font-Estedad-ExtraBold! text-2xl leading-10 text-neutral-950 md:text-4xl md:leading-[1.6]">
              {article.title}
            </h1>
          </div>
          <div className="relative mb-8 aspect-[1.8] overflow-hidden bg-neutral-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 820px"
              className="object-cover"
            />
          </div>
          <div className="mx-auto max-w-3xl space-y-5 text-sm leading-9 text-neutral-700 md:text-base md:leading-10">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
        <ArticlesSidebar />
      </div>
    </main>
  );
};

export default ArticlePage;
