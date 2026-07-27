# Recruitment Navigation Dropdown Design

## Scope

Add a “TUYỂN DỤNG” item to the site navigation. It opens a compact dropdown containing four links:

- Quyền lợi nhân viên → `/tuyen-dung/quyen-loi-nhan-vien`
- Khu vực cần tuyển → `/tuyen-dung/khu-vuc-can-tuyen`
- Đào tạo → `/tuyen-dung/dao-tao`
- Yêu cầu → `/tuyen-dung/yeu-cau`

Only the navigation and links are included. The destination pages are outside this change.

## Component Design

Create a reusable desktop navigation dropdown component. The component receives its label, items, active paths, overlay state, and stable panel identifier through props. It owns only interaction state and accessibility behavior.

The visual treatment stays intentionally simple: a white bordered panel, plain link rows, and a background/text color change on hover or active state. It will not include icons, descriptions, promotional panels, or other rich UI.

Use the shared component for the new recruitment menu. Existing “Giới thiệu” UI remains unchanged to avoid expanding the scope.

## Interaction

- Desktop: open on pointer hover or trigger click.
- Keyboard: Enter/Space toggles through the native button; Arrow Down opens the menu and focuses its first link; Escape closes it and returns focus to the trigger.
- Clicking outside closes the menu.
- The recruitment trigger is active on `/tuyen-dung` and all nested recruitment routes.
- Mobile: show “Tuyển dụng” as a simple expandable group in the existing drawer, with the same four destinations.

## Data and Testing

Keep recruitment link definitions in a dedicated shared data module so desktop and mobile navigation use identical labels and URLs.

Add focused tests for the shared menu data and/or render behavior where supported by the existing test setup. Run lint and the relevant build/type validation after implementation.

