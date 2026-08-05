import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(path, "utf8");

test("publishes the Ho Chi Minh City service landing page with crawlable SEO data", async () => {
    const [page, sitemap] = await Promise.all([
        read("app/(frontend)/dich-vu/bao-ve-tphcm/page.tsx"),
        read("app/sitemap.ts"),
    ]);

    assert.match(page, /const PAGE_URL = "https:\/\/baovethean\.com\/dich-vu\/bao-ve-tphcm"/);
    assert.match(page, /"@type": "Service"/);
    assert.match(page, /"@type": "FAQPage"/);
    assert.match(page, /"@type": "BreadcrumbList"/);
    assert.match(page, /robots: \{ index: true, follow: true \}/);
    assert.match(sitemap, /\$\{BASE\}\/dich-vu\/bao-ve-tphcm/);
    assert.match(sitemap, /export const dynamic = "force-dynamic"/);
});

test("supports Search Console verification without exposing a secret to clients", async () => {
    const [layout, environment] = await Promise.all([
        read("app/(frontend)/layout.tsx"),
        read(".env.example"),
    ]);

    assert.match(layout, /verification: googleVerification/);
    assert.match(layout, /process\.env\.GOOGLE_SITE_VERIFICATION/);
    assert.match(environment, /^GOOGLE_SITE_VERIFICATION=$/m);
});
