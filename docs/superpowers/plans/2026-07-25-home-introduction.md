# Homepage Introduction Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a homepage-only company introduction section between Hero and Services, visually aligned with the supplied reference image.

**Architecture:** Create a focused `HomeIntroduction` component with local typed content arrays and responsive Tailwind layout. Compose it directly in the homepage without changing the existing About page components or service behavior.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, lucide-react, `next/image`.

## Global Constraints

- Preserve the existing `Hero → Services → WhyChoose → Clients → ConsultationCTA` flow except for inserting `HomeIntroduction` between Hero and Services.
- Use semantic headings, lists, and meaningful image alt text.
- Avoid fixed heights that cause mobile overflow.
- Reuse existing project tokens (`navy`, `gold`, `ink`, `line`, `bg-alt`) and established `Container` component.

---

### Task 1: Add the homepage introduction component

**Files:**
- Create: `components/sections/HomeIntroduction.tsx`

**Interfaces:**
- Produces: default React component `HomeIntroduction` with no props.

- [ ] **Step 1: Define local content and icon mappings**

Create typed arrays for company facts, statistics, and four value cards. Use lucide-react icons (`Building2`, `Globe2`, `MapPin`, `Phone`, `Mail`, `ShieldCheck`, `Users`, `Headset`, `Handshake`) and keep displayed copy in Vietnamese.

- [ ] **Step 2: Build the section header and company information panel**

Use `Container`, a centered eyebrow, title, and tagline. Follow with a responsive `lg:grid-cols-2` layout: navy rounded information card on the left and a right-side visual panel with a CSS gradient, shield watermark, and a compact “Thế An Security” badge so the component does not depend on an unverified external image path.

- [ ] **Step 3: Add the statistics strip**

Render four semantic `<dl>` items in a white rounded strip with responsive two-column/mobile and four-column/desktop layout, using the project navy/gold palette and dividers only on larger screens.

- [ ] **Step 4: Add the introduction copy and four strengths**

Render the “Giới thiệu công ty bảo vệ Thế An” heading, three paragraphs, a subtle watermark, and four responsive value cards with the mapped icons and concise descriptions.

- [ ] **Step 5: Run lint/typecheck for the new component**

Run the repository’s available checks from `package.json` (at minimum `npm run lint` and `npx tsc --noEmit`). Expected: no new errors.

### Task 2: Integrate the section into the homepage

**Files:**
- Modify: `app/(frontend)/page.tsx`

**Interfaces:**
- Consumes: default `HomeIntroduction` component from `@/components/sections/HomeIntroduction`.

- [ ] **Step 1: Import and render `HomeIntroduction`**

Insert `<HomeIntroduction />` immediately after `<Hero />` and before `<Services />`; leave all existing sections and commented content unchanged.

- [ ] **Step 2: Run the full available verification**

Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` if the project script exists. Expected: all commands complete successfully and the homepage includes the new section without route/build errors.

- [ ] **Step 3: Review the diff**

Run `git diff --check` and inspect the changed files for accidental unrelated edits or overflow-prone fixed dimensions.
