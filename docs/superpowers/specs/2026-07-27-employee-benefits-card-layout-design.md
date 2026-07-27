# Employee Benefits Card Layout Design

## Scope

Redesign only the employee-benefits section on `/tuyen-dung`. Preserve the surrounding recruitment hero, requirements, process, testimonials, and call-to-action sections.

The section uses the exact six benefit points supplied in the reference:

1. Mức lương từ 6.000.000 – 12.000.000 đồng/tháng tùy vị trí làm việc.
2. Thanh toán lương theo tuần đối với nhân viên thời vụ.
3. Miễn phí toàn bộ đồng phục.
4. Bao ăn, ở tùy khu vực làm việc, mục tiêu làm việc.
5. CMND gốc đi làm ngay.
6. Môi trường làm việc thân thiện.

Above the cards, show:

- Heading: “Quyền lợi nhân viên”.
- Recruitment notice: “TUYỂN GẤP 50 NHÂN VIÊN BẢO VỆ, BẢO VỆ THỜI VỤ, CƠ ĐỘNG, ĐỘI TRƯỞNG”.
- Location notice: “KHU VỰC: BÌNH DƯƠNG, TP HCM, TIỀN GIANG, BÌNH THUẬN”.

## Layout

Use an infographic-card presentation inspired by the second reference image:

- Desktop: four cards in the first row and two cards centered in the second row.
- Tablet: two cards per row.
- Mobile: one card per row.
- Every card has equal visual weight, a raised circular icon, a horizontal benefit label, a concise title, and the full benefit statement.

The second row must be centered without placeholder elements that would be exposed to assistive technology.

## Visual Treatment

Keep the existing site identity rather than copying the reference image's blue palette:

- White cards on a restrained light background.
- Navy icon circles and label bands.
- Gold accents for the icon or small decorative details.
- Rounded corners, subtle border, and soft shadow.
- Comfortable vertical spacing so the raised icons do not overlap nearby content.

The recruitment and location notices remain prominent, but use the site's navy/gold system instead of fluorescent text highlighting.

## Component and Data Design

Keep `RecruitBenefits` as a static Server Component because the section has no interaction. Render the six cards from `RECRUIT_BENEFITS` so content stays separate from presentation.

Update the benefit data to match the supplied text. Retain typed icon identifiers and use six semantically appropriate Lucide icons. Each card is an `article` under a section heading.

## Testing and Verification

- Add a focused data test that asserts there are exactly six benefits and that all supplied statements are present.
- Verify the test fails before changing production data.
- Run the focused test, ESLint, and the production build.
- Inspect `/tuyen-dung` at desktop, tablet, and mobile widths, confirming the 4 + 2, 2-column, and 1-column arrangements and checking for clipping or overlap.

## Out of Scope

- Changing other recruitment sections.
- Adding animations, carousels, filtering, or client-side state.
- Rewriting site-wide typography or color tokens.
