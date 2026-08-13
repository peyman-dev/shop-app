import ArticlePage from "@/components/templates/articles/pages/article-page";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return <ArticlePage slug={slug} />;
};

export default page;
