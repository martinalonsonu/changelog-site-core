import { getSortedArticles } from "@/lib/articles";
import { ArticleItem as ArticleType } from "@/types";
import ClientHomePage from "@/components/Homepage";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProjectPage({ params }: Props) {
  const id = (await params).id;
  const articles: ArticleType[] = getSortedArticles();

  return (
    <ClientHomePage
      section=""
      articles={articles.filter((article) => article.projectSlug === id)}
    />
  );
}
