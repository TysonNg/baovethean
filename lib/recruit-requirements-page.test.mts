import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { COMPANY } from "./data.ts";
import { RECRUIT_REQUIREMENT_MODULES } from "./recruit-requirements.ts";

const pagePath = new URL(
    "../app/(frontend)/tuyen-dung/yeu-cau/page.tsx",
    import.meta.url,
);

test("exposes the four approved recruitment requirement modules in order", () => {
    assert.equal(RECRUIT_REQUIREMENT_MODULES.length, 4);
    assert.deepEqual(
        RECRUIT_REQUIREMENT_MODULES.map(({ number, title }) => ({
            number,
            title,
        })),
        [
            { number: "01", title: "Tác phong và kỹ năng" },
            { number: "02", title: "Tiêu chuẩn ứng viên" },
            { number: "03", title: "Hồ sơ cần chuẩn bị" },
            { number: "04", title: "Bắt đầu công việc" },
        ],
    );

    const copy = RECRUIT_REQUIREMENT_MODULES.flatMap(
        (module) => module.items,
    ).join("\n");

    assert.match(copy, /Nam từ 18–55 tuổi, cao từ 1,64 m/);
    assert.match(copy, /Nữ từ 18–38 tuổi, cao từ 1,54 m/);
    assert.match(copy, /Không yêu cầu bằng cấp hoặc kinh nghiệm/);
    assert.match(copy, /CCCD\/CMND bản gốc/);
});

test("keeps Bảo vệ Thế An as the contact source", () => {
    assert.equal(COMPANY.name, "Bảo vệ Thế An");
    assert.equal(COMPANY.hotline, "0903304003");
    assert.equal(COMPANY.email, "contact@baovethean.vn");
});

test("renders the approved editorial requirements page contract", async () => {
    const source = await readFile(pagePath, "utf8");

    assert.match(source, /export const metadata: Metadata/);
    assert.match(source, /https:\/\/baovethean\.vn\/tuyen-dung\/yeu-cau/);
    assert.match(source, /<PageBanner/);
    assert.match(source, /title="Yêu cầu ứng viên"/);
    assert.match(source, /Bạn đã sẵn sàng gia nhập Thế An\?/);
    assert.match(source, /<ol/);
    assert.match(source, /RECRUIT_REQUIREMENT_MODULES\.map/);
    assert.match(source, /md:grid-cols-2/);
    assert.match(source, /aria-hidden="true"/);
    assert.match(source, /href=\{`tel:\$\{COMPANY\.hotline\}`\}/);
    assert.match(source, /href=\{`mailto:\$\{COMPANY\.email\}`\}/);
    assert.doesNotMatch(source, /Thanh Bình Phú Mỹ|Ms Thảo/);
});
