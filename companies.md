# CSEWhy PlanB --- Hiring Companies & Career Destinations Section

## Purpose

Create a homepage section that builds confidence by showing the kinds of
organizations and sectors where CSEWhy learners and fellows have
progressed professionally.

Continue the established PlanB visual language: warm neutral background,
black typography, signature yellow highlights, white cards, subtle
borders, and generous whitespace.

**Important distinction:** Clearly separate confirmed **hiring
partners** from **alumni career destinations**. An organization where a
learner independently secured a role is not automatically a hiring
partner. Do not imply endorsement, affiliation, or recruitment
partnership from displaying a logo. Check logo-use permissions and
applicable brand guidelines before publishing.

## Brand design tokens

  Token              Value       Usage
  ------------------ ----------- --------------------------------------
  Signature yellow   `#FFD52F`   Headline highlight and small accents
  Black              `#111111`   Headings and primary text
  White              `#FFFFFF`   Logo cards and surfaces
  Warm neutral       `#F7F5EF`   Section background
  Secondary text     `#555555`   Supporting copy
  Subtle border      `#E5E2DA`   Card borders and separators

Avoid gradients, dark backgrounds, glassmorphism, heavy shadows,
animated logo effects, and decorative AI-style graphics.

## Section content

**Eyebrow:** `CAREER DESTINATIONS`

Use `OUR HIRING PARTNERS` only when every displayed organization is a
confirmed hiring partner.

**Headline:**

> Our learners are building careers at leading organizations.

Optionally highlight `leading organizations` with a rectangular
`#FFD52F` background and black text.

**Supporting copy:**

> PlanB helps learners build practical skills for opportunities across
> public policy, governance, consulting, research, development,
> communication, and technology.

If the section shows alumni destinations rather than formal hiring
partners, use:

> Explore some of the organizations and sectors where our learners have
> pursued professional opportunities.

Keep the introduction centered, concise, and factual.

## Logo grid

### Layout

-   Display organization logos in a responsive grid.
-   Desktop: five or six columns depending on available width and logo
    proportions.
-   Tablet: three columns.
-   Mobile: two columns, or a horizontal carousel if the collection is
    large.
-   Use consistent card dimensions and generous internal padding.
-   Center logos vertically and horizontally.
-   Preserve each logo's original aspect ratio.
-   Use white card backgrounds, subtle neutral borders, and moderate
    corner radii.
-   Keep logos visually balanced without recoloring official brand
    marks.

### Logo card behavior

-   Use official, high-resolution logo assets from approved sources.
-   Prefer SVG or transparent PNG files.
-   Use `object-fit: contain`.
-   Set a consistent maximum logo height and width.
-   Do not stretch, crop, recolor, or recreate company logos.
-   Provide descriptive alt text for each logo.
-   Avoid hover animations that distort or enlarge logos.
-   If cards are not clickable, do not style them as links.

### Organization data

Maintain the logos and labels in a centralized data file, for example:

``` ts
type Organization = {
  name: string;
  logo: string;
  category?: string;
  relationship: "hiring_partner" | "alumni_destination";
  verified: boolean;
  permissionConfirmed: boolean;
};

export const organizations: Organization[] = [
  // Add only organizations with verified information and approved logo usage.
];
```

Only render an organization after its relationship and supporting
evidence have been reviewed. Do not populate the production grid with
organizations merely because they appear in a design reference.

## Suggested organization categories

If the organization list is extensive, organize it by sector: - Public
policy and governance - Government and public institutions -
International development - Consulting and research - Corporate social
responsibility - Nonprofits and social impact - Technology and
communications

Use categories only where they accurately describe the organizations
being shown.

## Closing statement

Place a short statement beneath the logo grid, optionally framed by thin
neutral divider lines.

**Suggested copy:**

> From public institutions and development organizations to consulting,
> research, and technology, our learners are exploring meaningful career
> paths.

Optionally highlight `meaningful career paths` in signature yellow.

If the section shows only confirmed hiring partners, use:

> We continue to build connections that help learners access relevant
> professional opportunities.

Do not suggest that every learner has been hired by the organizations
displayed.

## Optional CTA

**Label:** `Explore learner outcomes →`

Destination: the PlanB Placements or Career Outcomes page.

Use this only when that page exists and contains real, reviewable
student stories.

## Responsive and visual specifications

### Desktop

-   Section padding: `72–96px` vertically.
-   Content max-width: `1280px`.
-   Headline: `clamp(2rem, 3.2vw, 3rem)`.
-   Supporting paragraph: maximum width around `850px`.
-   Logo card grid gap: `16–20px`.
-   Logo card height: approximately `120–150px`, adjusted for actual
    logo proportions.

### Tablet

-   Use three columns.
-   Reduce card padding while preserving logo visibility.
-   Keep the heading centered and supporting text readable.

### Mobile

-   Use two columns for a compact grid.
-   If there are many logos, use a swipeable horizontal carousel with
    visible navigation cues.
-   Avoid tiny logos and crowded cards.
-   Ensure no horizontal overflow.

## Accessibility

-   Use semantic section and heading elements.
-   Provide meaningful alt text for organization logos.
-   Maintain sufficient text contrast.
-   Ensure carousel controls, if present, are keyboard accessible and
    have clear accessible labels.
-   Do not communicate an organization's relationship with CSEWhy
    through logo placement alone; provide a clear section label or
    caption.
-   Respect reduced-motion preferences.

## Trust, legal, and content requirements

-   Never invent hiring partners, employer relationships, alumni
    outcomes, or placement statistics.
-   Do not use organization logos without checking applicable permission
    and brand-use requirements.
-   Do not imply that an organization endorses CSEWhy or its courses
    merely because its logo is displayed.
-   Confirm the learner's role, organization, and outcome before
    publishing an alumni destination.
-   Obtain learner consent before publishing their name, photograph,
    testimonial, or employment details.
-   If an outcome is an internship, freelance engagement, project, or
    volunteer opportunity, label it accurately; do not present it as a
    full-time placement.
-   Do not imply guaranteed placements or employment.
-   Keep the tone credible, factual, and celebratory without
    exaggeration.

## Acceptance checklist

-   [ ] Matches the CSEWhy PlanB color palette and homepage design.
-   [ ] Section heading accurately describes the organizations shown.
-   [ ] Hiring partners and alumni destinations are clearly
    distinguished.
-   [ ] Every organization and logo is verified before publication.
-   [ ] Logo aspect ratios and original brand colors are preserved.
-   [ ] Responsive grid works on desktop, tablet, and mobile.
-   [ ] Carousel controls work if a carousel is used.
-   [ ] No unsupported placement claims or implied endorsements.
-   [ ] Learner and logo permissions have been checked.
-   [ ] Closing statement and CTA link to a real career outcomes
    destination.
