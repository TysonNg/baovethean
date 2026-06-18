import type { MetadataRoute } from "next";
import { BLOG_ARTICLES } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const articleEntries: MetadataRoute.Sitemap = BLOG_ARTICLES.map(
        (article) => ({
            url: `https://baovethean.vn/tin-tuc/${article.slug}`,
            lastModified: new Date(article.isoDate),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        }),
    );

    return [
        {
            url: "https://baovethean.vn",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://baovethean.vn/gioi-thieu",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://baovethean.vn/lien-he",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://baovethean.vn/dich-vu",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://baovethean.vn/quy-trinh",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://baovethean.vn/tuyen-dung",
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://baovethean.vn/tin-tuc",
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        ...articleEntries,
    ];
}
