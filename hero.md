# CSEWhy PlanB --- Hero Section

## Purpose

Create a clean, professional hero section for the CSEWhy PlanB homepage.
It should feel like a credible education and career platform---not a
generic AI-generated landing page. Continue the same visual language
used throughout the homepage: warm neutrals, black typography, and
signature yellow accents.

## Brand design tokens

  -----------------------------------------------------------------------
  Token                   Value                   Usage
  ----------------------- ----------------------- -----------------------
  Signature yellow        `#FFD52F`               Primary buttons and
                                                  headline highlights

  Black                   `#111111`               Headings, body text,
                                                  icons

  White                   `#FFFFFF`               Navigation and card
                                                  surfaces

  Warm neutral            `#F7F5EF`               Soft section
                                                  backgrounds

  Secondary text          `#555555`               Supporting copy

  Subtle border           `#E5E2DA`               Dividers and outlines
  -----------------------------------------------------------------------

Use yellow selectively. Avoid gradients, glassmorphism, excessive
shadows, floating UI badges, and decorative AI-style graphics.

## Navbar

-   White background with a subtle bottom border.
-   Left: `CSEWhy | PlanB`; highlight `PlanB` with a yellow background.
-   Center/right navigation: `Home`, `Courses`, `Placements`,
    `Testimonials`, `About Us`.
-   Right-side primary CTA: **Explore Courses →**
-   Use black text, comfortable spacing, and a simple sans-serif
    typeface.
-   Keep the navbar sticky only if it fits the existing site behavior.
-   On mobile, collapse navigation into a simple menu and retain a clear
    course CTA.

## Hero content

**Eyebrow:** `SKILLS  |  CAREERS  |  OPPORTUNITIES`

**Headline:**

> UPSC is your goal.\
> Your future deserves a **Plan B.**

Highlight only `Plan B.` with a rectangular `#FFD52F` background and
black text.

**Supporting copy:**

> Build practical, career-ready skills alongside your UPSC preparation.
> Explore AI, public policy, communication and career development
> without putting your future on hold.

**Primary CTA:** `Explore Courses →`

Link to the homepage courses section or `/courses`.

**Secondary CTA:** `Watch How PlanB Helps`

Use this only if a real overview video exists. Otherwise, replace it
with `Explore Career Outcomes` and link to `/placements`.

**Optional benefit row:** - Practical learning - Live guidance - Career
opportunities - Learn alongside preparation

Use small, consistent outline icons. Keep the row understated and avoid
adding unsupported claims.

## Hero layout

### Desktop

-   Two-column composition, approximately 50/50.
-   Left column: eyebrow, headline, supporting copy, CTAs, optional
    benefit row.
-   Right column: one authentic, editorial-style photograph of an Indian
    UPSC aspirant studying, ideally with a public-policy book or study
    materials.
-   Align content vertically around the middle of the image.
-   Keep generous whitespace and a clear text hierarchy.
-   Use a white or warm-neutral background. If needed, use a very subtle
    fade between the text and image rather than a dramatic overlay.

### Image guidance

Use a natural photograph rather than a composite full of symbols,
floating cards, charts, or decorative labels. Avoid text embedded inside
the image. The image should feel like a real editorial photograph and
complement the message without competing with the headline.

Suggested image subject: a young Indian student seated on steps near a
government or university building, holding study materials, looking
thoughtful and optimistic. Leave enough quiet space on the left if the
image is used as a background.

Recommended image treatment: - `object-fit: cover` - Use a focal
position that keeps the student visible. - Add descriptive alt text, for
example:
`UPSC aspirant holding study materials outside a public building`. - Use
a responsive image source and appropriate compression.

### Mobile

-   Stack the text first and image second.
-   Reduce headline size while keeping `Plan B.` highlighted.
-   Make the primary CTA full-width or comfortably tappable.
-   Keep the supporting paragraph to a readable line length.
-   Avoid placing text over a busy part of the photograph.
-   Hide the optional benefit row if it makes the first screen too
    crowded.

## Visual styling

-   Typeface: a clean sans-serif such as Inter, Manrope, or the existing
    site font.
-   Headline: bold, tight line-height, black; avoid overly condensed or
    exaggerated display type.
-   Body copy: regular weight, comfortable line-height, secondary gray.
-   Buttons: yellow fill, black text, medium radius, clear hover/focus
    states.
-   Secondary button: white or transparent fill with a thin black
    border.
-   Corner radius: moderate and consistent with the rest of the site.
-   Motion: minimal; use only subtle hover transitions if needed.
-   Accessibility: maintain sufficient contrast, visible keyboard focus,
    descriptive links, and reduced-motion support.

## Suggested desktop sizing

-   Content max-width: `1280px`
-   Navbar height: around `72px`
-   Hero vertical padding: `64–88px`
-   Headline: `clamp(2.7rem, 4.5vw, 4.8rem)`
-   Body copy: `1.05–1.2rem`
-   CTA height: at least `48px`
-   Two-column gap: `32–56px`

Treat these as starting points, not rigid requirements. Match the actual
typography and spacing scale of the existing project.

## Interaction and destinations

-   `Explore Courses` should scroll to the course section if it lives on
    the homepage; otherwise, route to the Courses page.
-   `Explore Career Outcomes` should route to the placements/career
    outcomes page.
-   Do not display a video play button unless a real video is available.
-   All interactive elements must have hover, focus, and
    keyboard-accessible states.

## Copy and trust requirements

-   Do not invent student counts, placement statistics, salary outcomes,
    or guarantees.
-   Avoid implying that UPSC preparation is wasted if a student does not
    clear the exam.
-   Position PlanB positively: building additional skills and keeping
    career options open while preparing.
-   Keep the tone confident, supportive, and practical.

## Acceptance checklist

-   [ ] Navbar uses the same palette and typography as the rest of the
    website.
-   [ ] Headline clearly communicates the PlanB value proposition.
-   [ ] `Plan B.` is highlighted in signature yellow.
-   [ ] Primary CTA is visually prominent and navigates correctly.
-   [ ] Secondary CTA points to a real destination.
-   [ ] Hero image looks natural and is not cluttered with generated UI
    elements.
-   [ ] Layout works at desktop, tablet, and mobile breakpoints.
-   [ ] No unsupported statistics or career guarantees appear.
-   [ ] Contrast, alt text, focus states, and tap targets meet
    accessibility needs.
