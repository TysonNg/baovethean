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
        <aside className="space-y-6">
            <div className="relative">
                <Search
                    aria-hidden="true"
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-3"
                />
                <input
                    type="search"
                    placeholder="Tìm kiếm bài viết..."
                    className="w-full bg-bg-alt border border-line rounded pl-10 pr-4 h-12 text-sm text-ink outline-none transition-colors placeholder:text-ink-3 focus:border-gold"
                />
            </div>

            <div className="border border-line rounded p-5">
                <h4 className="text-sm font-semibold text-ink mb-4">
                    Bài viết đọc nhiều
                </h4>
                <div className="space-y-3">
                    {articles.slice(0, 4).map((article, index) => (
                        <Link
                            key={article.slug}
                            href={`/tin-tuc/${article.slug}`}
                            className="flex gap-3 group"
                        >
                            <span className="text-sm font-semibold text-gold-deep font-serif">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="text-sm text-ink group-hover:text-gold-deep transition-colors">
                                {article.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="border border-line rounded p-5">
                <h4 className="text-sm font-semibold text-ink mb-4">
                    Chuyên mục
                </h4>
                <div className="space-y-2">
                    {categories.map((category) => {
                        const count = articles.filter(
                            (article) => article.category === category.label,
                        ).length;

                        return (
                            <div
                                key={category.slug}
                                className="flex justify-between gap-4 text-sm"
                            >
                                <span className="text-ink-3">
                                    {category.label}
                                </span>
                                <span className="text-ink font-medium">
                                    {count}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="bg-navy-900 text-white rounded p-6">
                <Eyebrow text="Liên hệ tư vấn" light />
                <p className="text-sm text-white/60 mt-3 mb-4">
                    Cần tư vấn dịch vụ bảo vệ? Gọi hotline hoặc để lại thông
                    tin.
                </p>
                <p className="text-xl font-bold text-gold font-serif mb-4">
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
