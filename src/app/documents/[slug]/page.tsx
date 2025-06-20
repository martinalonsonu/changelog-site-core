import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticleData } from "@/lib/articles";
import { notFound } from "next/navigation";

const Article = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const articleData = await getArticleData(slug);
  if (!articleData) {
    notFound();
  }
  let colorTag = "#033a16";
  if (articleData.tag === "MEJORA") colorTag = "#0a3069";
  if (articleData.tag === "RETIRADO") colorTag = "#67060c";

  return (
    <article>
      <div className="w-full flex justify-between font-poppins border-t-1 border-b-1 border-[#161b22] py-6 px-6">
        <div className="max-w-[1232px] w-full m-auto">
          <Link href={"/"} className="flex flex-row gap-1 place-items-center">
            <ArrowLeftIcon width={20} />
            <p className="font-mono hover:underline underline-offset-4 ml-2.5">
              REGRESAR AL CHANGELOG
            </p>
          </Link>
        </div>
      </div>
      <section className="w-full flex flex-col">
        <header className="flex flex-col justify-center items-center px-6 p-6 md:py-16 border-b-1 border-[#161b22]">
          <span
            style={{ backgroundColor: colorTag }}
            className="rounded-[4px] font-mono font-bold text-white text-[12px] px-1.5 py-1 mb-4"
          >
            {articleData.tag}
          </span>
          <p className="font-mono uppercase text-[#8b949e] font-medium text-base mb-5">
            {articleData.date.toString()} .{" "}
            <a
              className="underline underline-offset-4"
              href={`/projects/${articleData.projectSlug}`}
            >
              {articleData.project}
            </a>
          </p>
          <h1 className="max-w-[800px] text-white text-2xl md:text-5xl font-bold text-center">
            {articleData.title}
          </h1>
        </header>
        <div
          className="max-w-[600px] w-full mx-auto mt-2.5 md:mt-16 px-6 md:px-0 content"
          dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
        />
      </section>
    </article>
  );
};

export default Article;
