import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { ArticleItem } from "../utils/articles-data";

const ArticleCard = ({ article }: { article: ArticleItem }) => {
  return (
    <article className="group border border-neutral-200 bg-white">
      <Link href={`/articles/${article.slug}`} className="block">
        <div className="relative aspect-[1.35] overflow-hidden bg-neutral-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between gap-3 text-xs text-neutral-500">
            <span className="font-bold text-neutral-950">{article.category}</span>
            <span className="flex items-center gap-1">
              <CalendarDays className="size-4" />
              {article.date}
            </span>
          </div>
          <h2 className="min-h-14 font-Estedad-ExtraBold! leading-7 text-neutral-950">
            {article.title}
          </h2>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-neutral-600">
            {article.excerpt}
          </p>
          <span className="mt-5 inline-flex h-10 items-center border border-neutral-950 px-4 text-xs font-Estedad-ExtraBold! text-neutral-950 transition group-hover:bg-neutral-950 group-hover:text-white">
            ادامه مطلب
          </span>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
