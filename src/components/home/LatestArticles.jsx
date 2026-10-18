
import articles from "@/data/articles";
import ArticleCard from "@/components/ui/ArticleCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function LatestArticles() {
  return (
    <section id="articles" className="section">
      <div className="container">
        <SectionTitle
          title="آخرین مقالات"
          description="مطالب کاربردی درباره محصولات آلومینیومی"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
