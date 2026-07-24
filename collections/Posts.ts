import type { CollectionConfig, CollectionBeforeChangeHook } from "payload";
import { authenticated } from "@/lib/permissions/access";
import { slugField } from "@/lib/payload/slugField";
import { calcReadingTime } from "@/lib/payload/lexical";
import { revalidatePost, revalidatePostDelete } from "@/lib/payload/revalidate";

const enrichPost: CollectionBeforeChangeHook = ({ data }) => {
    const next = { ...data };
    if (next.content) {
        next.readingTime = calcReadingTime(next.content);
    }
    if (next._status === "published" && !next.publishedAt) {
        next.publishedAt = new Date().toISOString();
    }
    return next;
};

export const Posts: CollectionConfig = {
    slug: "posts",
    access: {
        // Public/API chỉ thấy bài đã publish; user đăng nhập thấy cả draft.
        read: ({ req: { user } }) => {
            if (user) return true;
            return { _status: { equals: "published" } };
        },
        create: authenticated,
        update: authenticated,
        delete: authenticated,
    },
    admin: {
        useAsTitle: "title",
        defaultColumns: ["title", "slug", "_status", "publishedAt"],
        preview: (doc) => {
            if (typeof doc?.slug !== "string") return null;
            const base = process.env.NEXT_PUBLIC_SERVER_URL || "";
            const secret = process.env.PAYLOAD_PREVIEW_SECRET || "";
            return `${base}/preview?secret=${secret}&slug=${doc.slug}`;
        },
    },
    versions: {
        maxPerDoc: 20,
        drafts: {
            autosave: { interval: 375 },
            schedulePublish: true,
        },
    },
    hooks: {
        beforeChange: [enrichPost],
        afterChange: [revalidatePost],
        afterDelete: [revalidatePostDelete],
    },
    fields: [
        {
            type: "tabs",
            tabs: [
                {
                    label: "Nội dung",
                    fields: [
                        { name: "title", type: "text", required: true },
                        { name: "excerpt", type: "textarea" },
                        { name: "content", type: "richText", required: true },
                        {
                            name: "featuredImage",
                            type: "upload",
                            relationTo: "media",
                        },
                    ],
                },
                {
                    label: "Phân loại",
                    fields: [
                        {
                            name: "categories",
                            type: "relationship",
                            relationTo: "categories",
                            hasMany: true,
                        },
                        {
                            name: "tags",
                            type: "relationship",
                            relationTo: "tags",
                            hasMany: true,
                        },
                        {
                            name: "relatedPosts",
                            type: "relationship",
                            relationTo: "posts",
                            hasMany: true,
                            filterOptions: ({ id }) => ({
                                id: { not_equals: id },
                            }),
                        },
                    ],
                },
            ],
        },
        slugField("title"),
        {
            name: "author",
            type: "relationship",
            relationTo: "users",
            defaultValue: ({ user }) => user?.id,
            admin: { position: "sidebar" },
        },
        {
            name: "publishedAt",
            type: "date",
            admin: { position: "sidebar" },
        },
        {
            name: "isFeatured",
            type: "checkbox",
            defaultValue: false,
            admin: { position: "sidebar" },
        },
        {
            name: "allowIndex",
            type: "checkbox",
            defaultValue: true,
            admin: { position: "sidebar" },
        },
        {
            name: "canonicalUrl",
            type: "text",
            admin: { position: "sidebar" },
        },
        {
            name: "readingTime",
            type: "number",
            admin: { position: "sidebar", readOnly: true },
        },
    ],
};
