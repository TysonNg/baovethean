import type { Metadata } from "next";
import BlogFeatured from "@/components/sections/blog/BlogFeatured";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import BlogHero from "@/components/sections/blog/BlogHero";
import { BLOG_ARTICLES, BLOG_CATEGORIES } from "@/lib/blog-data";

const PAGE_URL = "https://baovethean.vn/tin-tuc";
const PAGE_TITLE = "Tin tức & Kiến thức an ninh chuyên nghiệp";
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

function BlogListJsonLd() {
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
            name: "Công ty Cổ phần Dịch vụ Bảo vệ Thế An",
            url: "https://baovethean.vn",
        },
        blogPost: BLOG_ARTICLES.slice(0, 12).map((article) => ({
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
                item: "https://baovethean.vn",
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

export default function BlogPage() {
    const featured =
        BLOG_ARTICLES.find((article) => article.featured) ?? BLOG_ARTICLES[0];
    const articles = BLOG_ARTICLES.filter(
        (article) => article.slug !== featured.slug,
    );

    return (
        <>
            <BlogListJsonLd />
            <BlogHero />
            <BlogFeatured article={featured} />
            <BlogGrid articles={articles} categories={BLOG_CATEGORIES} />
        </>
    );
}
