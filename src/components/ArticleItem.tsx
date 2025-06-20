import { monthDate, MonthKey } from "@/lib/date";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  id: string;
  tag: "LANZAMIENTO" | "MEJORA" | "RETIRADO";
  date: string;
  title: string;
  project: string;
  projectSlug: string;
}

const ArticleItem: FC<Props> = (props) => {
  const { id, date, project, tag, title, projectSlug } = props;
  const transformDate = (date: string) => {
    const destructuredDate = date.split("-");
    return `${monthDate(destructuredDate[1] as MonthKey)}.${
      destructuredDate[0]
    }`;
  };
  return (
    <article className="flex flex-col">
      <div className="flex flex-col items-start md:flex-row justify-between md:items-center py-8">
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-row gap-2.5 items-center text-[#8b949e] text-[14px] uppercase font-mono font-[400] leading-none">
            <time>{transformDate(date)}</time>
            <span className="bg-[#161b22] rounded-[4px] px-1.5 py-1">
              {tag}
            </span>
          </div>
          <Link
            href={`/documents/${id}`}
            className="max-w-[536px] text-base font-bold font-mona"
          >
            {title}
          </Link>
        </div>
        <Link
          href={`/projects/${projectSlug}`}
          className="mt-2.5 md:mt-0 md:px-2 md:py-1 rounded-[4px] text-[#8b949e] text-[14px] font-mono font-bold hover:text-white hover:bg-[#161b22] uppercase"
        >
          {project}
        </Link>
      </div>
      <div className="changelogline--article" />
    </article>
  );
};

export default ArticleItem;
