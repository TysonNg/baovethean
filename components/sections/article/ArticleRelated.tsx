import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import type { BlogArticle } from "@/types";

interface ArticleRelatedProps {
    title: string;
    articles: BlogArticle[];
}

export default function ArticleRelated({ title, articles }: ArticleRelatedProps) {
    if (articles.length === 0) {
        return null;
    }

    return (
        <section className="bg-bg-alt py-20 md:py-24">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                    <div>
                        <Eyebrow text="Bài viết liên quan" />
                        <h2 className="heading-1 text-ink mt-4 max-w-2xl">
                            {title}
                        </h2>
                    </div>
                    <Link
                        href="/tin-tuc"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-ink border border-line bg-white rounded px-5 h-11 hover:border-gold transition-colors whitespace-nowrap self-start md:self-end"
                    >
                        Xem tất cả
                        <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <article
                            key={article.slug}
                            className="bg-white rounded overflow-hidden flex flex-col"
                        >
                            <Link
                                href={`/tin-tuc/${article.slug}`}
                                className="block"
                            >
                                <figure className="relative aspect-[16/10] bg-navy-800">
                                    <span className="absolute top-4 right-4 text-xs font-mono text-white/50 uppercase tracking-wider">
                                        {article.imageLabel}
                                    </span>
                                    <div
                                        className="absolute inset-0 opacity-30"
                                        style={{
                                            backgroundImage:
                                                "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 6px, transparent 6px 12px)",
                                        }}
                                        aria-hidden="true"
                                    />
                                    <figcaption className="absolute bottom-4 left-5 text-xs font-mono uppercase tracking-wider text-white/60">
                                        <span aria-hidden="true">▢ </span>
                                        {article.heroCaption}
                                    </figcaption>
                                </figure>
                            </Link>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-3 mb-3 text-xs uppercase tracking-wider">
                                    <span className="font-semibold text-gold-deep">
                                        {article.category}
                                    </span>
                                    <span className="text-ink-3">
                                        {article.date}
                                    </span>
                                </div>
                                <h3 className="text-base font-semibold text-ink mb-3">
                                    <Link
                                        href={`/tin-tuc/${article.slug}`}
                                        className="hover:text-gold-deep transition-colors"
                                    >
                                        {article.title}
                                    </Link>
                                </h3>
                                <p className="text-sm text-ink-3 leading-relaxed mb-5 line-clamp-3">
                                    {article.excerpt}
                                </p>
                                <Link
                                    href={`/tin-tuc/${article.slug}`}
                                    className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-gold-deep hover:text-gold transition-colors"
                                >
                                    Đọc tiếp
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
