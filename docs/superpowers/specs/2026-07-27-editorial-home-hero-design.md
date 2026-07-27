# Editorial Home Hero Design

## Scope

Redesign only the home-page Hero and add one Hero-owned testimonial carousel component. Keep the existing guard image, routes, header component, logo, menu structure, and all sections below the Hero unchanged.

## Desktop composition

- Use a full-width, 92–100vh bright photographic canvas with a centered content area up to 1520px.
- Keep the existing guard as the visual focus in the center-right portion of the frame.
- Place a three-line uppercase headline in the left 35–38% of the composition.
- Place one static introduction paragraph to the right of the guard without carousel controls or a card background.
- Place compact service pills at bottom-left.
- Place one small white testimonial carousel card at bottom-right.
- Remove the current STATS strip.

## Visual treatment

- Preserve natural daylight, white uniform, skin tone, and glass-building colors.
- Apply only a localized left-to-right contrast gradient; do not tint the entire image navy.
- Use clean white typography, restrained blue branding, and bronze only for testimonial stars.
- Avoid large panels, heavy shadows, glow, cinematic grading, and excessive glass effects.

## Content and interaction

- Headline: “AN TOÀN CỦA BẠN / LÀ TRÁCH NHIỆM / CỦA CHÚNG TÔI”.
- Supporting copy and CTA labels follow the supplied brief.
- Four service pills link to the services page with stable hash targets.
- The right-side introduction remains static.
- The testimonial card cycles through three array-backed reviews every 5.5 seconds, pauses on hover/focus, supports previous/next buttons and keyboard focus, and disables autoplay when reduced motion is requested.
- Because no customer portrait assets exist in the repository, use compact initial avatars rather than inventing or downloading customer photos.

## Responsive behavior

- Desktop preserves the reference composition.
- Laptop tightens widths and type scale.
- Tablet may hide the static right paragraph when space becomes constrained.
- Mobile moves the headline to the upper area, keeps the guard visible in the lower background, makes service pills horizontally scrollable, and places the testimonial at the bottom without covering the guard’s face.

## Verification

- Lint all changed Hero files.
- Run TypeScript/Next production build with required project environment.
- Inspect desktop, tablet, and mobile composition when a browser surface is available.
- Confirm no changes occur outside Hero-owned files and documentation.
