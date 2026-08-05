import type { MetadataRoute } from "next";
import { getPayloadClient } from "@/lib/payload/getPayload";

const BASE = "https://baovethean.com";

// Posts and categories come from Payload at request time, never during build.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1 },
        {
            url: `${BASE}/gioi-thieu`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE}/ho-so-nang-luc`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE}/phap-ly-chung-nhan`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
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
            url: `${BASE}/dich-vu/bao-ve-tphcm`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE}/du-an`,
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

    try {
        const payload = await getPayloadClient();
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
    } catch {
        // Keep static URLs crawlable while the CMS database is unavailable.
        return staticRoutes;
    }
}
