# Recruitment Requirements Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the static `/tuyen-dung/yeu-cau` page with the approved editorial checklist layout, Bảo vệ Thế An contact details, and direct call/email actions.

**Architecture:** Keep the four ordered content modules in a typed, presentation-free data file. Render them in a static App Router Server Component that reuses `PageBanner`, `Container`, `Eyebrow`, and `COMPANY`; use local Tailwind utilities and Lucide icons for the responsive editorial visuals.

**Tech Stack:** Next.js 16.2.6 App Router, React 19.2.4 Server Components, TypeScript, Tailwind CSS 4, Lucide React, Node.js built-in test runner.

## Global Constraints

- Create only the dedicated route `/tuyen-dung/yeu-cau`; do not change other recruitment pages or navigation.
- Use the approved editorial checklist direction with generous white space, two desktop columns, one mobile column, and small circular navy/gold icon compositions.
- Use Bảo vệ Thế An contact values from `COMPANY`; do not include Thanh Bình Phú Mỹ, Ms Thảo, or source-image contact details.
- Include direct `tel:` and `mailto:` actions but no application form.
- Keep the page static, without client state, animation, carousel, filtering, CMS work, new dependencies, bitmap assets, or global CSS.
- Preserve all unrelated working-tree changes.

---

## File Map

- `lib/recruit-requirements.ts`: typed, ordered source of the four requirement modules.
- `lib/recruit-requirements-page.test.mts`: focused data and source-contract tests for content, route structure, responsive layout, semantics, and contact actions.
- `app/(frontend)/tuyen-dung/yeu-cau/page.tsx`: metadata and static page presentation.

### Task 1: Lock the approved recruitment copy in typed data

**Files:**
- Create: `lib/recruit-requirements-page.test.mts`
- Create: `lib/recruit-requirements.ts`

**Interfaces:**
- Produces: `RecruitRequirementIcon`, `RecruitRequirementModule`, and `RECRUIT_REQUIREMENT_MODULES`.
- `RecruitRequirementIcon` is the union `"skills" | "standards" | "documents" | "start"`.
- `RecruitRequirementModule` has `{ number: string; icon: RecruitRequirementIcon; title: string; items: readonly string[] }`.

- [ ] **Step 1: Write the failing data test**

Create `lib/recruit-requirements-page.test.mts`:

```ts
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
```

- [ ] **Step 2: Run the focused test and verify RED**

Run:

```powershell
node --experimental-strip-types --test lib/recruit-requirements-page.test.mts
```

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `lib/recruit-requirements.ts`. This is the intended missing-feature failure.

- [ ] **Step 3: Create the minimal typed data source**

Create `lib/recruit-requirements.ts`:

```ts
export type RecruitRequirementIcon =
    | "skills"
    | "standards"
    | "documents"
    | "start";

export interface RecruitRequirementModule {
    number: string;
    icon: RecruitRequirementIcon;
    title: string;
    items: readonly string[];
}

export const RECRUIT_REQUIREMENT_MODULES: readonly RecruitRequirementModule[] = [
    {
        number: "01",
        icon: "skills",
        title: "Tác phong và kỹ năng",
        items: [
            "Lịch sự, nghiêm túc và chuyên nghiệp.",
            "Có tinh thần trách nhiệm, trung thực và chăm chỉ.",
            "Thân thiện với khách hàng và nhân viên tại mục tiêu.",
            "Có kỹ năng giao tiếp, ứng xử cơ bản.",
        ],
    },
    {
        number: "02",
        icon: "standards",
        title: "Tiêu chuẩn ứng viên",
        items: [
            "Là công dân Việt Nam.",
            "Nam từ 18–55 tuổi, cao từ 1,64 m.",
            "Nữ từ 18–38 tuổi, cao từ 1,54 m.",
            "Lý lịch rõ ràng; không có tiền án, tiền sự và không sử dụng ma túy.",
            "Tác phong phù hợp môi trường bảo vệ: không xăm hình lộ, không nhuộm tóc nổi bật; nhân viên nữ không sơn móng tay khi làm việc.",
        ],
    },
    {
        number: "03",
        icon: "documents",
        title: "Hồ sơ cần chuẩn bị",
        items: [
            "Không yêu cầu bằng cấp hoặc kinh nghiệm.",
            "Đơn xin việc và sơ yếu lý lịch.",
            "Hộ khẩu, CCCD/CMND và giấy khám sức khỏe.",
            "Các bằng cấp, chứng chỉ liên quan nếu có.",
        ],
    },
    {
        number: "04",
        icon: "start",
        title: "Bắt đầu công việc",
        items: [
            "Ứng viên có thể bổ sung hồ sơ sau khi nhận việc theo hướng dẫn của bộ phận tuyển dụng.",
            "Có CCCD/CMND bản gốc để đối chiếu khi làm thủ tục nhận việc.",
            "Bộ phận tuyển dụng sẽ hướng dẫn lịch phỏng vấn và hồ sơ còn thiếu.",
        ],
    },
] as const;
```

- [ ] **Step 4: Run the data tests and verify GREEN**

Run:

```powershell
node --experimental-strip-types --test lib/recruit-requirements-page.test.mts
```

Expected: both data/contact tests PASS.

- [ ] **Step 5: Commit the typed content**

```powershell
git add -- lib/recruit-requirements.ts lib/recruit-requirements-page.test.mts
git commit -m "test: define recruitment requirements content"
```

### Task 2: Build the editorial checklist page

**Files:**
- Modify: `lib/recruit-requirements-page.test.mts`
- Create: `app/(frontend)/tuyen-dung/yeu-cau/page.tsx`

**Interfaces:**
- Consumes: `RECRUIT_REQUIREMENT_MODULES`, `RecruitRequirementIcon`, and `COMPANY`.
- Produces: a static route with `metadata: Metadata`, a `PageBanner`, four semantic requirement modules, and two contact actions.

- [ ] **Step 1: Add the failing page contract test**

Append to `lib/recruit-requirements-page.test.mts`:

```ts
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
```

- [ ] **Step 2: Run the focused test and verify RED**

Run:

```powershell
node --experimental-strip-types --test lib/recruit-requirements-page.test.mts
```

Expected: the new contract test fails with `ENOENT` because `app/(frontend)/tuyen-dung/yeu-cau/page.tsx` does not exist.

- [ ] **Step 3: Create the page metadata and icon mapping**

Start `app/(frontend)/tuyen-dung/yeu-cau/page.tsx` with:

```tsx
import type { Metadata } from "next";
import {
    BadgeCheck,
    Check,
    Clock3,
    FileText,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    Sparkles,
    type LucideIcon,
} from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { COMPANY } from "@/lib/data";
import {
    RECRUIT_REQUIREMENT_MODULES,
    type RecruitRequirementIcon,
} from "@/lib/recruit-requirements";

const PAGE_URL = "https://baovethean.vn/tuyen-dung/yeu-cau";

export const metadata: Metadata = {
    title: "Yêu cầu ứng viên — Bảo vệ Thế An",
    description:
        "Tiêu chuẩn tuyển dụng và hồ sơ cần chuẩn bị khi ứng tuyển nhân viên bảo vệ tại Bảo vệ Thế An.",
    alternates: { canonical: PAGE_URL },
};

const ICONS: Record<RecruitRequirementIcon, LucideIcon> = {
    skills: Sparkles,
    standards: ShieldCheck,
    documents: FileText,
    start: BadgeCheck,
};
```

- [ ] **Step 4: Render the banner, editorial introduction, and semantic module grid**

In the page component, render:

```tsx
<PageBanner
    title="Yêu cầu ứng viên"
    subtitle="Xem trước các tiêu chuẩn và chuẩn bị hồ sơ để quá trình ứng tuyển diễn ra nhanh chóng, thuận tiện."
    parent={{ label: "Tuyển dụng", href: "/tuyen-dung" }}
    compact
/>

<main className="overflow-hidden bg-white">
    <section className="py-16 md:py-24">
        <Container>
            <header className="max-w-2xl">
                <Eyebrow text="Tiêu chuẩn tuyển dụng" />
                <h2 className="heading-1 mt-4 text-ink">
                    Bạn đã sẵn sàng gia nhập Thế An?
                </h2>
                <p className="mt-5 leading-7 text-ink-3">
                    Yêu cầu ứng tuyển đơn giản, minh bạch. Ứng viên chưa có
                    kinh nghiệm bảo vệ vẫn có thể đăng ký và sẽ được hướng
                    dẫn nghiệp vụ trước khi nhận việc.
                </p>
            </header>

            <ol className="mt-14 grid grid-cols-1 gap-x-14 gap-y-14 md:mt-18 md:grid-cols-2 lg:gap-x-24 lg:gap-y-18">
                {RECRUIT_REQUIREMENT_MODULES.map((module) => {
                    const Icon = ICONS[module.icon];
                    return (
                        <li
                            key={module.number}
                            className="grid grid-cols-[72px_1fr] items-start gap-5 sm:grid-cols-[88px_1fr] sm:gap-7"
                        >
                            <div
                                aria-hidden="true"
                                className="relative flex size-[72px] items-center justify-center rounded-full bg-bg-alt ring-1 ring-gold/25 sm:size-[88px]"
                            >
                                <span className="absolute -right-1 -top-1 size-5 rounded-full bg-gold/25" />
                                <span className="absolute -bottom-1 left-2 size-3 rounded-full bg-navy-700/15" />
                                <Icon className="size-7 text-navy-800 sm:size-8" strokeWidth={1.7} />
                            </div>
                            <div>
                                <p className="text-xs font-bold tracking-[0.16em] text-gold-deep uppercase">
                                    Yêu cầu · {module.number}
                                </p>
                                <h3 className="mt-2 text-xl font-bold text-ink">
                                    {module.title}
                                </h3>
                                <ul className="mt-4 space-y-3">
                                    {module.items.map((item) => (
                                        <li key={item} className="flex gap-3 text-sm leading-6 text-ink-3">
                                            <Check
                                                aria-hidden="true"
                                                className="mt-1 size-4 shrink-0 text-gold-deep"
                                                strokeWidth={2.4}
                                            />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </Container>
    </section>
```

- [ ] **Step 5: Add the Bảo vệ Thế An contact panel and direct actions**

After the editorial section, still inside `<main>`, render:

```tsx
<section className="pb-16 md:pb-24">
    <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-10 text-white sm:px-10 md:px-14 md:py-14">
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                    <p className="eyebrow text-gold-soft">Liên hệ tuyển dụng</p>
                    <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight md:text-4xl">
                        Trao đổi trực tiếp với bộ phận tuyển dụng Thế An
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-white/65">
                        {COMPANY.fullName}
                    </p>
                    <div className="mt-7 grid gap-4 text-sm text-white/75 sm:grid-cols-2">
                        <p className="flex gap-3"><Phone aria-hidden="true" className="size-5 shrink-0 text-gold-soft" />{COMPANY.hotline}</p>
                        <p className="flex gap-3"><Mail aria-hidden="true" className="size-5 shrink-0 text-gold-soft" />{COMPANY.email}</p>
                        <p className="flex gap-3 sm:col-span-2"><MapPin aria-hidden="true" className="size-5 shrink-0 text-gold-soft" />{COMPANY.address}</p>
                        <p className="flex gap-3 sm:col-span-2"><Clock3 aria-hidden="true" className="size-5 shrink-0 text-gold-soft" />{COMPANY.hours}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                    <a
                        href={`tel:${COMPANY.hotline}`}
                        className="inline-flex min-h-12 items-center justify-center rounded bg-gold px-6 text-sm font-semibold text-white transition-colors hover:bg-gold-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-soft"
                    >
                        Gọi ứng tuyển
                    </a>
                    <a
                        href={`mailto:${COMPANY.email}`}
                        className="inline-flex min-h-12 items-center justify-center rounded border border-white/30 px-6 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Gửi email
                    </a>
                </div>
            </div>
        </div>
    </Container>
</section>
</main>
```

Remove unused icon imports while completing the file. The final page must have no client directive and no hard-coded company values.

- [ ] **Step 6: Run focused tests and lint**

Run:

```powershell
node --experimental-strip-types --test lib/recruit-requirements-page.test.mts
npx eslint 'app/(frontend)/tuyen-dung/yeu-cau/page.tsx' lib/recruit-requirements.ts lib/recruit-requirements-page.test.mts
```

Expected: all focused tests PASS and ESLint exits with code 0.

- [ ] **Step 7: Commit the page**

```powershell
git add -- 'app/(frontend)/tuyen-dung/yeu-cau/page.tsx' lib/recruit-requirements-page.test.mts
git commit -m "feat: add recruitment requirements page"
```

### Task 3: Production and visual verification

**Files:**
- Verify: `app/(frontend)/tuyen-dung/yeu-cau/page.tsx`
- Verify: `lib/recruit-requirements.ts`
- Verify: `lib/recruit-requirements-page.test.mts`

**Interfaces:**
- Consumes: the completed static route.
- Produces: build, responsive visual, accessibility, and diff evidence only.

- [ ] **Step 1: Run all relevant automated checks**

Run:

```powershell
node --experimental-strip-types --test lib/recruit-requirements-page.test.mts lib/recruit-menu.test.mts lib/employee-benefits-page.test.mts
npm run lint
npm run build
git diff --check
```

Expected: tests, lint, production build, and whitespace check all exit with code 0.

- [ ] **Step 2: Inspect desktop at approximately 1440 × 1000**

Open `/tuyen-dung/yeu-cau` and confirm:

- the PageBanner matches adjacent recruitment pages;
- the four modules form a balanced two-column composition;
- circular icon visuals are compact and aligned with module headings;
- the layout feels editorial rather than like a dense card grid;
- the contact panel shows Bảo vệ Thế An values and both actions.

- [ ] **Step 3: Inspect tablet at approximately 768 × 1024**

Confirm two columns remain legible, long requirement copy wraps without collisions, and the contact content/actions have comfortable spacing.

- [ ] **Step 4: Inspect mobile at approximately 390 × 844**

Confirm:

- modules collapse to one column;
- icons, indices, headings, and checklists remain readable;
- no horizontal scrolling or clipped text exists;
- the call and email actions stack and maintain at least a 48 px height.

- [ ] **Step 5: Review the final feature diff**

Run:

```powershell
git status --short
git diff -- 'app/(frontend)/tuyen-dung/yeu-cau/page.tsx' lib/recruit-requirements.ts lib/recruit-requirements-page.test.mts
```

Expected: only the three feature files appear in the feature diff; unrelated pre-existing worktree changes remain untouched.
