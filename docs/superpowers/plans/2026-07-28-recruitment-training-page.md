# Recruitment Training Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `/tuyen-dung/dao-tao` as a responsive, branded overview of Bảo vệ Thế An's training program with replaceable image placeholders.

**Architecture:** Keep all approved training copy in a typed data module and render it from one App Router server page. The page reuses `PageBanner`, `Container`, the existing recruitment navigation, and project design tokens; a source-contract test protects the approved content, responsive structure, links, and prohibition against copied source-company details.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Lucide React, Node test runner

## Global Constraints

- Read `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`, `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/page.md`, and `node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md` before writing application code.
- The route is exactly `/tuyen-dung/dao-tao`.
- Write all content for Bảo vệ Thế An; do not reuse the source company's name, contact details, images, or legal citations.
- Keep the existing claims: 120-hour onboarding course, quarterly refresher training, PCCC, first aid, incident response, professional conduct, and output assessment.
- Use static text placeholders only until the user supplies real images.
- Do not add dependencies or change unrelated recruitment pages.

---

## File Structure

- Create `lib/recruit-training.ts`: typed source of truth for modules, process steps, and gallery slots.
- Create `lib/recruit-training-page.test.mts`: content and rendered-source contract tests.
- Create `app/(frontend)/tuyen-dung/dao-tao/page.tsx`: metadata and the complete server-rendered page.

### Task 1: Define the training content contract

**Files:**
- Create: `lib/recruit-training-page.test.mts`
- Create: `lib/recruit-training.ts`

**Interfaces:**
- Produces: `TRAINING_MODULES: TrainingModule[]`, `TRAINING_STEPS: TrainingStep[]`, and `TRAINING_GALLERY_SLOTS: TrainingGallerySlot[]`.
- `TrainingModule` has `{ number: string; title: string; description: string; topics: string[]; icon: "shield" | "flame" | "heart" | "alert" | "users" }`.
- `TrainingStep` has `{ number: string; title: string; description: string; timing: string }`.
- `TrainingGallerySlot` has `{ number: string; label: string; aspect: "landscape" | "portrait" }`.

- [ ] **Step 1: Write the failing data test**

```ts
import assert from "node:assert/strict";
import test from "node:test";
import {
    TRAINING_GALLERY_SLOTS,
    TRAINING_MODULES,
    TRAINING_STEPS,
} from "./recruit-training.ts";

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
```

- [ ] **Step 2: Run the test and verify the missing module failure**

Run: `node --test lib/recruit-training-page.test.mts`

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `lib/recruit-training.ts`.

- [ ] **Step 3: Implement the typed data module**

Create the interfaces and exports with the approved copy. Use these exact module titles and process steps:

```ts
export interface TrainingModule {
    number: string;
    title: string;
    description: string;
    topics: string[];
    icon: "shield" | "flame" | "heart" | "alert" | "users";
}

export interface TrainingStep {
    number: string;
    title: string;
    description: string;
    timing: string;
}

export interface TrainingGallerySlot {
    number: string;
    label: string;
    aspect: "landscape" | "portrait";
}

export const TRAINING_MODULES: TrainingModule[] = [
    {
        number: "01",
        title: "Nghiệp vụ bảo vệ",
        description:
            "Trang bị nền tảng về nhiệm vụ, quyền hạn và quy trình làm việc tại từng loại mục tiêu.",
        topics: ["Kiểm soát người và phương tiện", "Tuần tra, bàn giao ca", "Ghi nhận và báo cáo sự việc"],
        icon: "shield",
    },
    {
        number: "02",
        title: "Phòng cháy chữa cháy",
        description:
            "Rèn phản xạ phát hiện, báo động và phối hợp xử lý trong những phút đầu của sự cố.",
        topics: ["Nhận diện nguy cơ cháy", "Sử dụng phương tiện chữa cháy", "Hướng dẫn thoát nạn"],
        icon: "flame",
    },
    {
        number: "03",
        title: "Sơ cấp cứu",
        description:
            "Hướng dẫn hỗ trợ ban đầu an toàn trong khi chờ lực lượng y tế chuyên trách.",
        topics: ["Đánh giá hiện trường", "Hỗ trợ chấn thương cơ bản", "Phối hợp gọi cấp cứu"],
        icon: "heart",
    },
    {
        number: "04",
        title: "Xử lý tình huống",
        description:
            "Thực hành các kịch bản thường gặp để nhân viên bình tĩnh, đúng vai trò và đúng quy trình.",
        topics: ["Xâm nhập và gây rối", "Mất mát tài sản", "Sự cố tại mục tiêu"],
        icon: "alert",
    },
    {
        number: "05",
        title: "Giao tiếp và tác phong",
        description:
            "Xây dựng hình ảnh người bảo vệ kỷ luật, lịch sự và nhất quán trong mọi ca trực.",
        topics: ["Điều lệnh và đồng phục", "Giao tiếp với khách hàng", "Kỷ luật và trách nhiệm"],
        icon: "users",
    },
];
```

Define `TRAINING_STEPS` as:

1. `"Tiếp nhận và định hướng"` — timing `"Bắt đầu khóa học"`.
2. `"Học kiến thức nền"` — timing `"Trong chương trình 120 giờ"`.
3. `"Thực hành tình huống"` — timing `"Xuyên suốt khóa học"`.
4. `"Đánh giá đầu ra"` — timing `"Trước khi nhận việc"`.

The step descriptions must mention onboarding expectations, classroom knowledge, supervised scenarios, and assignment only after the output assessment. Define five numbered gallery slots labeled `"Ảnh đào tạo 01"` through `"Ảnh đào tạo 05"` with three landscape and two portrait slots.

- [ ] **Step 4: Run the data test**

Run: `node --test lib/recruit-training-page.test.mts`

Expected: PASS for both data tests.

- [ ] **Step 5: Commit the content contract**

```bash
git add lib/recruit-training.ts lib/recruit-training-page.test.mts
git commit -m "test: define recruitment training content"
```

### Task 2: Render the responsive training page

**Files:**
- Modify: `lib/recruit-training-page.test.mts`
- Create: `app/(frontend)/tuyen-dung/dao-tao/page.tsx`

**Interfaces:**
- Consumes: `TRAINING_MODULES`, `TRAINING_STEPS`, and `TRAINING_GALLERY_SLOTS` from `@/lib/recruit-training`.
- Consumes: `COMPANY` from `@/lib/data`, `PageBanner`, `Container`, and Next `Link`.
- Produces: a static App Router page with exported `Metadata`.

- [ ] **Step 1: Add the failing page source-contract test**

```ts
import { readFile } from "node:fs/promises";

const pagePath = new URL(
    "../app/(frontend)/tuyen-dung/dao-tao/page.tsx",
    import.meta.url,
);

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
```

- [ ] **Step 2: Run the test and verify the missing page failure**

Run: `node --test lib/recruit-training-page.test.mts`

Expected: FAIL with `ENOENT` for `app/(frontend)/tuyen-dung/dao-tao/page.tsx`.

- [ ] **Step 3: Read the installed Next.js guides**

Run:

```powershell
Get-Content -Raw 'node_modules\next\dist\docs\01-app\01-getting-started\03-layouts-and-pages.md'
Get-Content -Raw 'node_modules\next\dist\docs\01-app\03-api-reference\03-file-conventions\page.md'
Get-Content -Raw 'node_modules\next\dist\docs\01-app\01-getting-started\14-metadata-and-og-images.md'
```

Expected: the current installed documentation confirms a default-exported page component and static `metadata` export are valid for this server page.

- [ ] **Step 4: Implement page metadata and banner**

Create `page.tsx` with:

```ts
const PAGE_URL = "https://baovethean.vn/tuyen-dung/dao-tao";

export const metadata: Metadata = {
    title: "Đào tạo nghiệp vụ — Bảo vệ Thế An",
    description:
        "Chương trình đào tạo nghiệp vụ 120 giờ, thực hành PCCC, sơ cấp cứu, xử lý tình huống và đánh giá đầu ra dành cho ứng viên Bảo vệ Thế An.",
    alternates: { canonical: PAGE_URL },
};
```

Render `PageBanner` with title `"Đào tạo nghiệp vụ"`, a concise subtitle, and `parent={{ label: "Tuyển dụng", href: "/tuyen-dung" }}`.

- [ ] **Step 5: Implement the introduction and module grid**

Render an ivory introduction section with the eyebrow `"Chương trình huấn luyện"` and heading `"Được chuẩn bị kỹ trước mỗi ca trực."`. Include the approved 120-hour and quarterly-refresh claims.

Map `TRAINING_MODULES` into an ordered responsive grid:

```tsx
<ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    {TRAINING_MODULES.map((module) => {
        const Icon = ICONS[module.icon];
        return (
            <li key={module.number}>
                {/* numbered icon, title, description, and topic checklist */}
            </li>
        );
    })}
</ol>
```

Use a typed `Record<TrainingModule["icon"], LucideIcon>` mapping for `ShieldCheck`, `Flame`, `HeartPulse`, `TriangleAlert`, and `UsersRound`.

- [ ] **Step 6: Implement the process timeline**

Render a white section with the heading `"Từ lớp học đến vị trí làm việc"` and map `TRAINING_STEPS` into an ordered list. Each step must show its number, title, description, and timing. Use a vertical layout on mobile and `lg:grid-cols-4` on large screens.

- [ ] **Step 7: Implement the replaceable gallery placeholders**

Render a navy gallery section with heading `"Hình ảnh huấn luyện thực tế"` and explanatory text `"Hình ảnh sẽ được cập nhật từ các khóa đào tạo của Bảo vệ Thế An."`.

Map all `TRAINING_GALLERY_SLOTS` into neutral, bordered placeholders. Each placeholder must:

- contain no `<Image>` element or external URL;
- display its `label`;
- use `aspect-[4/3]` for landscape and `aspect-[3/4]` for portrait;
- include an `ImagePlus` decorative icon with `aria-hidden="true"`;
- be replaceable later without changing the surrounding grid.

- [ ] **Step 8: Implement the CTA**

Render a final light section with:

- heading `"Sẵn sàng bắt đầu chương trình đào tạo?"`;
- primary `Link` to `/tuyen-dung/yeu-cau`;
- secondary phone anchor using `href={`tel:${COMPANY.hotline}`}`;
- visible focus styles for both actions.

- [ ] **Step 9: Run the page contract test**

Run: `node --test lib/recruit-training-page.test.mts`

Expected: PASS for all three tests.

- [ ] **Step 10: Run static verification**

Run:

```powershell
npm run lint
npm run build
```

Expected: both commands exit with code 0 and the build output lists `/tuyen-dung/dao-tao`.

- [ ] **Step 11: Perform visual checks**

Run the development server, open `/tuyen-dung/dao-tao`, and inspect at approximately 390 px and 1440 px widths. Confirm:

- no horizontal overflow;
- module cards and timeline stack correctly;
- gallery placeholders retain stable aspect ratios;
- header active state comes from the existing recruitment dropdown;
- both CTA links are usable by keyboard.

- [ ] **Step 12: Commit the page**

```bash
git add 'app/(frontend)/tuyen-dung/dao-tao/page.tsx' lib/recruit-training-page.test.mts
git commit -m "feat: add recruitment training page"
```

