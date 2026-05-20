@AGENTS.md
# CLAUDE.md - BaoVeTheAn
Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

## Project Overview

- **Frontend:** Next.js 16 (App Router), TypeScript, Tailwind CSS 4
- **Backend:** NestJS, TypeScript, Prisma ORM
- **Database:** PostgreSQL
- **Deploy:** VPS (Nginx + PM2)

## Code Style

- Indent: 4 spaces (tabs không dùng)
- Viết ngắn gọn, không thừa code
- Không comment trừ khi logic thực sự khó hiểu
- Ưu tiên early return, tránh nested if/else sâu

## Frontend Rules (Next.js)

- Mỗi component một file, không viết nhiều component trong 1 file
- Tách rõ: UI components, layout components, page components
- Cấu trúc:
  ```
  app/
    (public)/          # Landing page, blog (SSR/SSG)
    (admin)/           # Admin panel
  components/
    ui/                # Button, Input, Card, Modal...
    layout/            # Header, Footer, Sidebar...
    sections/          # Hero, About, Services... (landing page sections)
  lib/                 # Utils, API client, constants
  types/               # Shared TypeScript types
  ```
- Component > 150 dòng → tách nhỏ hơn
- Dùng `next/image` cho tất cả ảnh
- Metadata API cho SEO (không dùng `<Head>`)

## Backend Rules (NestJS)

- Cấu trúc module rõ ràng theo domain:
  ```
  src/
    auth/              # Module: JWT, guards, strategies
    posts/             # Module: CRUD bài viết
    upload/            # Module: file upload
    common/            # Filters, interceptors, decorators, pipes
    prisma/            # Prisma service + module
  ```
- Mỗi module có: controller, service, dto, entity riêng
- Validation dùng class-validator + DTO
- Auth dùng JWT + Passport guards
- Upload ảnh: Multer → Sharp (resize) → lưu local `/uploads/`
- API prefix: `/api/v1/`

## General Guidelines

- Không thêm feature ngoài yêu cầu
- Không refactor code không liên quan
- Không tạo abstraction cho thứ chỉ dùng 1 lần
- Nếu không chắc → hỏi trước, không đoán
- Mỗi thay đổi phải trace được về yêu cầu của user
