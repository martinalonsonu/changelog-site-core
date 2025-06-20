import { getSortedArticles } from "@/lib/articles";
import { ArticleItem as ArticleType } from "@/types";
import ClientHomePage from "@/components/Homepage";

export default async function HomePage() {
  const articles: ArticleType[] = getSortedArticles();

  return <ClientHomePage articles={articles} />;
}
