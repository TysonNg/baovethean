import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pagePath = new URL(
    "../app/(frontend)/tuyen-dung/quyen-loi-nhan-vien/page.tsx",
    import.meta.url,
);

const benefitCopy = [
    "Mức lương: từ 6.000.000 – 12.000.000 đồng/tháng tùy vị trí làm việc",
    "Thanh toán lương theo tuần đối với nhân viên thời vụ",
    "Miễn phí toàn bộ đồng phục",
    "Bao ăn, ở tùy khu vực làm việc, mục tiêu làm việc",
    "CMND gốc đi làm ngay",
    "Môi trường làm việc thân thiện",
];

test("publishes the standalone employee benefits page with the supplied copy", async () => {
    const source = await readFile(pagePath, "utf8");

    assert.ok(source.includes("Quyền lợi nhân viên"));
    assert.ok(
        source.includes(
            "TUYỂN GẤP 50 NHÂN VIÊN BẢO VỆ, BẢO VỆ THỜI VỤ, CƠ ĐỘNG, ĐỘI TRƯỞNG",
        ),
    );
    assert.ok(
        source.includes(
            "KHU VỰC: BÌNH DƯƠNG, TP HCM, TIỀN GIANG, BÌNH THUẬN",
        ),
    );

    for (const copy of benefitCopy) {
        assert.ok(source.includes(copy), `Missing benefit copy: ${copy}`);
    }

    assert.equal(source.match(/number: "0[1-6]"/g)?.length, 6);
});

test("uses the approved responsive four-plus-two card layout", async () => {
    const source = await readFile(pagePath, "utf8");

    assert.match(source, /import PageBanner/);
    assert.match(source, /<PageBanner/);
    assert.match(source, /#1D528F/g);
    assert.match(source, /md:grid-cols-2/);
    assert.match(source, /lg:grid-cols-4/);
    assert.match(source, /index === 4/);
    assert.match(source, /lg:col-start-2/);
    assert.match(source, /BENEFITS\.map/);
});
