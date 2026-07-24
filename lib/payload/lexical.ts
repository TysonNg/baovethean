import type { ArticleBlock } from "@/types";

type LexicalNode = { type?: string; text?: string; children?: LexicalNode[] };

const walk = (node: LexicalNode): string => {
    let out = typeof node.text === "string" ? node.text : "";
    if (Array.isArray(node.children)) {
        out += " " + node.children.map(walk).join(" ");
    }
    return out;
};

/** Rút toàn bộ text thuần từ nội dung Lexical đã serialize. */
export const extractPlainText = (content: unknown): string => {
    const root = (content as { root?: LexicalNode } | null | undefined)?.root;
    if (!root) return "";
    return walk(root).replace(/\s+/g, " ").trim();
};

/** Thời gian đọc ước tính (phút), ~200 từ/phút, tối thiểu 1. */
export const calcReadingTime = (content: unknown): number => {
    const words = extractPlainText(content).split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
};

/** Lexical → khối bài viết (paragraph/heading/quote) để render bằng component hiện có. */
export const lexicalToBlocks = (content: unknown): ArticleBlock[] => {
    const root = (content as { root?: LexicalNode } | null | undefined)?.root;
    if (!root?.children) return [];
    return root.children
        .map((child): ArticleBlock => {
            const text = walk(child).replace(/\s+/g, " ").trim();
            if (child.type === "heading") return { type: "heading", text };
            if (child.type === "quote") return { type: "quote", text };
            return { type: "paragraph", text };
        })
        .filter((block) => block.text.length > 0);
};

const textNode = (text: string) => ({
    type: "text",
    text,
    format: 0,
    style: "",
    mode: "normal",
    detail: 0,
    version: 1,
});

/** Khối bài viết → Lexical editor state (dùng khi seed dữ liệu tĩnh vào Payload). */
export const blocksToLexical = (blocks: ArticleBlock[]) => ({
    root: {
        type: "root",
        format: "",
        indent: 0,
        version: 1,
        direction: "ltr",
        children: blocks.map((block) => {
            const children = [textNode(block.text)];
            if (block.type === "heading") {
                return {
                    type: "heading",
                    tag: "h2",
                    format: "",
                    indent: 0,
                    version: 1,
                    direction: "ltr",
                    children,
                };
            }
            if (block.type === "quote") {
                return {
                    type: "quote",
                    format: "",
                    indent: 0,
                    version: 1,
                    direction: "ltr",
                    children,
                };
            }
            return {
                type: "paragraph",
                format: "",
                indent: 0,
                version: 1,
                direction: "ltr",
                textFormat: 0,
                children,
            };
        }),
    },
});
