export type ArticleItem = {
  id: string;
  title: string;
  date: string;
  tag: "LANZAMIENTO" | "MEJORA" | "RETIRADO";
  project: string;
  projectSlug: string;
};
