# Editorial Home Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the home Hero to match the supplied bright editorial dental reference while retaining Bảo Vệ Thế An content and imagery.

**Architecture:** Keep `Hero.tsx` as a Server Component responsible for the photographic layout and static content. Add a focused Client Component for testimonial state, autoplay, controls, pause behavior, and reduced-motion handling.

**Tech Stack:** Next.js 16.2.6, React 19.2.4, TypeScript, Tailwind CSS 4, `next/image`, lucide-react.

## Global Constraints

- Modify only Hero-owned UI files.
- Reuse `/hero-banner1.png`; do not generate or edit the guard.
- Do not add packages.
- Do not render STATS in the Hero.
- Only the testimonial card may behave as a carousel.

---

### Task 1: Implement testimonial carousel

**Files:**
- Create: `components/sections/hero/TestimonialCarousel.tsx`

**Interfaces:**
- Produces: default React component `TestimonialCarousel`.

- [ ] Define typed testimonial array with three supplied reviews.
- [ ] Implement active index, previous/next, 5.5-second autoplay, cleanup, pause on hover/focus, and reduced-motion behavior.
- [ ] Render a compact white card with initials avatar, rating, review, identity, indicator, and accessible controls.
- [ ] Run ESLint on the component.

### Task 2: Implement editorial Hero layout

**Files:**
- Modify: `components/sections/Hero.tsx`

**Interfaces:**
- Consumes: `TestimonialCarousel`.
- Produces: the home Hero with `data-home-hero`.

- [ ] Remove STATS and its import.
- [ ] Build the bright full-screen image canvas and localized contrast overlays.
- [ ] Add left headline/copy/CTA, right static introduction, bottom-left service pills, and bottom-right testimonial.
- [ ] Add desktop, tablet, and mobile layout rules without modifying Header or other sections.
- [ ] Use Next.js 16 `preload` for the LCP image.

### Task 3: Verify

**Files:**
- Verify: `components/sections/Hero.tsx`
- Verify: `components/sections/hero/TestimonialCarousel.tsx`

- [ ] Run ESLint on both files.
- [ ] Run `git diff --check`.
- [ ] Run a production build with the project’s required Payload secret.
- [ ] Review the final diff for scope and brief compliance.
