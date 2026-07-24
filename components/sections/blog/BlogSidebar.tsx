import Link from "next/link";
import { Search } from "lucide-react";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import type { BlogArticle, BlogCategory } from "@/types";

interface BlogSidebarProps {
    articles: BlogArticle[];
    categories: BlogCategory[];
}

export default function BlogSidebar({ articles, categories }: BlogSidebarProps) {
    return (
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
                <Search
                    aria-hidden="true"
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-3"
                />
                <input
                    type="search"
                    placeholder="Tìm kiếm bài viết..."
                    className="w-full bg-white border border-line rounded-lg pl-10 pr-4 h-11 text-sm text-ink outline-none transition-colors placeholder:text-ink-3 focus:border-gold focus:ring-2 focus:ring-gold/15"
                />
            </div>

            <div className="border border-line rounded-lg p-4">
                <h4 className="text-sm font-semibold text-ink mb-3">
                    Bài viết đọc nhiều
                </h4>
                <div className="space-y-3">
                    {articles.slice(0, 4).map((article) => (
                        <Link
                            key={article.slug}
                            href={`/bai-viet/${article.slug}`}
                            className="flex gap-3 group rounded focus-visible:outline-2 focus-visible:outline-gold"
                        >
                            <div className="w-16 h-12 shrink-0 rounded bg-navy-800 relative overflow-hidden">
                                <span className="absolute inset-0 flex items-end p-1 text-[8px] text-white/60 font-mono">{article.imageLabel}</span>
                            </div>
                            <span className="min-w-0 text-xs leading-relaxed text-ink line-clamp-2 group-hover:text-gold-deep transition-colors">
                                {article.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="border border-line rounded-lg p-4">
                <h4 className="text-sm font-semibold text-ink mb-3">
                    Chuyên mục
                </h4>
                <div className="space-y-1">
                    {categories.map((category) => {
                        const count = articles.filter(
                            (article) => article.category === category.label,
                        ).length;

                        return (
                            <Link
                                href={`/bai-viet/danh-muc/${category.slug}`}
                                key={category.slug}
                                className="flex items-center justify-between gap-4 rounded px-2 py-2 text-sm hover:bg-bg-alt transition-colors"
                            >
                                <span className="text-ink-3 truncate">
                                    {category.label}
                                </span>
                                <span className="rounded-full bg-bg-alt px-2 py-0.5 text-xs font-medium text-ink">
                                    {count}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="bg-navy-900 text-white rounded-lg p-5">
                <Eyebrow text="Liên hệ tư vấn" light />
                <p className="text-sm text-white/60 mt-3 mb-3">
                    Cần tư vấn dịch vụ bảo vệ? Gọi hotline hoặc để lại thông tin.
                </p>
                <p className="text-xl font-bold text-gold font-serif mb-3">
                    1900 8688
                </p>
                <Button
                    href="/lien-he"
                    variant="outline"
                    arrow
                    className="w-full border-navy-700 text-white hover:border-gold-soft"
                >
                    Yêu cầu khảo sát
                </Button>
            </div>
        </aside>
    );
}
