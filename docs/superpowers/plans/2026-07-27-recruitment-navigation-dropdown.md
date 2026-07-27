# Recruitment Navigation Dropdown Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a compact reusable desktop dropdown and matching mobile navigation group for four recruitment links.

**Architecture:** Store recruitment navigation metadata in a framework-independent module shared by desktop and mobile. A client-side `NavDropdown` component owns open/close, focus, and active-state behavior while the existing header and drawer decide where it appears.

**Tech Stack:** Next.js 16.2.6 App Router, React 19.2.4, TypeScript, Tailwind CSS 4, Node.js built-in test runner.

## Global Constraints

- Destination pages are outside this change.
- The dropdown remains visually simple: plain link rows with hover and active color changes.
- Desktop opens by hover or click and supports Arrow Down, Escape, and outside click.
- Mobile uses an expandable group with the same four links.
- Existing unrelated working-tree changes must remain untouched.

---

### Task 1: Shared recruitment navigation data

**Files:**
- Create: `lib/recruit-menu.ts`
- Create: `lib/recruit-menu.test.mts`

**Interfaces:**
- Produces: `RecruitMenuItem`, `RECRUIT_MENU_ITEMS`, `RECRUIT_MENU_PATHS`, and `isRecruitPath(pathname: string): boolean`.

- [ ] **Step 1: Write the failing test**

```ts
import assert from "node:assert/strict";
import test from "node:test";
import {
    RECRUIT_MENU_ITEMS,
    RECRUIT_MENU_PATHS,
    isRecruitPath,
} from "./recruit-menu.ts";

test("exposes the four recruitment destinations in the requested order", () => {
    assert.deepEqual(RECRUIT_MENU_ITEMS, [
        { title: "Quyền lợi nhân viên", href: "/tuyen-dung/quyen-loi-nhan-vien" },
        { title: "Khu vực cần tuyển", href: "/tuyen-dung/khu-vuc-can-tuyen" },
        { title: "Đào tạo", href: "/tuyen-dung/dao-tao" },
        { title: "Yêu cầu", href: "/tuyen-dung/yeu-cau" },
    ]);
    assert.deepEqual(RECRUIT_MENU_PATHS, RECRUIT_MENU_ITEMS.map((item) => item.href));
});

test("recognizes the recruitment root and nested routes", () => {
    assert.equal(isRecruitPath("/tuyen-dung"), true);
    assert.equal(isRecruitPath("/tuyen-dung/dao-tao"), true);
    assert.equal(isRecruitPath("/dich-vu"), false);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --experimental-strip-types --test lib/recruit-menu.test.mts`

Expected: FAIL because `lib/recruit-menu.ts` does not exist.

- [ ] **Step 3: Write minimal implementation**

```ts
export interface RecruitMenuItem {
    title: string;
    href: string;
}

export const RECRUIT_MENU_ITEMS: RecruitMenuItem[] = [
    { title: "Quyền lợi nhân viên", href: "/tuyen-dung/quyen-loi-nhan-vien" },
    { title: "Khu vực cần tuyển", href: "/tuyen-dung/khu-vuc-can-tuyen" },
    { title: "Đào tạo", href: "/tuyen-dung/dao-tao" },
    { title: "Yêu cầu", href: "/tuyen-dung/yeu-cau" },
];

export const RECRUIT_MENU_PATHS = RECRUIT_MENU_ITEMS.map((item) => item.href);

export function isRecruitPath(pathname: string) {
    return pathname === "/tuyen-dung" || pathname.startsWith("/tuyen-dung/");
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --experimental-strip-types --test lib/recruit-menu.test.mts`

Expected: 2 tests PASS.

### Task 2: Reusable simple desktop dropdown

**Files:**
- Create: `components/layout/NavDropdown.tsx`
- Modify: `components/layout/Header.tsx`

**Interfaces:**
- Consumes: `{ label: string; items: readonly { title: string; href: string }[]; active: boolean; overlay?: boolean; panelId: string }`.
- Produces: an accessible dropdown trigger and compact list of Next.js `Link` elements.

- [ ] **Step 1: Implement `NavDropdown`**

Create a client component following the interaction behavior already proven by `AboutDropdown`: local `isOpen`, root/trigger refs, hover open/close, click toggle, outside-pointer close, Escape close with focus restoration, and Arrow Down focus to the first `[data-nav-dropdown-link]`.

Render a `ChevronDown` beside the label and a single-column `absolute` panel with `rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg`. Each link uses `rounded-md px-4 py-3 text-sm`, `hover:bg-slate-50 hover:text-[#1D528F]`, and the same colors when active.

- [ ] **Step 2: Integrate recruitment dropdown in `Header`**

Import `NavDropdown`, `RECRUIT_MENU_ITEMS`, and `isRecruitPath`. Insert the dropdown after the “DỰ ÁN” navigation link by rendering it when that mapped link is reached:

```tsx
<>
    <Link>{/* existing DỰ ÁN link */}</Link>
    {link.href === "/du-an" && (
        <NavDropdown
            label="TUYỂN DỤNG"
            items={RECRUIT_MENU_ITEMS}
            active={isRecruitPath(pathname)}
            overlay={hasOverlay}
            panelId="recruit-desktop-panel"
        />
    )}
</>
```

Use a stable `Fragment` key so React receives one keyed result per `NAV_LINKS` item.

- [ ] **Step 3: Run lint on the changed desktop files**

Run: `npx eslint components/layout/NavDropdown.tsx components/layout/Header.tsx lib/recruit-menu.ts`

Expected: PASS with no errors.

### Task 3: Mobile recruitment group and full verification

**Files:**
- Modify: `components/layout/MobileDrawer.tsx`

**Interfaces:**
- Consumes: `RECRUIT_MENU_ITEMS` and `isRecruitPath`.
- Produces: an expandable “TUYỂN DỤNG” group immediately after “DỰ ÁN”.

- [ ] **Step 1: Add mobile accordion state and markup**

Add `recruitOpen`, initialized from `isRecruitPath(pathname)`. After the existing “DỰ ÁN” link, render a button with `aria-expanded`, `aria-controls="recruit-mobile-links"`, and a rotating `ChevronDown`. When open, map `RECRUIT_MENU_ITEMS` to plain indented `Link` rows, closing the drawer on click and applying active text color to the current path.

- [ ] **Step 2: Run focused test and lint**

Run: `node --experimental-strip-types --test lib/recruit-menu.test.mts`

Expected: 2 tests PASS.

Run: `npx eslint components/layout/NavDropdown.tsx components/layout/Header.tsx components/layout/MobileDrawer.tsx lib/recruit-menu.ts lib/recruit-menu.test.mts`

Expected: PASS with no errors.

- [ ] **Step 3: Run production build**

Run: `npm run build`

Expected: Next.js production build and TypeScript validation complete successfully. The four destination routes may still return 404 because page creation is explicitly outside scope.

