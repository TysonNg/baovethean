import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogArticle } from "@/types";
import { slugifyVi } from "@/lib/slug";
import { COMPANY } from "@/lib/data";

interface ArticleSidebarProps {
    article: BlogArticle;
}

export default function ArticleSidebar({ article }: ArticleSidebarProps) {
    const headings = article.body
        .filter((block) => block.type === "heading")
        .map((block) => ({
            text: block.text,
            id: slugifyVi(block.text),
        }));

    return (
        <aside className="lg:sticky lg:top-24 lg:self-start space-y-8">
            {headings.length > 0 && (
                <nav aria-label="Trong bài viết">
                    <p className="eyebrow text-gold-deep mb-4">
                        Trong bài viết
                    </p>
                    <ol className="space-y-3 border-l border-line pl-4">
                        {headings.map((heading, i) => (
                            <li key={heading.id}>
                                <Link
                                    href={`#${heading.id}`}
                                    className="flex gap-3 text-sm text-ink-3 hover:text-ink transition-colors"
                                >
                                    <span className="font-serif font-semibold text-gold-deep shrink-0">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span>{heading.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ol>
                </nav>
            )}

            <dl className="border-t border-b border-line divide-y divide-line">
                <div className="flex items-baseline justify-between py-3 gap-4">
                    <dt className="eyebrow text-ink-3">Ngày đăng</dt>
                    <dd className="text-sm font-semibold text-ink text-right">
                        {article.date}
                    </dd>
                </div>
                <div className="flex items-baseline justify-between py-3 gap-4">
                    <dt className="eyebrow text-ink-3">Thời gian đọc</dt>
                    <dd className="text-sm font-semibold text-ink text-right">
                        {article.readTime} phút
                    </dd>
                </div>
                <div className="flex items-baseline justify-between py-3 gap-4">
                    <dt className="eyebrow text-ink-3">Mã bài</dt>
                    <dd className="text-sm font-semibold text-ink text-right font-mono">
                        {article.code}
                    </dd>
                </div>
            </dl>

            <div className="bg-navy-900 text-white rounded p-6">
                <p className="eyebrow text-gold-soft mb-3">Tư vấn miễn phí</p>
                <h3 className="text-base font-semibold text-white mb-3">
                    Cần phương án bảo vệ cho {article.category.toLowerCase()} của
                    bạn?
                </h3>
                <p className="text-xs text-white/60 leading-relaxed mb-5">
                    Đội ngũ tư vấn sẵn sàng khảo sát thực địa và đề xuất giải
                    pháp phù hợp với quy mô vận hành.
                </p>
                <Link
                    href="/lien-he"
                    className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-deep transition-colors text-white text-sm font-semibold px-5 h-11 rounded w-full"
                >
                    Nhận khảo sát
                    <ArrowRight size={14} />
                </Link>
                <div className="border-t border-navy-700 mt-5 pt-5 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">
                        Hotline 24/7
                    </p>
                    <p className="text-lg font-serif font-bold text-gold">
                        {COMPANY.hotline}
                    </p>
                </div>
            </div>
        </aside>
    );
}
