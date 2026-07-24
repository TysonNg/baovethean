import type { GlobalConfig } from "payload";
import { isAdmin, publicRead } from "@/lib/permissions/access";

export const SiteSettings: GlobalConfig = {
    slug: "site-settings",
    access: {
        read: publicRead,
        update: isAdmin,
    },
    fields: [
        {
            type: "tabs",
            tabs: [
                {
                    label: "Chung",
                    fields: [
                        { name: "siteName", type: "text", required: true },
                        { name: "siteDescription", type: "textarea" },
                        { name: "siteUrl", type: "text" },
                        { name: "logo", type: "upload", relationTo: "media" },
                        { name: "favicon", type: "upload", relationTo: "media" },
                        {
                            name: "defaultOpenGraphImage",
                            type: "upload",
                            relationTo: "media",
                        },
                    ],
                },
                {
                    label: "Công ty",
                    fields: [
                        { name: "companyName", type: "text" },
                        { name: "taxCode", type: "text" },
                        { name: "address", type: "textarea" },
                        { name: "phone", type: "text" },
                        { name: "hotline", type: "text" },
                        { name: "email", type: "email" },
                        { name: "workingHours", type: "text" },
                        { name: "googleMapsUrl", type: "text" },
                        {
                            name: "socialLinks",
                            type: "array",
                            fields: [
                                {
                                    name: "platform",
                                    type: "select",
                                    options: [
                                        { label: "Facebook", value: "facebook" },
                                        { label: "YouTube", value: "youtube" },
                                        { label: "TikTok", value: "tiktok" },
                                        { label: "Zalo", value: "zalo" },
                                        { label: "LinkedIn", value: "linkedin" },
                                    ],
                                },
                                { name: "url", type: "text", required: true },
                            ],
                        },
                    ],
                },
                {
                    label: "SEO",
                    fields: [
                        {
                            name: "googleSearchConsoleVerification",
                            type: "text",
                        },
                        {
                            name: "defaultSEO",
                            type: "group",
                            fields: [
                                { name: "metaTitle", type: "text" },
                                { name: "metaDescription", type: "textarea" },
                            ],
                        },
                    ],
                },
                {
                    label: "CTA",
                    fields: [
                        {
                            name: "contactCTA",
                            type: "group",
                            fields: [
                                { name: "title", type: "text" },
                                { name: "description", type: "textarea" },
                                { name: "buttonText", type: "text" },
                                { name: "buttonUrl", type: "text" },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
