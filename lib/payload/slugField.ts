import type { Field } from "payload";
import { slugifyVi } from "@/lib/slug";

/**
 * Field slug tự sinh từ một field nguồn (mặc định `title`) nếu để trống.
 * Chuẩn hóa tiếng Việt qua slugifyVi. Dùng cho Posts/Categories/Tags...
 */
export const slugField = (from = "title"): Field => ({
    name: "slug",
    type: "text",
    required: true,
    unique: true,
    index: true,
    admin: { position: "sidebar" },
    hooks: {
        beforeValidate: [
            ({ value, data }) => {
                if (typeof value === "string" && value.length > 0) {
                    return slugifyVi(value);
                }
                const source = data?.[from];
                return typeof source === "string" ? slugifyVi(source) : value;
            },
        ],
    },
});
