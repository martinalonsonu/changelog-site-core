import fs from "fs";
import matter from "gray-matter";
import path from "path";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";

import type { ArticleItem } from "../types";

const articlesDirectory = path.join(process.cwd(), "docs");

/**
 * Función que extrae las notas de ./docs
 * @returns Listado de todas las notas
 */
export const getSortedArticles = (): ArticleItem[] => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title || "",
      date: matterResult.data.date || "",
      tag: matterResult.data.tag || "",
      project: matterResult.data.project || "",
      projectSlug: matterResult.data.projectSlug || "",
    };
  });

  return allArticlesData.sort((a, b) => {
    const format = "DD-MM-YYYY";
    const dateA = moment(a.date, format);
    const dateB = moment(b.date, format);

    return dateB.diff(dateA);
  });
};

/**
 * Función que extrae las notas de ./docs
 * @returns Listado de notas por sección
 */
export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
  const sortedArticles = getSortedArticles();
  const categorisedArticles: Record<string, ArticleItem[]> = {};

  sortedArticles.forEach((article) => {
    if (!categorisedArticles[article.tag]) {
      categorisedArticles[article.tag] = [];
    }
    categorisedArticles[article.tag].push(article);
  });

  return categorisedArticles;
};

/**
 * Función que extrae contenido de notas
 */
export const getArticleData = async (id: string) => {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    tag: matterResult.data.tag,
    date: moment(matterResult.data.date, "DD-MM-YYYY").format("MMMM Do YYYY"),
    project: matterResult.data.project,
    projectSlug: matterResult.data.projectSlug,
  };
};
