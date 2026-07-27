# Recruitment Requirements Page Design

## Scope

Create the dedicated page `/tuyen-dung/yeu-cau` for recruitment requirements at Bảo vệ Thế An. The page uses the supplied content screenshot as the factual source and the supplied editorial reference image as the visual direction.

The page must use Bảo vệ Thế An's company information. It must not display the Thanh Bình Phú Mỹ name, Ms Thảo, or any contact details from the source screenshot.

## Visual Direction

Use an editorial checklist layout inspired by the approved reference:

- generous white space and a restrained, premium composition;
- a strong introductory heading aligned with the site's existing recruitment pages;
- two balanced desktop columns containing four content modules;
- a small circular icon composition beside each module, using navy, gold, cream, and muted blue from the existing site identity;
- short headings, compact supporting copy, and easy-to-scan bullet points;
- no heavy card grid, carousel, animation, or decorative stock imagery.

The circular visuals use Lucide icons and CSS shapes rather than new bitmap assets. They are decorative and hidden from assistive technology.

## Page Structure

### Banner

Reuse `PageBanner` with:

- title: “Yêu cầu ứng viên”;
- a concise subtitle explaining that applicants can review the standards and prepare their documents before applying;
- breadcrumb parent: “Tuyển dụng” linking to `/tuyen-dung`;
- compact presentation consistent with `/tuyen-dung/quyen-loi-nhan-vien`.

### Editorial introduction

Use the eyebrow “Tiêu chuẩn tuyển dụng” and the main heading “Bạn đã sẵn sàng gia nhập Thế An?”.

Add one short paragraph explaining that the requirements are straightforward and that applicants without prior security experience can still apply.

### Requirement modules

Render four ordered modules in a two-column desktop grid and a one-column mobile layout:

1. **Tác phong và kỹ năng**
   - Lịch sự, nghiêm túc và chuyên nghiệp.
   - Có tinh thần trách nhiệm, trung thực và chăm chỉ.
   - Thân thiện với khách hàng và nhân viên tại mục tiêu.
   - Có kỹ năng giao tiếp, ứng xử cơ bản.

2. **Tiêu chuẩn ứng viên**
   - Là công dân Việt Nam.
   - Nam từ 18–55 tuổi, cao từ 1,64 m.
   - Nữ từ 18–38 tuổi, cao từ 1,54 m.
   - Lý lịch rõ ràng; không có tiền án, tiền sự và không sử dụng ma túy.
   - Tác phong phù hợp môi trường bảo vệ: không xăm hình lộ, không nhuộm tóc nổi bật; nhân viên nữ không sơn móng tay khi làm việc.

3. **Hồ sơ cần chuẩn bị**
   - Không yêu cầu bằng cấp hoặc kinh nghiệm.
   - Đơn xin việc và sơ yếu lý lịch.
   - Hộ khẩu, CCCD/CMND và giấy khám sức khỏe.
   - Các bằng cấp, chứng chỉ liên quan nếu có.

4. **Bắt đầu công việc**
   - Ứng viên có thể bổ sung hồ sơ sau khi nhận việc theo hướng dẫn của bộ phận tuyển dụng.
   - Có CCCD/CMND bản gốc để đối chiếu khi làm thủ tục nhận việc.
   - Bộ phận tuyển dụng sẽ hướng dẫn lịch phỏng vấn và hồ sơ còn thiếu.

Each module has a two-digit index, an icon, a title, and a semantic bullet list. The wording remains faithful to the supplied content while using professional, current terminology.

### Recruitment contact

End the page with a distinct navy contact panel containing:

- label “Liên hệ tuyển dụng”;
- company name from `COMPANY.fullName`;
- hotline, email, address, and working hours from `COMPANY`;
- primary action “Gọi ứng tuyển” using a `tel:` link;
- secondary action “Gửi email” using a `mailto:` link.

Do not add an application form.

## Responsive Behavior

- Desktop: editorial content is a two-column grid with generous horizontal and vertical spacing.
- Tablet: retain two columns where space permits, with reduced gaps.
- Mobile: use one column, place each icon above or beside its content without shrinking text, and stack the two contact actions.
- Prevent horizontal overflow and preserve a minimum comfortable tap target for both actions.

## Architecture

- Add a static App Router Server Component at `app/(frontend)/tuyen-dung/yeu-cau/page.tsx`.
- Keep the ordered module content in a small typed data export so copy and ordering can be tested independently from presentation.
- Reuse `PageBanner`, `Container`, `Button` where their existing interfaces fit, and `COMPANY` as the single source of company contact data.
- Use Tailwind utilities local to the page. Do not add global CSS or a client component.
- Export static `Metadata` with the canonical URL `https://baovethean.vn/tuyen-dung/yeu-cau`.

## Accessibility and Semantics

- Use one page-level `h1` from `PageBanner`; the editorial heading is `h2`, and module titles are `h3`.
- Render modules as an ordered list and their requirements as nested unordered lists.
- Hide decorative icon compositions with `aria-hidden`.
- Keep visible focus states and sufficient contrast for links and action buttons.
- Use descriptive link labels instead of bare contact values for the primary actions.

## Testing and Verification

- Add a focused Node test that asserts four ordered requirement modules, their key source facts, and the Bảo vệ Thế An contact source.
- Add a source-level page contract test for the approved route metadata, banner, two-column responsive layout, and `tel:`/`mailto:` actions.
- Verify each new test fails for the expected missing-feature reason before implementation.
- Run the focused tests, ESLint, TypeScript/production build, and `git diff --check`.
- Inspect `/tuyen-dung/yeu-cau` at desktop, tablet, and mobile widths for spacing, hierarchy, wrapping, overflow, and action usability.

## Out of Scope

- An online application form or backend submission flow.
- CMS management for requirement copy.
- Animation, carousel, filtering, or client-side state.
- Changes to other recruitment pages or the existing navigation implementation.
- Reusing contact information from the supplied content screenshot.
