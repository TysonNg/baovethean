import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/ui/Photo";
import type { BlogArticle } from "@/types";

interface BlogCardProps {
    article: BlogArticle;
}

export default function BlogCard({ article }: BlogCardProps) {
    return (
        <article>
            <Photo
                label={article.imageLabel}
                className="aspect-[16/10] mb-4"
                overlay={
                    <div className="p-4">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                            Bài viết · {article.category}
                        </span>
                    </div>
                }
            />
            <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold text-gold-deep uppercase tracking-wider">
                    {article.category}
                </span>
                <span className="text-xs text-ink-3">{article.date}</span>
            </div>
            <h3 className="heading-3 text-ink mb-2">{article.title}</h3>
            <p className="text-sm text-ink-3 leading-relaxed mb-3 line-clamp-3">
                {article.excerpt}
            </p>
            <Link
                href={`/tin-tuc/${article.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-gold-deep hover:text-gold transition-colors"
            >
                Đọc bài viết
                <ArrowRight size={14} />
            </Link>
        </article>
    );
}
