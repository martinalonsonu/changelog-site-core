"use client";

import { useState } from "react";
import Image from "next/image";
import ArticleItem from "./ArticleItem";
import { ArticleItem as ArticleType } from "@/types";

const statusBtnArray = [
  {
    id: 1,
    title: "TODOS",
    svg: "https://i.postimg.cc/wvGBdqRC/svgviewer-png-output.png",
  },
  {
    id: 2,
    title: "NUEVOS LANZAMIENTOS",
    svg: "https://i.postimg.cc/Bbm4dyJw/svgviewer-png-output-1.png",
  },
  {
    id: 3,
    title: "MEJORAS",
    svg: "https://i.postimg.cc/ht2znytx/svgviewer-png-output-2.png",
  },
  {
    id: 4,
    title: "RETIRADOS",
    svg: "https://i.postimg.cc/s2nNprDX/svgviewer-png-output-3.png",
  },
];

const TAG_MAP = {
  TODOS: "TODOS",
  "NUEVOS LANZAMIENTOS": "LANZAMIENTO",
  MEJORAS: "MEJORA",
  RETIRADOS: "RETIRADO",
} as const;

interface ClientProps {
  articles: ArticleType[];
  section?: string;
}

export default function ClientHomePage({
  articles,
  section = "Changelog",
}: ClientProps) {
  const [activeFilter, setActiveFilter] =
    useState<keyof typeof TAG_MAP>("TODOS");

  const filteredArticles =
    activeFilter === "TODOS"
      ? articles
      : articles.filter((article) => article.tag === TAG_MAP[activeFilter]);

  return (
    <div className="w-full px-6">
      <div className="changelog-grid-top h-[144px] md:h-[394px]" />
      <section className="mx-auto mt-8 md:max-w-[50.75rem] md:mt-[167px] flex flex-col mb-28">
        <h1 className="text-center font-mona font-[600] text-3xl md:text-5xl text-white md:text-start pb-2">
          {section}
        </h1>
        <div className="changelogline my-5" />
        <div className="grid grid-cols-2 md:flex gap-3">
          {statusBtnArray.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.title as keyof typeof TAG_MAP)}
              className={`flex items-center md:justify-between py-2.5 px-4 gap-2 rounded-3xl text-sm font-bold font-mono
              ${
                activeFilter === btn.title
                  ? "bg-[#21262d] text-white"
                  : "text-[#8b949e] hover:bg-[#21262d] hover:text-white"
              }`}
            >
              <Image
                src={btn.svg}
                alt={btn.title}
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>{btn.title}</span>
            </button>
          ))}
        </div>
        <section>
          {filteredArticles.length ? (
            filteredArticles.map((article) => (
              <ArticleItem key={article.id} {...article} />
            ))
          ) : (
            <div className="w-full flex py-12 ml-4 font-mona text-[#8b949e]">
              No se encontró la documentación solicitada...
            </div>
          )}
        </section>
      </section>
    </div>
  );
}
