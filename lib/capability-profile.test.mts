import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const pagePath = new URL("../app/(frontend)/ho-so-nang-luc/page.tsx", import.meta.url);
const pdfPath = new URL("../public/documents/ho-so-nang-luc.pdf", import.meta.url);
const viewerPath = new URL("../components/sections/about/CapabilityPdfViewer.tsx", import.meta.url);
const documentPath = new URL("../components/sections/about/CapabilityPdfDocument.tsx", import.meta.url);

test("publishes the capability profile PDF", async () => {
    const file = await stat(pdfPath);
    assert.ok(file.size > 0);
});

test("offers PDF.js viewing, full-screen opening, and downloading", async () => {
    const source = await readFile(pagePath, "utf8");
    const viewer = await readFile(viewerPath, "utf8");
    const document = await readFile(documentPath, "utf8");
    assert.match(source, /const PROFILE_PDF_URL = "\/documents\/ho-so-nang-luc\.pdf"/);
    assert.match(source, /<CapabilityPdfViewer pdfUrl=\{PROFILE_PDF_URL\}/);
    assert.doesNotMatch(source, /<iframe/);
    assert.match(source, /target="_blank"/);
    assert.match(source, /download/);
    assert.match(viewer, /ssr: false/);
    assert.match(document, /from "react-pdf"/);
    assert.match(document, /fetch\(pdfUrl, \{ cache: "no-store", signal: controller\.signal \}\)/);
    assert.match(document, /response\.arrayBuffer\(\)/);
    assert.match(document, /file=\{pdfFile\}/);
    assert.match(document, /<Document/);
    assert.match(document, /<Page/);
    assert.match(document, /Không thể hiển thị tài liệu/);
});
