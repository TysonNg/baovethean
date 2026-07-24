import path from "path";
import type { CollectionConfig, CollectionBeforeChangeHook } from "payload";
import { authenticated, publicRead } from "@/lib/permissions/access";

const setUploadedBy: CollectionBeforeChangeHook = ({ data, operation, req }) => {
    if (operation === "create" && req.user) {
        return { ...data, uploadedBy: req.user.id };
    }
    return data;
};

export const Media: CollectionConfig = {
    slug: "media",
    access: {
        read: publicRead,
        create: authenticated,
        update: authenticated,
        delete: authenticated,
    },
    admin: {
        useAsTitle: "filename",
    },
    upload: {
        staticDir: path.resolve(process.cwd(), "media"),
        mimeTypes: ["image/*"],
        adminThumbnail: "thumbnail",
        focalPoint: true,
        imageSizes: [
            { name: "thumbnail", width: 300, height: 300, position: "centre" },
            { name: "card", width: 768, height: undefined },
            { name: "feature", width: 1200, height: undefined },
            { name: "og", width: 1200, height: 630, position: "centre" },
        ],
    },
    hooks: {
        beforeChange: [setUploadedBy],
    },
    fields: [
        {
            name: "alt",
            type: "text",
            required: true,
        },
        {
            name: "caption",
            type: "text",
        },
        {
            name: "description",
            type: "textarea",
        },
        {
            name: "uploadedBy",
            type: "relationship",
            relationTo: "users",
            admin: {
                readOnly: true,
                position: "sidebar",
            },
        },
    ],
};
