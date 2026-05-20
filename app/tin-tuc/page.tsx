import type { Metadata } from "next";
import BlogFeatured from "@/components/sections/blog/BlogFeatured";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import BlogHero from "@/components/sections/blog/BlogHero";
import { BLOG_ARTICLES, BLOG_CATEGORIES } from "@/lib/blog-data";

export const metadata: Metadata = {
    title: "Tin tức & Kiến thức an ninh",
    description:
        "Cập nhật kiến thức, kinh nghiệm và giải pháp bảo vệ chuyên nghiệp cho doanh nghiệp. Tin tức mới nhất từ Bảo vệ Thế An.",
};

export default function BlogPage() {
    const featured =
        BLOG_ARTICLES.find((article) => article.featured) ?? BLOG_ARTICLES[0];
    const articles = BLOG_ARTICLES.filter(
        (article) => article.slug !== featured.slug,
    );

    return (
        <>
            <BlogHero />
            <BlogFeatured article={featured} />
            <BlogGrid articles={articles} categories={BLOG_CATEGORIES} />
        </>
    );
}
