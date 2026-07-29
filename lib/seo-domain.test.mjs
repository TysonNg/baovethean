import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const CANONICAL_ORIGIN = "https://baovethean.com";

test("sitemap and robots use the canonical production origin", async () => {
    const [sitemap, robots, layout] = await Promise.all([
        readFile("app/sitemap.ts", "utf8"),
        readFile("app/robots.ts", "utf8"),
        readFile("app/(frontend)/layout.tsx", "utf8"),
    ]);

    assert.match(sitemap, new RegExp(`const BASE = "${CANONICAL_ORIGIN}"`));
    assert.match(robots, new RegExp(`${CANONICAL_ORIGIN}/sitemap\\.xml`));
    assert.match(layout, new RegExp(`new URL\\("${CANONICAL_ORIGIN}"\\)`));

    for (const source of [sitemap, robots, layout]) {
        assert.doesNotMatch(source, /https:\/\/baovethean\.vn/);
    }
});

test("declared organization logo and search favicon assets exist", async () => {
    const [icon, appleIcon, organizationLogo] = await Promise.all([
        stat("app/icon.png"),
        stat("app/apple-icon.png"),
        stat("public/logo.png"),
    ]);

    assert.ok(icon.size > 0);
    assert.ok(appleIcon.size > 0);
    assert.ok(organizationLogo.size > 0);
});
