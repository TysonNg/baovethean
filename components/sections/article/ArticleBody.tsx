import { Quote } from "lucide-react";
import type { BlogArticle } from "@/types";
import { slugifyVi } from "@/lib/slug";

interface ArticleBodyProps {
    article: BlogArticle;
}

export default function ArticleBody({ article }: ArticleBodyProps) {
    return (
        <article className="max-w-2xl">
            {article.body.map((block, i) => {
                if (block.type === "heading") {
                    return (
                        <h2
                            key={i}
                            id={slugifyVi(block.text)}
                            className="heading-2 text-ink mt-12 mb-5 scroll-mt-24"
                        >
                            {block.text}
                        </h2>
                    );
                }

                if (block.type === "quote") {
                    return (
                        <blockquote
                            key={i}
                            className="my-10 border-l-2 border-gold bg-bg-alt px-6 py-6 flex gap-4"
                        >
                            <Quote
                                size={22}
                                className="text-gold shrink-0 mt-1"
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />
                            <p className="text-lg font-serif text-ink leading-relaxed italic">
                                {block.text}
                            </p>
                        </blockquote>
                    );
                }

                return (
                    <p
                        key={i}
                        className="text-ink leading-relaxed mb-5 last:mb-0"
                    >
                        {block.text}
                    </p>
                );
            })}
        </article>
    );
}
