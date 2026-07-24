import type { CollectionConfig } from "payload";
import { authenticated, publicRead } from "@/lib/permissions/access";
import { slugField } from "@/lib/payload/slugField";

export const Tags: CollectionConfig = {
    slug: "tags",
    access: {
        read: publicRead,
        create: authenticated,
        update: authenticated,
        delete: authenticated,
    },
    admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "slug"],
    },
    fields: [
        { name: "name", type: "text", required: true },
        slugField("name"),
        { name: "description", type: "textarea" },
    ],
};
