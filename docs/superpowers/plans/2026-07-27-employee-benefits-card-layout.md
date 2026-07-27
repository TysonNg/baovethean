# Employee Benefits Card Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing recruitment benefits grid with six infographic-style cards containing the exact supplied employee-benefit copy.

**Architecture:** Keep recruitment copy in the typed `RECRUIT_BENEFITS` data array and render it through the existing static `RecruitBenefits` Server Component. Use responsive Tailwind grid utilities for one, two, and four columns, with the fifth desktop card starting in column two so the final pair is centered.

**Tech Stack:** Next.js 16.2.6 App Router, React 19.2.4 Server Components, TypeScript, Tailwind CSS 4, Lucide React, Node.js built-in test runner.

## Global Constraints

- Change only the employee-benefits section on `/tuyen-dung`.
- Render exactly six benefit cards using the supplied Vietnamese copy.
- Desktop layout is 4 + 2 centered; tablet is two columns; mobile is one column.
- Use the existing navy, gold, white, and light-background design tokens.
- Do not add client-side state, animation, or dependencies.
- Preserve unrelated working-tree changes.

---

### Task 1: Lock the supplied copy and responsive layout contract

**Files:**
- Create: `lib/recruit-benefits.test.mts`
- Modify: `lib/recruit-data.ts`

**Interfaces:**
- Consumes: the existing `RecruitBenefit` interface.
- Produces: `RECRUIT_BENEFITS`, an ordered array of exactly six typed benefit records.

- [ ] **Step 1: Write the failing data and layout tests**

```ts
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { RECRUIT_BENEFITS } from "./recruit-data.ts";

const componentPath = new URL(
    "../components/sections/recruit/RecruitBenefits.tsx",
    import.meta.url,
);

const expectedDescriptions = [
    "Mức lương từ 6.000.000 – 12.000.000 đồng/tháng tùy vị trí làm việc.",
    "Thanh toán lương theo tuần đối với nhân viên thời vụ.",
    "Miễn phí toàn bộ đồng phục.",
    "Bao ăn, ở tùy khu vực làm việc, mục tiêu làm việc.",
    "CMND gốc đi làm ngay.",
    "Môi trường làm việc thân thiện.",
];

test("exposes exactly the six supplied employee benefits", () => {
    assert.equal(RECRUIT_BENEFITS.length, 6);
    assert.deepEqual(
        RECRUIT_BENEFITS.map((benefit) => benefit.description),
        expectedDescriptions,
    );
});

test("renders the approved notices and responsive four-plus-two card grid", async () => {
    const source = await readFile(componentPath, "utf8");

    assert.match(source, />Quyền lợi nhân viên</);
    assert.match(source, /TUYỂN GẤP 50 NHÂN VIÊN BẢO VỆ/);
    assert.match(source, /KHU VỰC: BÌNH DƯƠNG, TP HCM, TIỀN GIANG, BÌNH THUẬN/);
    assert.match(source, /md:grid-cols-2/);
    assert.match(source, /lg:grid-cols-4/);
    assert.match(source, /index === 4/);
    assert.match(source, /lg:col-start-2/);
});
```

- [ ] **Step 2: Run the tests and verify both fail for the intended reasons**

Run: `node --experimental-strip-types --test lib/recruit-benefits.test.mts`

Expected: the data assertion fails because the old descriptions differ, and the layout assertion fails because the approved heading/notices and 4 + 2 layout are absent.

- [ ] **Step 3: Replace only the six benefit records**

Keep the existing `code` and typed icon fields, but replace the titles and descriptions in order:

```ts
export const RECRUIT_BENEFITS: RecruitBenefit[] = [
    {
        code: "Quyền lợi · 01",
        icon: "wallet",
        title: "Thu nhập theo vị trí",
        description:
            "Mức lương từ 6.000.000 – 12.000.000 đồng/tháng tùy vị trí làm việc.",
    },
    {
        code: "Quyền lợi · 02",
        icon: "shield",
        title: "Lương thời vụ linh hoạt",
        description: "Thanh toán lương theo tuần đối với nhân viên thời vụ.",
    },
    {
        code: "Quyền lợi · 03",
        icon: "book",
        title: "Đồng phục miễn phí",
        description: "Miễn phí toàn bộ đồng phục.",
    },
    {
        code: "Quyền lợi · 04",
        icon: "discipline",
        title: "Hỗ trợ ăn ở",
        description: "Bao ăn, ở tùy khu vực làm việc, mục tiêu làm việc.",
    },
    {
        code: "Quyền lợi · 05",
        icon: "growth",
        title: "Hồ sơ đơn giản",
        description: "CMND gốc đi làm ngay.",
    },
    {
        code: "Quyền lợi · 06",
        icon: "team",
        title: "Môi trường thân thiện",
        description: "Môi trường làm việc thân thiện.",
    },
];
```

- [ ] **Step 4: Re-run the focused test**

Run: `node --experimental-strip-types --test lib/recruit-benefits.test.mts`

Expected: the copy test passes and the layout test remains red until Task 2.

### Task 2: Build the six-card infographic section

**Files:**
- Modify: `components/sections/recruit/RecruitBenefits.tsx`
- Test: `lib/recruit-benefits.test.mts`

**Interfaces:**
- Consumes: `RECRUIT_BENEFITS` and the existing `RecruitBenefitIcon` union.
- Produces: a static semantic section containing the approved notices and six responsive cards.

- [ ] **Step 1: Replace the old section introduction**

Remove the old eyebrow, explanatory heading, and paragraph. Render a centered introduction containing:

```tsx
<p className="eyebrow text-gold-deep mb-4">Cơ hội việc làm</p>
<h2 className="heading-1 text-ink">Quyền lợi nhân viên</h2>
<p> TUYỂN GẤP 50 NHÂN VIÊN BẢO VỆ, BẢO VỆ THỜI VỤ, CƠ ĐỘNG, ĐỘI TRƯỞNG </p>
<p>KHU VỰC: BÌNH DƯƠNG, TP HCM, TIỀN GIANG, BÌNH THUẬN</p>
```

Style the two notices with the existing navy/gold palette, uppercase typography, wrapping, and accessible contrast.

- [ ] **Step 2: Replace the bordered table-like grid with raised cards**

Use:

```tsx
<div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
    {RECRUIT_BENEFITS.map((benefit, index) => (
        <article
            key={benefit.code}
            className={`relative rounded-2xl border border-line bg-white px-6 pb-7 pt-12 text-center shadow-[0_16px_40px_rgba(7,23,46,0.09)] ${
                index === 4 ? "lg:col-start-2" : ""
            }`}
        >
            {/* raised icon, horizontal label, title, and full description */}
        </article>
    ))}
</div>
```

Render the icon in an absolutely positioned navy circle centered above the card. Render the code in a navy horizontal band with gold text, then the title and full description. Set decorative icon markup to `aria-hidden="true"`.

- [ ] **Step 3: Use icons matching each supplied benefit**

Map the existing typed icon keys to:

```ts
const ICONS: Record<RecruitBenefitIcon, LucideIcon> = {
    wallet: DollarSign,
    shield: CalendarClock,
    book: Shirt,
    discipline: BedDouble,
    growth: IdCard,
    team: Users,
};
```

- [ ] **Step 4: Run the focused test and lint**

Run: `node --experimental-strip-types --test lib/recruit-benefits.test.mts`

Expected: 2 tests PASS.

Run: `npx eslint components/sections/recruit/RecruitBenefits.tsx lib/recruit-data.ts lib/recruit-benefits.test.mts`

Expected: PASS with no errors.

### Task 3: Production and visual verification

**Files:**
- Verify: `components/sections/recruit/RecruitBenefits.tsx`
- Verify: `lib/recruit-data.ts`

**Interfaces:**
- Consumes: the completed section.
- Produces: verification evidence only; no additional feature scope.

- [ ] **Step 1: Run the production build**

Run: `npm run build`

Expected: Next.js production build and TypeScript validation complete with exit code 0.

- [ ] **Step 2: Inspect the page at three viewport widths**

Run the local Next.js app and inspect `/tuyen-dung` at approximately 1440 px, 768 px, and 390 px widths.

Expected:

- 1440 px: four cards on row one and two centered on row two.
- 768 px: two cards per row.
- 390 px: one card per row.
- No text clipping, icon overlap, horizontal scrolling, or low-contrast notice text.

- [ ] **Step 3: Review the final diff**

Run: `git diff --check` and `git diff -- components/sections/recruit/RecruitBenefits.tsx lib/recruit-data.ts lib/recruit-benefits.test.mts`

Expected: no whitespace errors and no unrelated files in the feature diff.
