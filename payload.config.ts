import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { seoPlugin } from "@payloadcms/plugin-seo";
import type { GenerateTitle, GenerateDescription } from "@payloadcms/plugin-seo/types";
import sharp from "sharp";

import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";
import { Posts } from "@/collections/Posts";
import { Categories } from "@/collections/Categories";
import { Tags } from "@/collections/Tags";
import { SiteSettings } from "@/globals/SiteSettings";
import { storagePlugins } from "@/lib/storage";

type SeoDoc = { title?: string; name?: string; excerpt?: string; description?: string };

const generateSeoTitle: GenerateTitle<SeoDoc> = ({ doc }) =>
    doc?.title || doc?.name || "";

const generateSeoDescription: GenerateDescription<SeoDoc> = ({ doc }) =>
    doc?.excerpt || doc?.description || "";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: { baseDir: path.resolve(dirname) },
    },
    collections: [Users, Media, Posts, Categories, Tags],
    globals: [SiteSettings],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || "",
    typescript: {
        outputFile: path.resolve(dirname, "payload-types.ts"),
    },
    db: postgresAdapter({
        pool: { connectionString: process.env.DATABASE_URI || "" },
    }),
    sharp,
    plugins: [
        seoPlugin({
            collections: ["posts", "categories"],
            uploadsCollection: "media",
            generateTitle: generateSeoTitle,
            generateDescription: generateSeoDescription,
        }),
        ...storagePlugins,
    ],
});
