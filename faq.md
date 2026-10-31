# CSEWhy PlanB --- FAQ Section

## Purpose

Build a simple, professional FAQ section for the CSEWhy PlanB homepage.
Continue the established design system: warm cream background, black
typography, signature yellow highlights, white accordion rows, and
subtle neutral borders. Keep it minimal: no decorative illustrations,
gradients, floating icons, or oversized contact banners.

## Brand colors

  Token              Value       Usage
  ------------------ ----------- -------------------------------------
  Signature yellow   `#FFD52F`   Heading highlight and number badges
  Black              `#111111`   Headings, questions, icons
  White              `#FFFFFF`   Accordion surfaces
  Warm neutral       `#F7F5EF`   Section background
  Secondary text     `#555555`   Answers
  Subtle border      `#E5E2DA`   Accordion borders

## Header

**Eyebrow:** GOT QUESTIONS?

**Headline:** Frequently Asked **Questions**

Highlight only "Questions" with a rectangular `#FFD52F` background and
black text.

**Subtitle:** Everything you need to know about PlanB.

Center the header and leave generous whitespace around it.

## FAQ content

Display eight numbered questions in one vertical accordion list. Answers
appear when a visitor expands a row.

### 01. What is CSEWhy PlanB?

CSEWhy PlanB is a career-focused learning initiative designed for UPSC
aspirants who want to build practical skills and explore opportunities
beyond civil services. Through fellowships, training programs and career
guidance, we help learners develop skills in areas like AI, public
policy, communication and professional development.

### 02. Can I pursue PlanB while preparing for UPSC?

Yes. Our programs are designed with UPSC aspirants in mind. You can
develop additional skills while continuing your preparation. However,
the time commitment and schedule vary across programs, so check the
individual course details before enrolling.

### 03. Is PlanB only for aspirants who couldn't clear UPSC?

Not at all. PlanB is for anyone who wants to build additional career
options. Whether you're preparing for your first attempt, planning
another attempt, or considering opportunities beyond civil services, you
can start building relevant skills.

### 04. What career opportunities can I explore after joining?

Depending on your interests and skills, you can explore opportunities in
public policy, governance, political consulting, social impact
consulting, research, NGOs, corporate social responsibility, AI and
digital careers. Specific roles may require additional qualifications or
experience.

### 05. Will PlanB help me get a job?

Our programs focus on practical learning, assignments, projects,
professional skills and career readiness. We also share relevant career
opportunities where available. However, employment depends on your
skills, performance, experience and employer selection criteria. We do
not guarantee a job or placement.

### 06. Which PlanB course should I choose?

It depends on your interests and career goals: - **AI Creator
Fellowship:** AI and digital skills ---
https://www.csewhy.com/planb/aiFellowship - **Public Policy
Fellowship:** governance and policy research ---
https://www.csewhy.com/planb/public-policy-fellowship - **Personality
Development Program:** communication and confidence ---
https://www.csewhy.com/planb/personality-development-program - **Career
Masterclass for Aspirants:** career planning, resumes and networking ---
https://www.csewhy.com/planb/career-masterclass - **Public Policy Career
Masterclass:** introduction to public policy careers ---
https://www.csewhy.com/planb/public-policy-masterclass

### 07. Do I need prior work experience to join?

Prior work experience is not necessarily required for every program.
Eligibility and prerequisites differ by course. Refer to the respective
course page for specific requirements.

### 08. Are the courses online or offline?

The learning format depends on the program. Please refer to the
individual course page for details about online sessions, live guidance,
assignments and schedules.

## Layout and styling

### Desktop

-   Full-width `#F7F5EF` section.
-   Centered eyebrow, headline, and subtitle.
-   One-column FAQ list, maximum width around `1200px`.
-   Eight full-width accordion rows stacked vertically.
-   Each row has a numbered badge on the left, question text beside it,
    and a plus/minus icon on the right.
-   Expanded answers appear below the question with comfortable spacing.

### Mobile

-   Retain the single-column accordion.
-   Reduce outer margins and row padding.
-   Allow question text to wrap naturally.
-   Keep the toggle easy to tap and aligned to the right.
-   Prevent horizontal overflow.

## Accordion interaction

-   Every row is a real interactive accordion.
-   Clicking the question or plus icon toggles the answer.
-   Show a plus when closed and a minus when open.
-   Recommended behavior: single-open; opening one answer closes the
    previously open answer.
-   Use semantic buttons and appropriate `aria-expanded` and
    `aria-controls` attributes.
-   Support keyboard navigation and visible focus states.
-   Use only a subtle transition and respect reduced-motion preferences.

## Visual details

-   Number badges: pale yellow `#FFF0B0` circles with black two-digit
    numbers.
-   Questions: bold black, approximately `1.05–1.15rem`.
-   Answers: `#555555`, regular weight, line-height around `1.6`.
-   Row background: `#FFFFFF`.
-   Border: `1px solid #E5E2DA`.
-   Radius: `12–14px`.
-   Gap between rows: `10–12px`.
-   Plus/minus icon: simple black line icon, approximately `20–22px`.
-   Avoid drop shadows and strong hover effects.

## Suggested sizing

-   Section padding: `72–88px` desktop and `48–60px` mobile.
-   Content max-width: `1200px`.
-   Heading: `clamp(2rem, 3.2vw, 3rem)`.
-   Subtitle: approximately `1.1rem`.
-   Row padding: `18–24px` desktop and `16px` mobile.
-   Number badge: `42–46px` diameter.

## Implementation guidance

-   Create a reusable `FAQItem` component.
-   Keep questions and answers in a centralized data array.
-   Use the existing icon library for plus and minus icons.
-   Ensure all course links above point to the supplied URLs.
-   Do not invent refund, certificate, eligibility, placement, or
    delivery policies.
-   Test on desktop, tablet, and mobile.

## Acceptance checklist

-   [ ] Minimal design matching the CSEWhy PlanB palette.
-   [ ] Centered heading with "Questions" highlighted yellow.
-   [ ] Eight numbered accordion rows in the specified order.
-   [ ] Answers expand and collapse correctly.
-   [ ] Plus/minus icon reflects accordion state.
-   [ ] Course links point to existing pages.
-   [ ] Responsive on desktop, tablet, and mobile.
-   [ ] Keyboard accessible with correct ARIA attributes.
-   [ ] No unnecessary illustrations, gradients, or decorative UI.
-   [ ] No unsupported job guarantees or course-policy claims.
