import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogArticle } from "@/types";

interface ArticleAuthorFooterProps {
    article: BlogArticle;
}

export default function ArticleAuthorFooter({
    article,
}: ArticleAuthorFooterProps) {
    return (
        <div className="max-w-2xl mt-10 border border-line rounded bg-bg-alt p-6 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center shrink-0">
                <span className="text-sm font-semibold text-gold">
                    {article.authorInitials}
                </span>
            </div>
            <div className="flex-1">
                <p className="text-sm font-semibold text-ink mb-1">
                    {article.author}
                </p>
                <p className="text-xs text-ink-3 leading-relaxed">
                    {article.authorBio}
                </p>
            </div>
            <Link
                href="/bai-viet"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink border border-line bg-white rounded px-4 h-10 hover:border-gold transition-colors whitespace-nowrap"
            >
                Tất cả bài viết
                <ArrowRight size={14} />
            </Link>
        </div>
    );
}
