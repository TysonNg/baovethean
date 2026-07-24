import { revalidatePath } from "next/cache";
import type {
    CollectionAfterChangeHook,
    CollectionAfterDeleteHook,
    Payload,
} from "payload";
import type { Post } from "@/payload-types";

const safeRevalidate = (path: string) => {
    try {
        revalidatePath(path);
    } catch {
        // Ngoài ngữ cảnh render (vd: seed/CLI) — bỏ qua.
    }
};

const categoryIds = (post: Partial<Post>): number[] => {
    const raw = post.categories || [];
    return raw.map((c) => (typeof c === "object" && c !== null ? c.id : c));
};

const revalidateForPost = async (
    doc: Post,
    previousDoc: Post | undefined,
    payload: Payload,
) => {
    safeRevalidate("/");
    safeRevalidate("/bai-viet");
    safeRevalidate("/sitemap.xml");
    if (doc.slug) safeRevalidate(`/bai-viet/${doc.slug}`);
    if (previousDoc?.slug && previousDoc.slug !== doc.slug) {
        safeRevalidate(`/bai-viet/${previousDoc.slug}`);
    }

    const ids = [
        ...new Set([...categoryIds(doc), ...categoryIds(previousDoc || {})]),
    ];
    for (const id of ids) {
        try {
            const cat = await payload.findByID({
                collection: "categories",
                id,
                depth: 0,
            });
            if (cat?.slug) safeRevalidate(`/bai-viet/danh-muc/${cat.slug}`);
        } catch {
            // danh mục đã xóa — bỏ qua
        }
    }
};

export const revalidatePost: CollectionAfterChangeHook<Post> = async ({
    doc,
    previousDoc,
    req,
    context,
}) => {
    if (context?.disableRevalidate) return doc;
    await revalidateForPost(doc, previousDoc, req.payload);
    return doc;
};

export const revalidatePostDelete: CollectionAfterDeleteHook<Post> = async ({
    doc,
    req,
    context,
}) => {
    if (context?.disableRevalidate) return doc;
    await revalidateForPost(doc, undefined, req.payload);
    return doc;
};
