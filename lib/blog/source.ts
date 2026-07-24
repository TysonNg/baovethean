import "server-only";
import { draftMode } from "next/headers";
import { getPayloadClient } from "@/lib/payload/getPayload";
import { lexicalToBlocks } from "@/lib/payload/lexical";
import type { BlogArticle, BlogCategory } from "@/types";
import type { Category, Media, Post, Tag, User } from "@/payload-types";

const initials = (name: string): string =>
    name
        .trim()
        .split(/\s+/)
        .map((word) => word[0])
        .slice(-2)
        .join("")
        .toUpperCase();

const formatDateVi = (iso: string): string => {
    const d = new Date(iso);
    return `${d.getDate()} tháng ${d.getMonth() + 1}, ${d.getFullYear()}`;
};

const mapPost = (post: Post): BlogArticle => {
    const cats = (post.categories || []).filter(
        (c): c is Category => typeof c === "object" && c !== null,
    );
    const firstCat = cats[0];
    const tags = (post.tags || [])
        .filter((t): t is Tag => typeof t === "object" && t !== null)
        .map((t) => t.name);
    const author =
        typeof post.author === "object" && post.author !== null
            ? (post.author as User)
            : null;
    const authorName = author?.name || "Bảo vệ Thế An";
    const iso = post.publishedAt || post.createdAt;
    const featuredImage =
        typeof post.featuredImage === "object" && post.featuredImage !== null
            ? (post.featuredImage as Media)
            : null;

    return {
        slug: post.slug,
        code: `BVT · ${String(post.id).padStart(3, "0")}`,
        category: firstCat?.name || "Tin tức",
        categorySlug: firstCat?.slug || "tin-tuc",
        date: formatDateVi(iso),
        isoDate: new Date(iso).toISOString().slice(0, 10),
        title: post.title,
        excerpt: post.excerpt || "",
        content: post.excerpt || "",
        body: lexicalToBlocks(post.content),
        tags,
        heroLabel: (firstCat?.name || "Bài viết").toUpperCase(),
        heroCaption: firstCat?.name || "Chuyên đề an ninh",
        imageLabel: firstCat?.name || post.title,
        author: authorName,
        authorRole: "Đội ngũ Bảo vệ Thế An",
        authorInitials: initials(authorName),
        authorBio: `Bài viết bởi ${authorName} — đội ngũ Bảo vệ Thế An.`,
        readTime: post.readingTime || 5,
        featured: post.isFeatured || false,
        image: featuredImage?.url || undefined,
        imageAlt: featuredImage?.alt || undefined,
    };
};

export const getArticles = async (): Promise<BlogArticle[]> => {
    const payload = await getPayloadClient();
    const res = await payload.find({
        collection: "posts",
        where: { _status: { equals: "published" } },
        sort: "-publishedAt",
        limit: 100,
        depth: 2,
    });
    return res.docs.map(mapPost);
};

export const getArticleBySlug = async (
    slug: string,
): Promise<BlogArticle | null> => {
    const { isEnabled: isDraft } = await draftMode();
    const payload = await getPayloadClient();
    const res = await payload.find({
        collection: "posts",
        where: isDraft
            ? { slug: { equals: slug } }
            : {
                  and: [
                      { slug: { equals: slug } },
                      { _status: { equals: "published" } },
                  ],
              },
        draft: isDraft,
        overrideAccess: isDraft,
        limit: 1,
        depth: 2,
    });
    return res.docs[0] ? mapPost(res.docs[0]) : null;
};

export const getCategoryBySlug = async (
    slug: string,
): Promise<Category | null> => {
    const payload = await getPayloadClient();
    const res = await payload.find({
        collection: "categories",
        where: {
            and: [{ slug: { equals: slug } }, { isActive: { equals: true } }],
        },
        limit: 1,
        depth: 0,
    });
    return res.docs[0] || null;
};

export const getArticlesByCategory = async (
    categoryId: number,
): Promise<BlogArticle[]> => {
    const payload = await getPayloadClient();
    const res = await payload.find({
        collection: "posts",
        where: {
            and: [
                { _status: { equals: "published" } },
                { categories: { in: [categoryId] } },
            ],
        },
        sort: "-publishedAt",
        limit: 100,
        depth: 2,
    });
    return res.docs.map(mapPost);
};

export const getBlogCategories = async (): Promise<BlogCategory[]> => {
    const payload = await getPayloadClient();
    const res = await payload.find({
        collection: "categories",
        where: { isActive: { equals: true } },
        sort: "displayOrder",
        limit: 100,
    });
    return res.docs.map((c) => ({ label: c.name, slug: c.slug }));
};
