import { getPayload } from "payload";
import config from "@payload-config";
import { BLOG_ARTICLES, BLOG_CATEGORIES } from "@/lib/blog-data";
import { blocksToLexical } from "@/lib/payload/lexical";
import { slugifyVi } from "@/lib/slug";
import type { Post } from "@/payload-types";

const run = async () => {
    console.log("Seed: khởi tạo Payload...");
    const payload = await getPayload({ config });

    const catIdBySlug = new Map<string, number>();
    for (const cat of BLOG_CATEGORIES) {
        const existing = await payload.find({
            collection: "categories",
            where: { slug: { equals: cat.slug } },
            limit: 1,
        });
        let id = existing.docs[0]?.id;
        if (!id) {
            const doc = await payload.create({
                collection: "categories",
                data: { name: cat.label, slug: cat.slug, isActive: true },
            });
            id = doc.id;
        }
        catIdBySlug.set(cat.slug, id as number);
    }

    const tagIdByName = new Map<string, number>();
    const ensureTag = async (name: string): Promise<number> => {
        const cached = tagIdByName.get(name);
        if (cached) return cached;
        const existing = await payload.find({
            collection: "tags",
            where: { name: { equals: name } },
            limit: 1,
        });
        let id = existing.docs[0]?.id;
        if (!id) {
            const doc = await payload.create({
                collection: "tags",
                data: { name, slug: slugifyVi(name) },
            });
            id = doc.id;
        }
        tagIdByName.set(name, id as number);
        return id as number;
    };

    let created = 0;
    let skipped = 0;
    for (const article of BLOG_ARTICLES) {
        const existing = await payload.find({
            collection: "posts",
            where: { slug: { equals: article.slug } },
            limit: 1,
        });
        if (existing.docs[0]) {
            skipped++;
            continue;
        }

        const tagIds: number[] = [];
        for (const tag of article.tags) tagIds.push(await ensureTag(tag));
        const catId = catIdBySlug.get(article.categorySlug);

        await payload.create({
            collection: "posts",
            data: {
                title: article.title,
                slug: article.slug,
                excerpt: article.excerpt,
                // Lexical hợp lệ tại runtime; cast để khớp kiểu strong-typed generated.
                content: blocksToLexical(article.body) as unknown as Post["content"],
                categories: catId ? [catId] : [],
                tags: tagIds,
                isFeatured: article.featured || false,
                publishedAt: new Date(article.isoDate).toISOString(),
                _status: "published",
            },
            context: { disableRevalidate: true },
        });
        created++;
    }

    payload.logger.info(`Seed hoàn tất. Tạo mới ${created}, bỏ qua ${skipped}.`);
    process.exit(0);
};

await run().catch((err) => {
    console.error("Seed lỗi:", err);
    process.exit(1);
});
