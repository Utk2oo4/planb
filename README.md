# CSEWhy | PlanB

A clean, modern, and credible education and career platform designed for UPSC aspirants. **CSEWhy PlanB** helps civil services aspirants build practical, career-ready skills alongside their preparation in AI, public policy, research, consulting, and communications without putting their future on hold.

> **"UPSC is your goal. Your future deserves a Plan B."**

---

## 🌟 Key Features & Sections

### 1. Navigation Bar (`Navbar.jsx`)
- Brand identity with signature yellow `PlanB` pill.
- Navigation links (`Home`, `Courses`, `Placements`, `Testimonials`, `About Us`) with active page indicators.
- Quick search action and primary CTA button (`Explore Courses →`).
- Accessible mobile drawer menu with smooth slide-down animation.

### 2. Hero Section (`Hero.jsx`)
- **Headline & Highlighting**: Signature `#FFD52F` highlight block on "Plan B."
- **Authentic Editorial Visuals**: Authentic photograph of a student studying public policy against the Parliament backdrop with a seamless left-to-right white gradient transition.
- **Dual CTAs**:
  - Primary: `Explore Courses →`
  - Secondary: `Watch How PlanB Helps` with an interactive video overview dialog.
- **Stats Strip**: Warm neutral strip featuring key metrics (`10,000+ Students`, `5+ Programs`, `Real-world Projects`, `Learn Alongside Preparation`).
- **Benefits Strip**: 4 core pillars (`Practical Learning`, `Live Guidance`, `Career Opportunities`, `Future Ready`) with circular soft-yellow badges.

### 3. Why PlanB? (`WhyPlanB.jsx`)
- **Value Cards**: Addresses UPSC uncertainty and reveals alternative paths beyond exams.
- **Aspirant Personas**: Identifies learner archetypes (*The One More Attempt*, *The What Next? Aspirant*, and *The Weekend Learner*).

### 4. Is PlanB For You? (`IsPlanBForYou.jsx`)
- Honest self-selection matrix comparing when PlanB is right versus when it may not be a priority.
- **Mobile Interactive Switcher**: Tabbed toggle (`When PlanB is right` vs `When not a priority`) with synchronized swipe-to-compare.

### 5. Career Opportunities (`CareerOpportunities.jsx`)
- Highlights 5 career outcomes: Public Policy & Governance, Social Impact Consulting, Political Consulting, Corporate Social Responsibility (CSR), and NGO / Development Sector.
- Desktop 2-column grid with centered 5th card; converts to a swipeable carousel on mobile.

### 6. Hiring Partners Strip (`HiringPartners.jsx`)
- Infinite marquee scroll strip showcasing organizations and companies hiring PlanB fellows (Cashfree, Drishti IAS, Adda247, FAST India, GoStops, Cardboard, etc.).

### 7. Placement Statistics (`PlacementStats.jsx`)
- Premium dark-mode showcase with animated counter numbers:
  - **50+** Companies Hiring
  - **500+** Students Placed
  - **85%** Placement Rate
  - **10+** Sectors Covered

### 8. Testimonials (`Testimonials.jsx`)
- Infinite scroll marquee of authentic fellow feedback and career outcomes.

---

## 📱 Mobile-First Interactivity

All card-based components feature a native app-like experience on mobile screens:
- **Horizontal Scroll-Snap Tracks**: Touch-friendly swipe carousels (`scroll-snap-type: x mandatory`).
- **Peek Indicators**: Cards are sized so the next card peeks into view (~15–20%), naturally cueing horizontal swiping.
- **Swipe Cues**: Clean pill badges guiding mobile learners.
- **No Endless Vertical Stacking**: Keeps viewport height comfortable and fast to navigate.

---

## 🎨 Design System & Brand Tokens

| Token | Value | Usage |
| :--- | :--- | :--- |
| **Signature Yellow** | `#FFD52F` | Primary CTAs, highlights, active indicators |
| **Charcoal / Black** | `#111111` | Headings, primary text, high-contrast buttons |
| **White** | `#FFFFFF` | Card surfaces, navigation background |
| **Warm Neutral** | `#F7F5EF` | Backgrounds, stats strip, contrasting sections |
| **Secondary Gray** | `#555555` / `#666666` | Supporting copy, descriptions, icons |
| **Subtle Border** | `#E5E2DA` | Dividers, card borders, hairlines |

Typography: Clean sans-serif via Google Fonts (`Inter`).

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (Functional components, hooks)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Modular, CSS variables, zero runtime overhead)
- **Icons**: Scalable, accessible inline SVGs

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0 or higher recommended)
- npm or yarn / pnpm

### Installation

1. Clone or open the repository:
   ```bash
   cd cse-planb
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

To build the production-ready bundle:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Directory Structure

```text
cse-planb/
├── public/                 # Static public assets
├── references/             # UI references & mockups
├── src/
│   ├── assets/             # Logos, hero images, and hiring company icons
│   │   └── hiring-companies/
│   ├── components/         # Modular React components
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── WhyPlanB.jsx / .css
│   │   ├── IsPlanBForYou.jsx / .css
│   │   ├── CareerOpportunities.jsx / .css
│   │   ├── HiringPartners.jsx / .css
│   │   ├── PlacementStats.jsx / .css
│   │   └── Testimonials.jsx / .css
│   ├── App.jsx             # Main landing page assembler
│   ├── App.css
│   ├── index.css           # Global reset & typography
│   └── main.jsx            # React root mount
├── package.json
└── vite.config.js
```

---

## ♿ Accessibility & Best Practices

- Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<mark>`, `<button>`).
- Descriptive `aria-label`, `aria-labelledby`, and `aria-expanded` attributes for screen readers.
- Visible focus outlines (`:focus-visible`) for keyboard navigation.
- Native `prefers-reduced-motion` queries disabling animations and transitions for users with motion sensitivities.
