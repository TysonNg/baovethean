"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import { BLOG_PER_PAGE } from "@/lib/blog-data";
import type { BlogArticle, BlogCategory } from "@/types";
import BlogCard from "./BlogCard";
import BlogFilters from "./BlogFilters";
import BlogPagination from "./BlogPagination";
import BlogSidebar from "./BlogSidebar";

interface BlogGridProps {
    articles: BlogArticle[];
    categories: BlogCategory[];
}

export default function BlogGrid({ articles, categories }: BlogGridProps) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = useMemo(() => {
        if (!activeCategory) {
            return articles;
        }

        const category = categories.find((item) => item.slug === activeCategory);

        if (!category) {
            return articles;
        }

        return articles.filter((article) => article.category === category.label);
    }, [activeCategory, articles, categories]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / BLOG_PER_PAGE));
    const pageStart = (currentPage - 1) * BLOG_PER_PAGE;
    const paginated = filtered.slice(pageStart, pageStart + BLOG_PER_PAGE);
    const visibleStart = filtered.length === 0 ? 0 : pageStart + 1;
    const visibleEnd = Math.min(pageStart + BLOG_PER_PAGE, filtered.length);

    function handleCategoryChange(slug: string | null) {
        setActiveCategory(slug);
        setCurrentPage(1);
    }

    function handlePageChange(page: number) {
        setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    }

    return (
        <section className="marketing-section">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-8 lg:gap-10">
                    <div>
                        <div className="flex flex-col gap-4 mb-6">
                            <div className="overflow-x-auto -mx-1 px-1">
                                <BlogFilters
                                    categories={categories}
                                    activeCategory={activeCategory}
                                    onCategoryChange={handleCategoryChange}
                                />
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-xs text-ink-3">
                                    Hiển thị {visibleStart}-{visibleEnd} trong {filtered.length} bài viết
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {paginated.map((article) => (
                                <BlogCard key={article.slug} article={article} />
                            ))}
                        </div>

                        {filtered.length === 0 && (
                            <div className="border border-line rounded p-8 text-center">
                                <p className="text-sm text-ink-3">
                                    Chưa có bài viết trong chuyên mục này.
                                </p>
                            </div>
                        )}

                        {totalPages > 1 && (
                            <BlogPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </div>

                    <BlogSidebar articles={articles} categories={categories} />
                </div>
            </Container>
        </section>
    );
}
