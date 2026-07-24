import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import BlogCard from "@/components/sections/blog/BlogCard";
import BlogSidebar from "@/components/sections/blog/BlogSidebar";
import {
    getArticlesByCategory,
    getBlogCategories,
    getCategoryBySlug,
} from "@/lib/blog/source";

export const revalidate = 60;

const BASE = "https://baovethean.vn";

interface PageParams {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({
    params,
}: PageParams): Promise<Metadata> {
    const { slug } = await params;
    const category = await getCategoryBySlug(slug);

    if (!category) {
        return { title: "Chuyên mục không tồn tại" };
    }

    const url = `${BASE}/bai-viet/danh-muc/${category.slug}`;
    const title = `${category.name} — Tin tức Bảo vệ Thế An`;
    const description =
        category.description ||
        `Các bài viết chuyên sâu thuộc chuyên mục ${category.name} từ đội ngũ Bảo vệ Thế An.`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            type: "website",
            locale: "vi_VN",
            siteName: "Bảo vệ Thế An",
            title,
            description,
            url,
        },
        robots: { index: true, follow: true },
    };
}

export default async function CategoryPage({ params }: PageParams) {
    const { slug } = await params;
    const category = await getCategoryBySlug(slug);

    if (!category) {
        notFound();
    }

    const [articles, categories] = await Promise.all([
        getArticlesByCategory(category.id),
        getBlogCategories(),
    ]);

    const url = `${BASE}/bai-viet/danh-muc/${category.slug}`;
    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE },
            {
                "@type": "ListItem",
                position: 2,
                name: "Tin tức",
                item: `${BASE}/bai-viet`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: category.name,
                item: url,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />

            <section className="bg-bg-alt py-16 md:py-20">
                <Container>
                    <nav
                        aria-label="Breadcrumb"
                        className="flex items-center gap-2 text-sm text-ink-3 mb-8"
                    >
                        <Link href="/" className="hover:text-ink transition-colors">
                            Trang chủ
                        </Link>
                        <span aria-hidden="true">/</span>
                        <Link
                            href="/bai-viet"
                            className="hover:text-ink transition-colors"
                        >
                            Tin tức
                        </Link>
                        <span aria-hidden="true">/</span>
                        <span className="font-semibold text-ink" aria-current="page">
                            {category.name}
                        </span>
                    </nav>

                    <Eyebrow text="Chuyên mục" />
                    <h1 className="heading-display text-ink mt-4">
                        {category.name}
                    </h1>
                    {category.description && (
                        <p className="lead text-ink-3 mt-4 max-w-2xl">
                            {category.description}
                        </p>
                    )}
                </Container>
            </section>

            <section className="py-20 md:py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px] gap-8">
                        <div>
                            {articles.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {articles.map((article) => (
                                        <BlogCard
                                            key={article.slug}
                                            article={article}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="border border-line rounded p-8 text-center">
                                    <p className="text-sm text-ink-3">
                                        Chưa có bài viết trong chuyên mục này.
                                    </p>
                                </div>
                            )}
                        </div>

                        <BlogSidebar articles={articles} categories={categories} />
                    </div>
                </Container>
            </section>
        </>
    );
}
