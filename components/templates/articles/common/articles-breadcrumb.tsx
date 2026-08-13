const ArticlesBreadcrumb = ({ title }: { title: string }) => {
  return (
    <div className="mb-8 flex items-center gap-2 border-b border-neutral-200 pb-5 text-sm text-neutral-500">
      <span>خانه</span>
      <span>/</span>
      <span>مجله مدالیتی</span>
      <span>/</span>
      <span className="font-bold text-neutral-950">{title}</span>
    </div>
  );
};

export default ArticlesBreadcrumb;
