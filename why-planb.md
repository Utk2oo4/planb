# CSEWhy PlanB --- "Why PlanB?" Section

## Purpose

Create the section directly after the homepage hero that explains why
UPSC aspirants may benefit from building career-ready skills alongside
their preparation. It should feel like a natural continuation of the
CSEWhy PlanB homepage: simple, professional, reassuring, and practical.

This section is not meant to discourage UPSC preparation or create fear.
It should position PlanB as a way to keep options open, build useful
skills, and explore meaningful careers while continuing the UPSC
journey.

## Brand design tokens

  -----------------------------------------------------------------------
  Token                   Value                   Usage
  ----------------------- ----------------------- -----------------------
  Signature yellow        `#FFD52F`               Small headline
                                                  highlights and icon
                                                  backgrounds

  Black                   `#111111`               Headings, body text,
                                                  icons

  White                   `#FFFFFF`               Card surfaces

  Warm neutral            `#F7F5EF`               Main section background

  Secondary text          `#555555`               Supporting descriptions

  Subtle border           `#E5E2DA`               Card outlines and
                                                  dividers
  -----------------------------------------------------------------------

Use the yellow sparingly. Avoid gradients, dark full-bleed backgrounds,
glassmorphism, excessive shadows, and decorative AI-style visuals.

## Section content

**Eyebrow:** `WHY PLANB?`

**Headline:**

> Your UPSC preparation can open more than one door.

Optional visual treatment: highlight `more than one door` or `PlanB`
using a rectangular `#FFD52F` background with black text. Do not
highlight multiple phrases in the same heading.

**Supporting copy:**

> Preparing for UPSC builds knowledge, discipline, research, and
> analytical thinking. PlanB helps you complement that foundation with
> practical skills and explore career opportunities beyond the
> examination---without giving up on your UPSC goal.

Keep the paragraph to approximately two or three lines on desktop.

## Benefit cards

Use three cards in a single row on desktop and stack them vertically on
small screens. Each card should have a small black outline icon inside a
pale-yellow circle, a short title, and a concise description.

### Card 1 --- UPSC is uncertain

**Suggested icon:** Calendar or compass.

**Description:**

> Keep building useful skills while your preparation continues. A longer
> journey does not have to mean putting every other opportunity on hold.

### Card 2 --- More career paths

**Suggested icon:** Network or signpost.

**Description:**

> Explore fields such as AI, public policy, research, consulting,
> communication, and social impact.

### Card 3 --- Build practical skills

**Suggested icon:** Chart, briefcase, or tools.

**Description:**

> Turn your knowledge into practical experience through structured
> learning, assignments, projects, and career-focused guidance.

Avoid promises of employment, earnings, or placement unless supported by
verified outcomes.

## Layout and spacing

### Desktop

-   Use a full-width `#F7F5EF` section.
-   Center the section heading and supporting paragraph.
-   Place three equally sized white cards beneath the introduction.
-   Keep the content container around `1200–1280px` wide.
-   Use consistent card heights, with text aligned to the top.
-   Maintain generous whitespace between the heading, paragraph, and
    cards.
-   Use subtle `1px` borders in `#E5E2DA` and a moderate corner radius.
-   Avoid strong drop shadows. If needed, use a very subtle hover shadow
    only.

### Tablet

-   Keep the centered heading and paragraph.
-   Use a three-column layout if the cards remain readable; otherwise
    switch to two columns and allow the final card to span the row.

### Mobile

-   Stack the cards in one column.
-   Keep icons, titles, and descriptions left-aligned within each card.
-   Use comfortable spacing and tap-friendly sizing.
-   Reduce heading size while maintaining a clear visual hierarchy.
-   Avoid horizontal scrolling for these benefit cards.

## Visual style

-   Typeface: the existing site font, or a clean sans-serif such as
    Inter or Manrope.
-   Heading: bold black typography with a tight but readable
    line-height.
-   Body: regular-weight `#555555` text.
-   Icons: simple black outline icons, consistent in stroke and size.
-   Icon circles: pale yellow derived from the brand yellow, such as
    `#FFF0B0`.
-   Cards: white backgrounds with subtle neutral borders.
-   Hover behavior: a slight border-color change or minimal upward
    movement; no dramatic animation.

## Suggested sizing

-   Section padding: `72–96px` vertically on desktop; `48–64px` on
    mobile.
-   Content max-width: `1280px`.
-   Heading: `clamp(2rem, 3.2vw, 3rem)`.
-   Supporting text: `1.05–1.15rem`, with a line-height around `1.6`.
-   Card padding: `24–28px` desktop and `20px` mobile.
-   Icon circle: `44–52px`.
-   Grid gap: `20–24px`.

Treat these as starting points and match the existing site's spacing and
typography system.

## Optional transition to the next section

At the bottom, a small text link may lead into the next homepage
section:

**Link label:** `Explore career paths →`

Link it to the career opportunities section or page if that destination
exists. Do not add a CTA merely for decoration.

## Accessibility and implementation

-   Use semantic section and heading elements.
-   Keep text contrast readable.
-   Decorative icons should be hidden from screen readers; meaningful
    icons should have appropriate accessible labels.
-   Preserve keyboard navigation and visible focus styles for any link
    or interactive card.
-   Respect reduced-motion preferences.
-   Use reusable card components and centralized content data if the
    site already follows that pattern.
-   Ensure the section works at desktop, tablet, and mobile breakpoints.

## Content and trust requirements

-   Avoid fear-based copy such as "your future is at risk."
-   Do not imply that UPSC preparation is wasted if an aspirant does not
    clear the exam.
-   Do not invent statistics, placement numbers, salary figures, or job
    guarantees.
-   Keep the language supportive, realistic, and career-focused.
-   The section should make clear that PlanB complements UPSC
    preparation rather than replacing it.

## Acceptance checklist

-   [ ] Section visually continues the hero's white/cream, black, and
    yellow design system.
-   [ ] Headline and supporting copy are concise and easy to scan.
-   [ ] Three benefit cards explain uncertainty, career options, and
    practical skills.
-   [ ] Cards use consistent icons, spacing, borders, and typography.
-   [ ] Desktop, tablet, and mobile layouts are responsive.
-   [ ] No unnecessary animations, gradients, or decorative AI-like
    graphics.
-   [ ] No unsupported career, salary, or placement claims.
-   [ ] The section transitions naturally into the next homepage
    section.
