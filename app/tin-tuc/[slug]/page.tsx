import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import ArticleHero from "@/components/sections/article/ArticleHero";
import ArticleSidebar from "@/components/sections/article/ArticleSidebar";
import ArticleBody from "@/components/sections/article/ArticleBody";
import ArticleTags from "@/components/sections/article/ArticleTags";
import ArticleAuthorFooter from "@/components/sections/article/ArticleAuthorFooter";
import ArticleRelated from "@/components/sections/article/ArticleRelated";
import { BLOG_ARTICLES } from "@/lib/blog-data";
import { COMPANY } from "@/lib/data";

interface PageParams {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return BLOG_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
    params,
}: PageParams): Promise<Metadata> {
    const { slug } = await params;
    const article = BLOG_ARTICLES.find((item) => item.slug === slug);

    if (!article) {
        return { title: "Bài viết không tồn tại" };
    }

    const url = `https://baovethean.vn/tin-tuc/${article.slug}`;

    const ogImage = `/og/tin-tuc/${article.slug}.jpg`;

    return {
        title: article.title,
        description: article.excerpt,
        keywords: article.tags,
        authors: [{ name: article.author }],
        category: article.category,
        alternates: {
            canonical: url,
            languages: { "vi-VN": url },
        },
        openGraph: {
            type: "article",
            locale: "vi_VN",
            siteName: "Bảo vệ Thế An",
            title: article.title,
            description: article.excerpt,
            url,
            publishedTime: article.isoDate,
            modifiedTime: article.isoDate,
            authors: [article.author],
            tags: article.tags,
            section: article.category,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.excerpt,
            images: [ogImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

function ArticleJsonLd({
    article,
    related,
}: {
    article: (typeof BLOG_ARTICLES)[number];
    related: typeof BLOG_ARTICLES;
}) {
    const url = `https://baovethean.vn/tin-tuc/${article.slug}`;
    const imageUrl = `https://baovethean.vn/og/tin-tuc/${article.slug}.jpg`;

    const articleBody = article.body.map((block) => block.text).join("\n\n");
    const wordCount = articleBody.split(/\s+/).filter(Boolean).length;
    const timeRequired = `PT${article.readTime}M`;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: article.title,
        alternativeHeadline: article.excerpt,
        description: article.excerpt,
        articleSection: article.category,
        articleBody,
        keywords: article.tags.join(", "),
        wordCount,
        timeRequired,
        datePublished: article.isoDate,
        dateModified: article.isoDate,
        inLanguage: "vi-VN",
        image: {
            "@type": "ImageObject",
            url: imageUrl,
            width: 1200,
            height: 630,
        },
        author: {
            "@type": "Organization",
            name: article.author,
            url: "https://baovethean.vn/gioi-thieu",
        },
        publisher: {
            "@type": "Organization",
            name: COMPANY.fullName,
            url: "https://baovethean.vn",
            logo: {
                "@type": "ImageObject",
                url: "https://baovethean.vn/logo.png",
                width: 512,
                height: 512,
            },
        },
        isPartOf: {
            "@type": "Blog",
            name: "Tin tức Bảo vệ Thế An",
            url: "https://baovethean.vn/tin-tuc",
        },
        about: article.tags.map((tag) => ({
            "@type": "Thing",
            name: tag,
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
                item: "https://baovethean.vn/tin-tuc",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: article.category,
                item: `https://baovethean.vn/tin-tuc?category=${article.categorySlug}`,
            },
            {
                "@type": "ListItem",
                position: 4,
                name: article.title,
                item: url,
            },
        ],
    };

    const relatedSchema = related.length
        ? {
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: related.map((item, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  url: `https://baovethean.vn/tin-tuc/${item.slug}`,
                  name: item.title,
              })),
          }
        : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
            {relatedSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(relatedSchema),
                    }}
                />
            )}
        </>
    );
}

export default async function ArticleDetailPage({ params }: PageParams) {
    const { slug } = await params;
    const article = BLOG_ARTICLES.find((item) => item.slug === slug);

    if (!article) {
        notFound();
    }

    const related = BLOG_ARTICLES.filter(
        (item) =>
            item.slug !== article.slug &&
            item.category === article.category,
    ).slice(0, 3);

    const filler = BLOG_ARTICLES.filter(
        (item) =>
            item.slug !== article.slug &&
            !related.some((r) => r.slug === item.slug),
    ).slice(0, Math.max(0, 3 - related.length));

    const relatedList = [...related, ...filler];

    return (
        <>
            <ArticleJsonLd article={article} related={relatedList} />
            <ArticleHero article={article} />

            <section className="bg-white pb-20 md:pb-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)] gap-10 lg:gap-16">
                        <ArticleSidebar article={article} />
                        <div>
                            <ArticleBody article={article} />
                            <ArticleTags tags={article.tags} />
                            <ArticleAuthorFooter article={article} />
                        </div>
                    </div>
                </Container>
            </section>

            <ArticleRelated
                title={`Đọc thêm về ${article.category.toLowerCase()}`}
                articles={relatedList}
            />
        </>
    );
}
