import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/ui/Photo";
import type { BlogArticle } from "@/types";

interface BlogCardProps {
    article: BlogArticle;
}

export default function BlogCard({ article }: BlogCardProps) {
    return (
        <article className="group flex h-full flex-col">
            <Link
                href={`/bai-viet/${article.slug}`}
                    className="block rounded-lg overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label={`Đọc bài viết: ${article.title}`}
            >
                <Photo
                    label={article.imageLabel}
                    className="aspect-[16/9] mb-4 transition-transform duration-300 group-hover:scale-[1.02]"
                    overlay={
                        <div className="p-4">
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white uppercase tracking-wider">
                                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                                Bài viết · {article.category}
                            </span>
                        </div>
                    }
                />
            </Link>
            <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold text-gold-deep uppercase tracking-wider">
                    {article.category}
                </span>
                <span className="text-xs text-ink-3">{article.date}</span>
            </div>
            <h3 className="heading-3 text-ink mb-2">
                <Link
                    href={`/bai-viet/${article.slug}`}
                    className="hover:text-gold-deep transition-colors"
                >
                    {article.title}
                </Link>
            </h3>
            <p className="text-sm text-ink-3 leading-relaxed mb-3 line-clamp-2">
                {article.excerpt}
            </p>
            <Link
                href={`/bai-viet/${article.slug}`}
                className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-gold-deep hover:text-gold transition-colors"
            >
                Đọc bài viết
                <ArrowRight size={14} />
            </Link>
        </article>
    );
}
