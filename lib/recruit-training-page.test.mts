import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
    TRAINING_GALLERY_SLOTS,
    TRAINING_MODULES,
    TRAINING_STEPS,
} from "./recruit-training.ts";

const pagePath = new URL(
    "../app/(frontend)/tuyen-dung/dao-tao/page.tsx",
    import.meta.url,
);

test("publishes the approved training program in order", () => {
    assert.equal(TRAINING_MODULES.length, 5);
    assert.deepEqual(
        TRAINING_MODULES.map(({ number, title }) => ({ number, title })),
        [
            { number: "01", title: "Nghiệp vụ bảo vệ" },
            { number: "02", title: "Phòng cháy chữa cháy" },
            { number: "03", title: "Sơ cấp cứu" },
            { number: "04", title: "Xử lý tình huống" },
            { number: "05", title: "Giao tiếp và tác phong" },
        ],
    );

    const copy = JSON.stringify({ TRAINING_MODULES, TRAINING_STEPS });
    assert.match(copy, /120 giờ/);
    assert.match(copy, /hàng quý/);
    assert.match(copy, /đánh giá đầu ra/);
    assert.doesNotMatch(
        copy,
        /Thanh Bình Phú Mỹ|0932 629 599|52\/2008|45\/2009/,
    );
});

test("defines a four-stage process and replaceable gallery slots", () => {
    assert.equal(TRAINING_STEPS.length, 4);
    assert.equal(TRAINING_GALLERY_SLOTS.length, 5);
    assert.ok(
        TRAINING_GALLERY_SLOTS.every(({ label }) =>
            label.startsWith("Ảnh đào tạo"),
        ),
    );
});

test("renders the approved responsive training page contract", async () => {
    const source = await readFile(pagePath, "utf8");

    assert.match(source, /export const metadata: Metadata/);
    assert.match(source, /https:\/\/baovethean\.vn\/tuyen-dung\/dao-tao/);
    assert.match(source, /<PageBanner/);
    assert.match(source, /title="Đào tạo nghiệp vụ"/);
    assert.match(source, /TRAINING_MODULES\.map/);
    assert.match(source, /TRAINING_STEPS\.map/);
    assert.match(source, /TRAINING_GALLERY_SLOTS\.map/);
    assert.match(source, /md:grid-cols-2/);
    assert.match(source, /lg:grid-cols-3/);
    assert.match(source, /href="\/tuyen-dung\/yeu-cau"/);
    assert.match(source, /href=\{`tel:\$\{COMPANY\.hotline\}`\}/);
    assert.doesNotMatch(
        source,
        /Thanh Bình Phú Mỹ|0932 629 599|52\/2008|45\/2009/,
    );
});
