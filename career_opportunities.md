# CSEWhy PlanB --- Career Opportunities Section

## Purpose

Create a professional homepage section introducing career paths UPSC
aspirants can explore alongside or beyond civil services. This section
should follow the "Why PlanB?" section and continue the same visual
design system: warm neutral background, black typography, signature
yellow accents, restrained icons, and simple cards.

The section should be encouraging and practical. Avoid framing aspirants
as "failed" candidates; focus on transferable skills, meaningful work,
and career possibilities.

## Brand design tokens

  -----------------------------------------------------------------------
  Token                   Value                   Usage
  ----------------------- ----------------------- -----------------------
  Signature yellow        `#FFD52F`               Headline highlight and
                                                  small icon backgrounds

  Black                   `#111111`               Headings, card titles,
                                                  icons

  White                   `#FFFFFF`               Card backgrounds

  Warm neutral            `#F7F5EF`               Main section background

  Secondary text          `#555555`               Descriptions

  Subtle border           `#E5E2DA`               Card borders and
                                                  separators
  -----------------------------------------------------------------------

Use yellow as an accent, not as a large background for every element.
Avoid gradients, dark green backgrounds, glassmorphism, heavy shadows,
emoji-heavy designs, and excessive animations.

## Section content

**Eyebrow:** `CAREER OPPORTUNITIES`

**Headline:**

> Your UPSC preparation can take you beyond the exam.

Optional treatment: highlight `beyond the exam` using a rectangular
`#FFD52F` background with black text.

**Supporting copy:**

> Your research, analytical thinking, understanding of governance, and
> communication skills can be valuable across many fields. Explore
> career paths where you can apply what you know and continue creating
> meaningful impact.

Keep the text centered and concise, ideally no more than three lines on
desktop.

## Career opportunity cards

Show five career categories. Use a responsive two-column layout for the
first four cards and center the fifth card below them on desktop, or use
a balanced three-column grid if that fits the site's existing layout
better. Cards should have consistent styling and avoid making one
category appear more important than the others.

Each card includes: - A simple black outline icon. - A concise title. -
A short, practical description. - Optional "Explore path" link only if a
relevant destination exists.

### 1. Public Policy & Governance

**Suggested icon:** Landmark, document, or government building.

**Description:**

> Work with think tanks, research organizations, nonprofits, or public
> institutions on policy research, governance, and evidence-informed
> decision-making.

### 2. Social Impact Consulting

**Suggested icon:** People, hand-heart, or community.

**Description:**

> Help organizations address challenges in education, health,
> livelihoods, and community development through research, strategy, and
> program design.

### 3. Political Consulting

**Suggested icon:** Megaphone, chart, or strategy map.

**Description:**

> Explore campaign research, public opinion, voter outreach,
> communications, and political strategy roles.

### 4. Corporate Social Responsibility (CSR)

**Suggested icon:** Building, people, or leaf.

**Description:**

> Support organizations in planning and evaluating social-impact
> initiatives, community programs, and sustainability projects.

### 5. NGO & Development Sector

**Suggested icon:** Hands holding a heart, sprout, or community.

**Description:**

> Contribute to mission-driven organizations working across education,
> health, livelihoods, governance, and grassroots development.

Descriptions should communicate possibilities, not guarantee eligibility
or employment. Requirements differ by employer and role.

## Layout and hierarchy

### Desktop

-   Full-width section with a `#F7F5EF` background.
-   Centered eyebrow, headline, and supporting paragraph.
-   Career cards in a spacious grid below the introduction.
-   Recommended layout: two columns for the first four cards and a
    centered fifth card with a width similar to one card or slightly
    wider.
-   Keep the card content left-aligned for readability.
-   Use equal internal padding, aligned titles, and consistent icon
    sizes.
-   Add a short closing statement below the grid.

### Tablet

-   Use two columns.
-   Allow the final card to occupy one column or span the row depending
    on available width.

### Mobile

-   Stack cards in a single column.
-   Keep icons and text aligned neatly.
-   Use comfortable spacing and avoid horizontal scrolling.
-   Reduce heading size while preserving the highlighted phrase.

## Card design

-   Background: `#FFFFFF`.
-   Border: `1px solid #E5E2DA`.
-   Radius: approximately `16px`.
-   Padding: `24–28px` desktop and around `20px` mobile.
-   Icon: `24–28px` black outline, placed in a pale-yellow circle
    (`#FFF0B0`) around `44–52px`.
-   Title: bold black, around `1.1–1.25rem`.
-   Description: `#555555`, around `0.95–1rem`, line-height around
    `1.6`.
-   Hover: subtle border change or slight lift; avoid dramatic motion
    and large shadows.

Use a consistent icon library already installed in the project. Do not
use emoji as the primary icons.

## Closing statement

Place a centered statement beneath the cards, separated by whitespace or
thin neutral divider lines.

**Suggested copy:**

> Your preparation has value. Put your skills to work and explore ways
> to create impact beyond the examination.

Optionally highlight `create impact` with the signature yellow. Keep the
statement supportive rather than fear-based.

## Suggested sizing

-   Section padding: `72–96px` vertically on desktop and `48–64px` on
    mobile.
-   Content max-width: `1200–1280px`.
-   Headline: `clamp(2rem, 3.2vw, 3rem)`.
-   Intro paragraph: maximum width around `850px`.
-   Grid gap: `20–24px`.
-   Card minimum height: determined by content, with consistent spacing
    rather than forced excessive height.

Treat these as starting points and follow the spacing system established
by the hero and "Why PlanB?" sections.

## Interaction and navigation

-   Career cards may be informational rather than clickable.
-   Add a link only when there is a real, relevant page to visit.
-   If a future "Career Paths" page is created, use a consistent
    `Explore career paths →` CTA.
-   Do not create empty links, fake buttons, or destinations that do not
    exist.

## Trust and accuracy

-   Do not describe these careers as guaranteed jobs for UPSC aspirants.
-   Avoid the phrase "failed UPSC aspirants"; use "UPSC aspirants,"
    "aspirants exploring alternatives," or "career paths beyond civil
    services."
-   Do not invent salary ranges, hiring statistics, placement rates, or
    employer partnerships.
-   Mention that each role may require additional skills, experience, or
    qualifications where appropriate.
-   Keep the tone practical, optimistic, and respectful.

## Accessibility and implementation

-   Use semantic section and heading elements.
-   Ensure text contrast meets accessibility expectations.
-   Decorative icons should be hidden from assistive technology;
    meaningful icons should have labels.
-   Maintain visible keyboard focus for interactive links.
-   Respect reduced-motion preferences.
-   Use reusable `CareerOpportunityCard` components and a centralized
    data array if that matches the existing codebase.
-   Verify the layout at desktop, tablet, and mobile breakpoints.

## Acceptance checklist

-   [ ] Matches the established CSEWhy PlanB palette and visual
    language.
-   [ ] Uses a concise headline and clear introductory copy.
-   [ ] Includes all five career categories.
-   [ ] Card descriptions are realistic and do not imply guaranteed
    employment.
-   [ ] Icons, spacing, typography, borders, and radii are consistent.
-   [ ] Layout is responsive and accessible.
-   [ ] No unnecessary gradients, emoji-heavy visuals, or excessive
    animation.
-   [ ] Closing statement transitions naturally into the next homepage
    section.
