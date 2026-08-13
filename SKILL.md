---
name: analytical-atelier-nextjs-marketing
description: Build and maintain the Analytical Atelier marketing website in Next.js with strict design-token usage, accessible responsive layouts, reusable React components, and production-grade Next.js patterns. Use this skill for all landing-page, coming-soon, waitlist, feature, pricing, FAQ, and marketing-page work.
---

# Analytical Atelier — Next.js Marketing Website Skill

## 1. Purpose

Build a premium "Coming Soon" marketing website for an email marketing platform.

The website must communicate:

- Campaign creation and execution
- Bring-your-own SMTP
- SMTP verification/testing
- Provider-aware rate limiting
- CSV audience import
- Campaign scheduling up to 7 days
- Interactive analytics and reports
- Multiple SMTP server management
- Waitlist/newsletter conversion

Primary conversion goal:

> Join the waitlist.

The design direction is **The Analytical Atelier**: corporate modern, analytical, precise, restrained, reliable, and technically sophisticated.

Do not make the site look like a generic email-marketing template.

---

# 2. Non-Negotiable Design Rules

## Use the provided design tokens as the source of truth

The project will receive a separate design-token definition containing:

- Color tokens
- Typography tokens
- Radius tokens
- Spacing tokens
- Container width
- Gutters
- Responsive margins

Do not invent a second design system.

Do not introduce arbitrary colors such as:

```tsx
bg-blue-600
text-gray-900
border-slate-200
```

when an equivalent project token exists.

Prefer semantic project tokens:

```tsx
bg-[var(--surface-container-lowest)]
text-[var(--on-surface)]
text-[var(--on-surface-variant)]
bg-[var(--primary)]
text-[var(--on-primary)]
border-[var(--outline-variant)]
```

If the project exposes the tokens through semantic CSS variables or utility classes, use those instead of raw values.

## Do not use shadcn/ui

This website is not based on shadcn/ui.

Build the required primitives/components directly using React + CSS/Tailwind/CSS Modules according to the existing project setup.

Do not add shadcn components merely because a similar component exists there.

---

# 3. Next.js Architecture

Use the **Next.js App Router**.

Prefer:

```text
app/
components/
lib/
public/
styles/
```

A reasonable structure is:

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  marketing/
    navbar.tsx
    hero.tsx
    dashboard-preview.tsx
    trust-strip.tsx
    features.tsx
    feature-card.tsx
    how-it-works.tsx
    product-showcase.tsx
    reliability.tsx
    pricing-coming-soon.tsx
    newsletter.tsx
    about.tsx
    faq.tsx
    final-cta.tsx
    footer.tsx

  ui/
    button.tsx
    container.tsx
    section.tsx
    badge.tsx
    icon-button.tsx

lib/
  constants.ts
  utils.ts

public/
  ...
```

Keep marketing-specific components under `components/marketing`.

Keep low-level reusable primitives under `components/ui`.

Do not create one giant `page.tsx` containing the entire website.

---

# 4. Server vs Client Components

Next.js uses Server Components by default. Keep components as Server Components unless client-side behavior is actually required.

Examples of Server Components:

- Hero
- Feature sections
- Footer
- About
- Static pricing announcement
- Static product previews
- Static FAQ content
- SEO metadata

Examples of Client Components:

- Mobile navigation menu
- FAQ accordion
- Newsletter form with client-side state
- Animated counters
- Interactive charts
- Scroll-based motion
- Components that use browser APIs
- Components that require `useState`, `useEffect`, or event-driven interaction

Do not add:

```tsx
"use client";
```

to large parent sections just because one child needs interactivity.

Instead isolate the interactive part:

```text
Hero
└── DashboardPreview
    └── AnimatedMetric
```

where only `AnimatedMetric` becomes a Client Component.

The goal is to keep the client JavaScript surface as small as practical.

---

# 5. Component Design

Components should have one clear responsibility.

Bad:

```tsx
<MarketingPage />
```

containing:

- Navbar
- Hero
- every feature card
- FAQ logic
- newsletter state
- footer
- animation logic

Good:

```tsx
<Page>
  <Navbar />
  <Hero />
  <TrustStrip />
  <Features />
  <HowItWorks />
  <ProductShowcase />
  <Reliability />
  <PricingComingSoon />
  <About />
  <Faq />
  <Newsletter />
  <FinalCta />
  <Footer />
</Page>
```

Prefer composition over deeply configurable "god components."

Do not create abstractions for one-off elements unless the abstraction improves clarity or will clearly be reused.

---

# 6. Reusable Primitives

Create small reusable primitives for patterns repeated across the marketing page.

Recommended primitives:

```tsx
<Container />
<Section />
<SectionHeading />
<Button />
<Badge />
<FeatureCard />
<MetricCard />
```

Example:

```tsx
<Section>
  <Container>
    <SectionHeading
      eyebrow="Features"
      title="Everything You Need to Run Better Email Campaigns."
      description="..."
    />

    ...
  </Container>
</Section>
```

The primitive should enforce the design system rather than requiring each section to recreate spacing manually.

---

# 7. Layout System

Use the supplied layout tokens.

Container:

```text
max-width: 1280px
desktop gutter: 24px
mobile margin: 16px
desktop margin: 40px
```

Use a 12-column conceptual grid on desktop.

Responsive structure:

```text
Mobile: < 768px
Tablet: 768px–1024px
Desktop: > 1024px
```

Marketing sections should generally use generous vertical rhythm:

```text
80px–120px
```

Do not make sections vertically cramped.

Avoid arbitrary spacing such as:

```tsx
mt-[73px]
py-[91px]
gap-[13px]
```

Prefer the provided spacing scale or a small number of intentional responsive values.

---

# 8. Typography

Use the supplied typography system.

Primary pairing:

- Headlines: Manrope
- Body/labels: Inter
- Technical/data values: Geist

Load fonts through Next.js font tooling rather than introducing external runtime font requests where possible.

Use semantic typography classes/tokens such as:

```text
display
headline-lg
headline-lg-mobile
headline-md
body-lg
body-md
label-md
code
```

Avoid creating arbitrary typography values for individual sections.

Example:

Hero:

```text
display
```

Section heading:

```text
headline-lg
```

Feature title:

```text
headline-md
```

Body:

```text
body-md
```

Technical metric:

```text
code
```

Use responsive typography deliberately instead of shrinking everything proportionally.

---

# 9. Color Usage

Use the provided semantic palette.

Primary brand color:

```text
#00327d
#0047ab
```

Use primary colors for:

- Main CTA
- Important active states
- Key data visualization
- Brand emphasis
- Links where appropriate

Use surface tokens to establish hierarchy instead of adding gradients everywhere.

Preferred visual depth:

```text
surface
→ surface-container-low
→ surface-container
→ surface-container-high
```

Cards should generally use:

```text
surface-container-lowest
```

with:

```text
outline-variant
```

for borders.

Do not use pure black as the main text color when the `on-surface` token exists.

Do not use large dark blocks unless the design system explicitly calls for them.

---

# 10. Elevation

Use tonal layering and subtle outlines instead of large shadows.

Card default:

```text
background: surface-container-lowest
border: 1px solid outline-variant
```

Hover:

```text
subtle blue-tinted elevation
```

Avoid:

```text
shadow-2xl
shadow-[0_20px_60px_rgba(...)]
```

unless there is a specific visual reason.

The interface should feel precise rather than floating.

---

# 11. Shape Language

Use the supplied radius scale.

Standard interactive components:

```text
0.5rem / 8px
```

Large feature modules:

```text
1rem / 16px
```

Pills:

```text
9999px
```

Use pills only for:

- Status
- Small labels
- Categories
- "Coming Soon"
- "SMTP Verified"
- "Sending"

Do not make every card a pill-shaped card.

---

# 12. Buttons

Primary button:

- Primary background
- On-primary text
- 8px radius
- Strong typography
- Clear hover state
- Keyboard focus state

Example:

```tsx
<Button variant="primary">
  Join the Waitlist
</Button>
```

Secondary:

- Transparent or surface background
- Low-contrast border
- Primary text

Do not create multiple competing primary actions in the same section.

Hero should have one obvious CTA:

> Join the Waitlist

---

# 13. Navigation

The navbar should be reusable and responsive.

Desktop:

```text
Logo | Features | How It Works | Pricing | About | FAQ | Join Waitlist
```

Mobile:

- Compact logo
- Menu button
- Collapsible navigation
- CTA inside mobile menu

Only the interactive mobile menu needs to be a Client Component.

Do not make the whole navbar client-side unless necessary.

Use `next/link` for internal navigation.

---

# 14. Hero Section

The hero is the primary visual anchor.

Structure:

```text
Eyebrow
Headline
Supporting text
Primary CTA
Secondary CTA
Product dashboard preview
Floating status cards
```

Hero headline:

> Email Campaigns, Powered by Your SMTP.

The dashboard preview should be treated as a product visualization, not a decorative screenshot.

It should communicate:

- Campaign progress
- SMTP status
- Rate limits
- Delivery
- Open rate
- Click rate
- Scheduled campaigns

The dashboard UI should use the same design tokens as the marketing website.

Do not build a visually unrelated dashboard mockup.

---

# 15. Product Preview Rules

Dashboard mockups should be realistic but static unless interaction materially improves the experience.

Prefer:

```tsx
<DashboardPreview />
```

with composable pieces:

```tsx
<MetricCard />
<CampaignRow />
<SendingProgress />
<SmtpStatus />
<AnalyticsChart />
```

Use technical typography for:

- counts
- percentages
- sending rates
- timestamps
- statuses

Example:

```text
48,240
97.8%
25 emails/min
10:30 AM
```

Avoid fake enterprise logos or fake customer data.

---

# 16. Feature Cards

Feature cards should not all look identical.

Use a consistent card shell but allow each feature to have a relevant visualization.

Examples:

### Smart Rate Limiting

Visualize:

```text
Provider limit: 30/min
Current rate: 28/min
Protected ✓
```

### SMTP Verification

Visualize:

```text
Connection ✓
Authentication ✓
Test email ✓
SMTP Ready
```

### CSV Import

Visualize:

```text
customers.csv
24,532 contacts
Import complete
```

### Scheduling

Visualize:

```text
Friday
10:30 AM
Campaign scheduled
```

Use the visualization to explain the feature instead of adding decorative illustrations with no meaning.

---

# 17. Animation

Animations must reinforce clarity.

Good:

- Fade-up section entrance
- Small dashboard transitions
- Metric count-up
- Progress animation
- Hover elevation
- Mobile menu transition
- FAQ expand/collapse
- Subtle background movement

Bad:

- Excessive parallax
- Constant bouncing
- Large rotating elements
- Aggressive blur
- Long intro animations
- Motion that delays content visibility

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled, disable or simplify non-essential animations.

Keep animation durations short and purposeful.

---

# 18. Accessibility

Every interactive element must be keyboard accessible.

Requirements:

- Semantic HTML
- Proper button elements
- Proper link elements
- Visible focus states
- Accessible labels
- Correct heading hierarchy
- Useful image alt text
- Form error messaging
- Sufficient contrast
- Reduced-motion support

Do not use:

```tsx
<div onClick={...}>
```

when a button is appropriate.

Use:

```tsx
<button type="button">
```

or:

```tsx
<Link href="...">
```

---

# 19. Images and Assets

Use `next/image` for website imagery where appropriate.

Prefer:

```tsx
<Image
  src="/images/dashboard-preview.webp"
  alt="Email campaign dashboard showing campaign performance"
  width={...}
  height={...}
/>
```

Do not use raw `<img>` for ordinary application assets when `next/image` is appropriate.

Avoid huge unoptimized hero assets.

Use correct dimensions/aspect ratios to prevent layout shift.

For decorative images:

```tsx
alt=""
```

when the image adds no semantic information.

---

# 20. Icons

Use one consistent icon system.

Do not mix:

- Emoji
- Random SVG styles
- Multiple icon libraries

unless there is a clear reason.

Icons should support the content rather than become the visual focus.

Prefer simple technical line icons for:

- SMTP
- CSV
- Scheduling
- Analytics
- Verification
- Rate limiting

---

# 21. Forms

The waitlist/newsletter form should be simple.

Required:

```text
Email input
Join Waitlist button
```

States:

```text
Idle
Submitting
Success
Error
```

Example success:

```text
You're on the list.
We'll let you know when we launch.
```

Do not make users fill out unnecessary fields.

Validate email input correctly.

Keep form behavior isolated in a small Client Component.

If the backend integration is not ready, use a clear temporary abstraction rather than embedding placeholder logic throughout the page.

---

# 22. FAQ

FAQ is interactive.

Keep the question data separate:

```tsx
const faqItems = [
  {
    question: "...",
    answer: "...",
  },
];
```

Render the interactive accordion through a small Client Component.

Use accessible disclosure semantics.

Do not hide FAQ content in a client-only rendering strategy when it can remain present in server-rendered HTML.

---

# 23. SEO

Use Next.js Metadata API.

The root layout should define the base metadata.

Example:

```tsx
export const metadata: Metadata = {
  title: "Product Name — Email Campaigns Powered by Your SMTP",
  description:
    "Create, schedule, send, and analyze email campaigns using your own SMTP infrastructure.",
};
```

Add appropriate:

- Title
- Description
- Open Graph metadata
- Twitter/social metadata where needed
- Favicon
- Canonical metadata when applicable
- Robots configuration
- Sitemap when the site is ready for indexing

Do not leave the default Next.js metadata in production.

---

# 24. Coming Soon / Launch State

This is a pre-launch website.

Do not invent:

- Customer counts
- Revenue
- Performance claims
- Certifications
- Testimonials
- Customer logos
- Pricing
- "Trusted by 10,000+ companies"

Use truthful messaging:

```text
Launching Soon
Join the Waitlist
Pricing Coming Soon
Early Access
```

The site should build trust through product clarity and design quality rather than fabricated social proof.

---

# 25. Content Architecture

Keep repeated marketing content in data structures when possible.

Example:

```tsx
export const features = [
  {
    title: "Smart Rate Limiting",
    description: "...",
    visual: "rate-limit",
  },
];
```

This makes copy easier to update without deeply editing JSX.

Do not over-abstract content into a CMS-like framework for a simple coming-soon page.

---

# 26. CSS / Styling Rules

Use the project's existing styling strategy.

The design tokens must be centralized.

Example token layer:

```css
:root {
  --primary: #00327d;
  --on-primary: #ffffff;
  --surface: #f9f9ff;
  --surface-container-lowest: #ffffff;
  --on-surface: #111c2d;
  --on-surface-variant: #434653;
  --outline-variant: #c3c6d5;
}
```

Then components consume those semantic variables.

Do not repeat raw token values across components.

Bad:

```css
color: #111c2d;
```

Good:

```css
color: var(--on-surface);
```

This allows the design system to change without rewriting components.

---

# 27. Responsive Design

Design mobile intentionally.

Do not treat mobile as a smaller desktop.

At mobile widths:

- Reduce hero typography
- Stack grids
- Collapse navigation
- Reduce dashboard preview density
- Allow horizontal scrolling only for genuinely tabular content
- Keep buttons easy to tap
- Reduce large decorative elements
- Maintain generous vertical spacing

Example:

Desktop:

```text
Hero
[copy 5 columns] [dashboard 7 columns]
```

Mobile:

```text
Hero
[copy]
[dashboard]
```

Feature grid:

```text
Desktop: 3 / 2-column layouts depending on section
Tablet: 2 columns
Mobile: 1 column
```

---

# 28. Performance

Prioritize:

- Server rendering where appropriate
- Small client boundaries
- Optimized images
- Optimized fonts
- Lazy loading for below-the-fold heavy media
- Minimal JavaScript
- No unnecessary third-party scripts
- No huge animation libraries for simple transitions

Do not add a package for a tiny interaction that CSS or a small component can handle.

Avoid shipping a charting library just to render a static product-preview graph.

---

# 29. Architecture Rules

Do not:

- Put business logic inside presentational components
- Put API calls directly inside every UI component
- Create duplicated navbar/footer implementations
- Duplicate design tokens
- Mix unrelated styling systems without a reason
- Make every component client-side
- Create huge monolithic components
- Add unnecessary dependencies
- Use shadcn/ui
- Use fake content that implies real customers
- Hardcode the same marketing copy in multiple places

Do:

- Keep components focused
- Keep tokens centralized
- Keep content structured
- Keep interactive logic isolated
- Keep server components as the default
- Keep accessibility first-class
- Keep responsive behavior intentional
- Keep visuals aligned with product functionality

---

# 30. Suggested Page Composition

The homepage should follow this order:

```text
Navbar
↓
Hero
↓
Trust / Value Strip
↓
Features
↓
How It Works
↓
Product Showcase
↓
Reliability / Infrastructure
↓
Pricing Coming Soon
↓
About
↓
FAQ
↓
Newsletter / Waitlist
↓
Final CTA
↓
Footer
```

The page should feel like one continuous narrative:

```text
What is it?
↓
Why should I care?
↓
How does it work?
↓
What does the product actually look like?
↓
Why should I trust it?
↓
What happens next?
↓
Join the waitlist
```

---

# 31. Quality Bar

Before considering the page complete, verify:

## Visual

- Design tokens are used consistently
- No random colors
- No random typography
- Spacing follows the 8px system
- Card radii are consistent
- Shadows are restrained
- Desktop and mobile both look intentional

## Product communication

- The SMTP model is immediately understandable
- Rate limiting is clearly explained
- CSV import is visible
- Scheduling is visible
- Analytics/reporting is visible
- SMTP testing is visible
- Multiple SMTP servers are communicated

## Technical

- App Router is used
- Server Components are the default
- Client Components are isolated
- `next/link` is used for navigation
- `next/image` is used appropriately
- Next.js font tooling is used
- Metadata is configured
- No unnecessary client-side JavaScript
- No shadcn/ui

## Accessibility

- Keyboard navigation works
- Focus states exist
- Heading hierarchy is valid
- Buttons/links are semantic
- Forms have accessible labels
- Images have appropriate alt text
- Reduced motion is respected

## Conversion

- "Join the Waitlist" is always easy to find
- There is no ambiguity about the launch state
- Pricing is clearly marked as coming soon
- Newsletter/waitlist submission has clear success/error states

---

# 32. Implementation Principle

The final implementation should follow this mindset:

> Build less UI, but make every piece intentional.

The website should communicate:

**Power without clutter.  
Technical depth without complexity.  
Enterprise reliability without corporate heaviness.  
Modern SaaS polish without template-like decoration.**
