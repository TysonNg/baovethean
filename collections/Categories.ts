import type { CollectionConfig } from "payload";
import { authenticated, publicRead } from "@/lib/permissions/access";
import { slugField } from "@/lib/payload/slugField";

export const Categories: CollectionConfig = {
    slug: "categories",
    access: {
        read: publicRead,
        create: authenticated,
        update: authenticated,
        delete: authenticated,
    },
    admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "slug", "displayOrder", "isActive"],
    },
    fields: [
        { name: "name", type: "text", required: true },
        slugField("name"),
        { name: "description", type: "textarea" },
        {
            name: "parent",
            type: "relationship",
            relationTo: "categories",
            admin: { position: "sidebar" },
        },
        { name: "image", type: "upload", relationTo: "media" },
        {
            name: "displayOrder",
            type: "number",
            defaultValue: 0,
            admin: { position: "sidebar" },
        },
        {
            name: "isActive",
            type: "checkbox",
            defaultValue: true,
            admin: { position: "sidebar" },
        },
    ],
};
