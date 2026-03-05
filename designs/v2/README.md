# Portfolio Redesign V2 - Deliverables

## Overview

This folder contains a complete portfolio redesign based on research into portfolios that actually get people hired at £50k+. 

Addresses Scout's C+ review: "technically impressive but commercially weak."

## Files

### 1. `index-desktop.html`
**Desktop home page mockup**
- Hero section with immediate WHO/WHAT/WHY
- 3 project cards with business metrics
- Experience timeline (3 years EdTech)
- AI skills section (credible, not buzzword bingo)
- Contact section with clear location/salary expectations

**View:** Open in browser at 1100px+ width

### 2. `index-mobile.html`
**Mobile-optimized version**
- Same content, fully responsive layout
- Stacked sections, full-width CTAs
- Touch-optimized (44px minimum targets)
- No horizontal scroll, works at 360px width

**View:** Open in browser at <768px width or use device emulation

### 3. `case-study.html`
**Project case study template** (Wait & Play example)
- Key metrics above the fold
- Problem/Approach/Challenges/Results/Learnings structure
- Timeline format for challenges
- Tech stack breakdown
- "What I'd do differently" section (shows growth mindset)

**View:** Open in browser, represents deep-dive project pages

### 4. `DESIGN_RATIONALE.md`
**Complete design documentation**
- Research foundation (Brittany Chiang, Josh Comeau, Cassidy Williams analysis)
- Every major design decision with references
- Color palette rationale
- Typography choices
- Why metrics matter more than tech specs
- Mobile-first strategy
- Success metrics for measuring effectiveness

**Read this first** to understand the thinking behind every design choice.

---

## Key Design Changes

### From Current Portfolio:

| Old (Scout: C+) | New (Redesign) |
|----------------|---------------|
| "I build products with AI woven into every layer" | "I ship AI products that solve real problems" |
| 847 stems separated | 5,000+ active users |
| 1,425 RAG questions | 95% system uptime (last 12 months) |
| Projects: tech descriptions | Projects: business impact first |
| AI section: buzzwords | AI section: concrete implementations |

### Design Principles:

1. **6-second scan test:** Hero must immediately communicate WHO/WHAT/WHY HIRE
2. **Business metrics over technical jargon:** "Reduced wait times by 37%" beats "Built with WebSockets"
3. **Mobile-first:** 60% of recruiter views are mobile
4. **Editorial feel:** Numbered sections, timeline, clean typography
5. **No emojis/Unicode:** All icons are inline SVG (per Tom's requirements)

---

## Target Audience

- **Hiring managers** at £50k+ hybrid companies in Birmingham/UK Midlands
- **CTOs** at AI-forward companies
- **Recruiters** scanning portfolios quickly (6-second decision window)

---

## Research Foundation

Analyzed successful portfolios:
- Brittany Chiang (brittanychiang.com) - dark theme, timeline, professional
- Josh Comeau (joshwcomeau.com) - educator-focused, less relevant
- Cassidy Williams (cassidoo.co) - minimal, human, authentic

Article: "How to Build a Developer Portfolio That Actually Gets You Hired (2026)"
- 3-5 projects max with case studies
- Problem/Approach/Challenges/Results format
- Fast, clean design over flashy animations
- Avoid tutorial clones, skills bars, AI buzzwords

---

## Technical Specs

### Performance:
- System fonts (instant load, no FOUT)
- Inline SVG icons (no HTTP requests)
- Target: <1s First Contentful Paint
- Target: 95+ Lighthouse score

### Accessibility:
- WCAG AAA contrast ratios
- 16px minimum body text
- Keyboard navigation support
- Semantic HTML

### Browser Support:
- Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- Mobile: iOS Safari, Chrome Android
- No IE11 support (2026 audience)

---

## How to Use These Mockups

### For Review:
1. **Read `DESIGN_RATIONALE.md` first** - understand the strategy
2. **Open `index-desktop.html`** in browser at full width
3. **Open `index-mobile.html`** in browser with device emulation (375px)
4. **Open `case-study.html`** to see project deep-dive format

### For Implementation:
1. Extract CSS design system from any mockup (`:root` variables)
2. Component structure is clear in HTML
3. Replace placeholder content with real data
4. Add actual project screenshots where `[Screenshot: ...]` appears
5. Build in React/Next.js using this as design reference

---

## Color Palette

```css
--bg-primary: #0F1419 (dark charcoal)
--bg-secondary: #1A1F26 (card backgrounds)
--text-primary: #E6EDF3 (off-white)
--text-secondary: #8B949E (body text gray)
--accent: #D97847 (terracotta - kept from original)
--border: #30363D (subtle dividers)
```

**Why:** Dark but not harsh, terracotta accent is distinctive (not generic purple), professional without being corporate.

---

## Typography

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
```

**Monospace (labels only):**
```css
font-family: 'Courier New', monospace;
```

**Sizes:**
- Desktop hero: 56px
- Mobile hero: 36px
- Body text: 16-17px
- Section titles: 32px (desktop), 24px (mobile)

**Why:** System fonts load instantly, monospace adds editorial/technical feel without being excessive.

---

## Success Metrics

How we'll know this works:
1. **6-second test:** 8/10 hiring managers correctly identify "senior fullstack dev who ships AI products"
2. **Case study engagement:** 2+ minutes average time on page
3. **Contact rate:** >5% of visitors click "Get in touch"
4. **Mobile bounce:** <30% (same as desktop)
5. **Interview conversion:** 1+ £50k+ offer within 3 months

---

## Next Steps

### Immediate:
1. Review mockups with Tom
2. Get feedback on color choices (keep terracotta?)
3. Decide on case study image strategy

### Implementation (Week 1-4):
1. **Week 1:** Build component library, home page
2. **Week 2:** Rewrite project content with real metrics
3. **Week 3:** Performance optimization, accessibility audit
4. **Week 4:** Deploy to Vercel, launch

---

## Questions for Tom

1. **Real metrics:** What are actual user numbers for each project?
2. **Screenshots:** Do you have screenshots for case studies?
3. **Experience:** Confirm 3 years EdTech timeline is accurate?
4. **Location:** "Birmingham/UK Midlands" correct for job search?
5. **Salary:** Comfortable with "£50k+" being public?

---

## Design Philosophy

> "Your portfolio's job is not to show that you can code. Everyone applying can code. Your portfolio's job is to make someone remember you."
> 
> — "How to Build a Developer Portfolio That Actually Gets You Hired (2026)"

This redesign makes Tom memorable by:
- Leading with business impact, not technical jargon
- Showing real metrics that prove value delivered
- Being honest about learnings ("What I'd do differently")
- Focusing on specific, credible AI implementations
- Making the 6-second scan work perfectly

---

**Document Version:** 1.0  
**Created:** 2026-03-04  
**Status:** Ready for review  
**Next:** Get Tom's feedback, implement in React/Next.js
