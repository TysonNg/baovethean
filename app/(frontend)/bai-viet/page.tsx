import type { Metadata } from "next";
import BlogFeatured from "@/components/sections/blog/BlogFeatured";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import { getArticles, getBlogCategories } from "@/lib/blog/source";
import type { BlogArticle } from "@/types";
import PageBanner from "@/components/layout/PageBanner";
import { COMPANY } from "@/lib/data";

export const revalidate = 60;

const PAGE_URL = "https://baovethean.com/bai-viet";
const PAGE_TITLE = "Bài viết";
const PAGE_DESCRIPTION =
    "Cập nhật kiến thức, kinh nghiệm và giải pháp bảo vệ chuyên nghiệp cho doanh nghiệp. Hơn 12 bài viết chuyên sâu về quy trình, nhân sự, công nghệ và xu hướng an ninh từ đội ngũ Bảo vệ Thế An.";

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
        "tin tức bảo vệ",
        "kiến thức an ninh",
        "kinh nghiệm bảo vệ",
        "quy trình bảo vệ",
        "an ninh doanh nghiệp",
        "blog Bảo vệ Thế An",
        "công nghệ an ninh",
        "PCCC doanh nghiệp",
    ],
    alternates: { canonical: PAGE_URL },
    openGraph: {
        type: "website",
        locale: "vi_VN",
        siteName: "Bảo vệ Thế An",
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: PAGE_URL,
    },
    twitter: {
        card: "summary_large_image",
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
    },
    robots: { index: true, follow: true },
};

function BlogListJsonLd({ articles }: { articles: BlogArticle[] }) {
    const blog = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${PAGE_URL}#blog`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: "vi-VN",
        publisher: {
            "@type": "Organization",
            name: COMPANY.fullName,
            url: "https://baovethean.com",
        },
        blogPost: articles.slice(0, 12).map((article) => ({
            "@type": "BlogPosting",
            headline: article.title,
            description: article.excerpt,
            url: `${PAGE_URL}/${article.slug}`,
            datePublished: article.isoDate,
            dateModified: article.isoDate,
            articleSection: article.category,
            keywords: article.tags.join(", "),
            author: {
                "@type": "Organization",
                name: article.author,
            },
        })),
    };

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Trang chủ",
                item: "https://baovethean.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Tin tức",
                item: PAGE_URL,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blog) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
        </>
    );
}

export default async function BlogPage() {
    const [allArticles, categories] = await Promise.all([
        getArticles(),
        getBlogCategories(),
    ]);

    const featured =
        allArticles.find((article) => article.featured) ?? allArticles[0];
    const articles = featured
        ? allArticles.filter((article) => article.slug !== featured.slug)
        : allArticles;

    return (
        <>
            <BlogListJsonLd articles={allArticles} />
            <PageBanner title="Bài viết" />
            {featured && <BlogFeatured article={featured} />}
            <BlogGrid articles={articles} categories={categories} />
        </>
    );
}
