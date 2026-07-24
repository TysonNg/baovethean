import type { MetadataRoute } from "next";
import { getPayloadClient } from "@/lib/payload/getPayload";

const BASE = "https://baovethean.vn";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const payload = await getPayloadClient();
    const now = new Date();

    const [posts, categories] = await Promise.all([
        payload.find({
            collection: "posts",
            where: { _status: { equals: "published" } },
            sort: "-publishedAt",
            limit: 1000,
            depth: 0,
        }),
        payload.find({
            collection: "categories",
            where: { isActive: { equals: true } },
            limit: 1000,
            depth: 0,
        }),
    ]);

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1 },
        {
            url: `${BASE}/gioi-thieu`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE}/lien-he`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE}/dich-vu`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE}/quy-trinh`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE}/tuyen-dung`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${BASE}/bai-viet`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.7,
        },
    ];

    const categoryEntries: MetadataRoute.Sitemap = categories.docs.map((c) => ({
        url: `${BASE}/bai-viet/danh-muc/${c.slug}`,
        lastModified: new Date(c.updatedAt),
        changeFrequency: "weekly",
        priority: 0.5,
    }));

    const postEntries: MetadataRoute.Sitemap = posts.docs.map((p) => ({
        url: `${BASE}/bai-viet/${p.slug}`,
        lastModified: new Date(p.updatedAt),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticRoutes, ...categoryEntries, ...postEntries];
}
