# Development Roadmap — Phantom Medical Imaging

**Project:** Static HTML to Next.js Migration  
**Prepared:** November 22, 2025  
**Horizon:** 6-month plan (Nov 2025 - May 2026)  
**Review Frequency:** Bi-weekly

---

## 📜 PROJECT HISTORY & JOURNEY

### **May 2024: Project Inception**
**Decision:** Migrate static HTML/CSS website to Next.js

**Rationale:**
- Static site becoming difficult to maintain
- Need for dynamic features (forms, database)
- Better SEO with server-side rendering
- Modern tech stack for future scalability
- Component-based architecture for reusability

**Initial Setup:**
- ✅ Created Next.js 15 project with App Router
- ✅ Configured TypeScript for type safety
- ✅ Set up Tailwind CSS for styling
- ✅ Established project structure

---

### **July 2024-2025: Foundation & Core Features**

#### **July 10, 2025: CRITICAL DECISION - Mobile/Desktop Separation**
**Issue:** Mobile and desktop hero sections conflicting, causing layout issues

**Decision Made:**
- Keep mobile and desktop implementations COMPLETELY SEPARATE
- Different components, different images, different animations
- Established as absolute rule for entire project

**Impact:**
- Prevents layout conflicts
- Allows device-specific optimizations
- Became a core project principle
- Documented in `daily-logs/2025-07-10-hero-section-separation-critical.md`

**Lesson:** Sometimes separation is better than trying to make one solution fit all

---

#### **July 11, 2025: Google Maps Integration**
**Goal:** Add interactive location map to footer

**Challenges:**
- Environment variables + lazy loading = performance issues
- Complex workarounds causing more problems

**Solution:**
- Hardcoded API key (user manages security in Google Cloud Platform)
- Practical solution over theoretical best practice

**Lesson:** Pragmatism sometimes trumps textbook solutions

---

#### **July 12, 2025: Testimonials Carousel**
**Implementation:** Swiper library for customer feedback slider

**Features Added:**
- Auto-play with pause on hover
- Responsive design for all screen sizes
- Smooth transitions
- Touch-friendly navigation

---

#### **July 16, 2025: Security & Dependencies**
**Issue:** 10 moderate vulnerabilities in Firebase dependencies

**Solution:**
- Updated EmailJS: `emailjs-com` → `@emailjs/browser`
- Added dependency override for `undici`
- Fixed without breaking existing Firebase config

**Lesson:** Use overrides for transitive dependency issues, don't touch working configs

---

#### **July 21, 2025: CRITICAL INCIDENT - Unauthorized Changes**
**What Happened:**
- User requested YouTube embed fix
- AI agent also modified footer map (not requested)
- Multiple features broke: YouTube, icons, maps, analytics

**Root Cause:**
- AI made unauthorized changes
- Content Security Policy blocked external scripts
- Cascading failures across multiple components

**Impact:**
- 8+ hours of debugging
- User frustration
- Multiple broken features

**Resolution:**
- Fixed Content Security Policy
- Restored all broken components
- Created "UNAUTHORIZED CHANGES" rule

**Lesson:** This incident led to creation of `AI-AGENT-CRITICAL-GUIDELINES.md`  
**New Rule:** NEVER modify components not explicitly mentioned in user's request

---

#### **November 22, 2025: Mobile Responsiveness Focus**
**Issue:** Horizontal overflow and zoom issues on mobile

**Root Cause:**
- Hero slider using `scale(1.5)` transform
- No viewport overflow prevention

**Solution:**
- Added `overflow-x: hidden` to html/body
- Reduced mobile scale to `scale(1.05)`
- Created mobile-specific animations

**Lesson:** Transform effects need careful mobile consideration

---

#### **November 24, 2025: Visual Polish & Security Hardening**
**Focus:** Homepage Refinement, CSP, and Third-Party Integrations

**Achievements:**
- **Homepage:** Perfected Hero Slider (desktop sidebar fix, 10s animation) and Top Block (responsive scaling to 1800px).
- **Security:** Implemented production-grade Content Security Policy (CSP) in `middleware.ts`, resolving blocking issues for YouTube, Vercel, and Maps.
- **Integrations:** Switched Google Maps to robust iframe embed (fixing API errors) and polished YouTube background video (privacy mode, 1.5x scale).

**Lesson:** Conflicting configuration files (next.config.js vs middleware.ts) can silently break security headers. Always check for overrides.

---

#### **November 27, 2025: Structure Refactor & Contact Page**
**Focus:** Multi-session day with major structure changes and contact page creation

**Session 1 - Structure Refactor:**
- Reorganized `src/components/` into logical subfolders (layout, home, ui, features, scripts)
- Created full page structure for all products and services
- Created India city pages structure (`/locations/[city]/[category]`)
- Created international sites structure (`/[lang]/` for US, UAE, UK, etc.)

**Session 2 - Data & International Components:**
- Created `src/lib/data/cities.ts` with 20+ Indian cities
- Created `src/components/international/` with country-specific components
- Updated city pages to use real data

**Session 3 - Contact Page Creation:**
- Complete rebuild of Contact Us page (`src/app/contact/page.tsx`)
- Responsive design from 320px to 1920px+
- All content copied from static site (addresses, phones, emails)
- Regional offices section with world map background

**Unresolved Issue:**
- Google Maps marker appears at edge/bottom of iframe
- Same URL works perfectly on static site
- Likely CSS/container interaction issue

**Lesson:** When embed URLs work on static site but not Next.js, investigate CSS differences, not the URL itself.

---

## 🎯 CURRENT PHASE: CONTENT MIGRATION (Nov-Dec 2025)

### **Goals:**
- Complete migration of all static pages to Next.js
- Implement remaining features (blogs, FAQs, etc.)
- Ensure 100% feature parity with static site
- Polish and optimize user experience

### **Milestones:**

#### **Phase 3.1: Core Pages Completion (Nov 2025)**
**Target Date:** End of November 2025

**Status Update (Nov 27):** Structure created, content pending.

- [ ] **Blogs System**
  - Blog listing page
  - Individual blog post pages
  - Category filtering
  - Search functionality

- [ ] **Customer Feedback Enhancements**
  - Testimonials page (beyond carousel)
  - Star ratings display
  - Before/after service comparisons

- [ ] **Events & News Section**
  - Event listings
  - News articles
  - Date-based sorting
  - Archive functionality

- [ ] **FAQs Page**
  - Question categories
  - Expandable/collapsible answers
  - Search within FAQs
  - "Still have questions?" CTA

---

#### **Phase 3.2: Product Catalog (Dec 2025)**
**Target Date:** Mid December 2025

**Status Update (Nov 27):** ✅ Folder structure and Routes created. Content migration pending.

**Product Detail Pages to Migrate:**

**CT Scanners:**
- [x] Brand New CT Scan Machines (Route Created)
- [x] Refurbished CT Scan Machines (Route Created)

**MRI Scanners:**
- [x] Refurbished MRI Scanner (General) (Route Created)
- [x] Refurbished GE MRI Scanners (Route Created)
- [x] Refurbished Siemens MRI Scanners (Route Created)
- [x] 1.5T MRI Scanner Machines (Route Created)
- [x] 3.0T MRI Scanner Machines (Route Created)

**Other Modalities:**
- [x] Refurbished PET-CT Scanners (Route Created)
- [x] Refurbished Gamma Camera SPECT Systems (Route Created)
- [x] Refurbished Bone Densitometer (DEXA) (Route Created)
- [x] Refurbished Cath Lab Machines (Route Created)

**Product Page Features:**
- Detailed specifications tables
- Image galleries with zoom
- Request quote button (form integration)
- Related products suggestions
- Technical documentation downloads

---

#### **Phase 3.3: Service Pages (Late Dec 2025)**
**Target Date:** End of December 2025

**Status Update (Nov 27):** ✅ Folder structure and Routes created. Content migration pending.

**Service Detail Pages:**
- [x] AMC/CMC Packages for CT Scanners (Route Created)
- [x] AMC/CMC Packages for MRI Scanners (Route Created)
- [x] Medical Equipment Installation Services (Route Created)
- [x] Site Planning and Construction (Route Created)
- [x] MRI Deinstallation and Reinstallation (Route Created)
- [x] MRI Helium Filling Services (Route Created)

**Service Page Features:**
- Service packages comparison
- Pricing tiers (if applicable)
- Case studies or success stories
- Contact form for service inquiry
- Equipment compatibility list

---

## 🚀 PHASE 4: OPTIMIZATION & POLISH (Jan-Feb 2026)

### **Phase 4.1: Performance Optimization (Jan 2026)**

**Goals:**
- Lighthouse score 90+ in all categories
- Fast page loads (<3s on 3G)
- Optimized Core Web Vitals

**Tasks:**
- [ ] **Image Optimization**
  - Convert all images to Next.js Image component
  - Generate WebP and AVIF formats
  - Implement lazy loading
  - Add blur placeholders
  - Optimize image dimensions

- [ ] **Code Optimization**
  - Analyze bundle size with webpack analyzer
  - Implement code splitting
  - Remove unused dependencies
  - Tree shake unused code
  - Optimize CSS (purge unused Tailwind classes)

- [ ] **Loading Performance**
  - Implement progressive rendering
  - Add loading skeletons
  - Optimize font loading (font-display: swap)
  - Prefetch critical resources
  - Reduce JavaScript bundle size

---

### **Phase 4.2: SEO Enhancement (Jan 2026)**

**Goals:**
- Rank on first page for target keywords
- Rich snippets in search results
- Improved local SEO

**Tasks:**
- [ ] **On-Page SEO**
  - Optimize meta titles and descriptions
  - Add Open Graph tags
  - Implement Twitter Cards
  - Create XML sitemap
  - Add robots.txt

- [ ] **Structured Data (JSON-LD)**
  - Organization schema
  - Product schema for equipment
  - Service schema for offerings
  - LocalBusiness schema
  - BreadcrumbList schema
  - FAQ schema

- [ ] **Content Optimization**
  - Keyword research and optimization
  - Internal linking strategy
  - Alt text for all images
  - Semantic HTML structure
  - Mobile-friendly content

---

### **Phase 4.3: Accessibility (Feb 2026)**

**Goal:** WCAG 2.1 Level AA Compliance

**Tasks:**
- [ ] **Keyboard Navigation**
  - Tab order optimization
  - Focus indicators
  - Skip navigation links
  - Keyboard-accessible carousels

- [ ] **Screen Reader Support**
  - ARIA labels and roles
  - Descriptive link text
  - Form field labels
  - Error message associations

- [ ] **Visual Accessibility**
  - Color contrast (4.5:1 minimum)
  - Resizable text without breaking layout
  - No color-only information
  - Sufficient spacing for touch targets

- [ ] **Testing & Validation**
  - Automated testing (axe, WAVE)
  - Screen reader testing (NVDA, JAWS)
  - Keyboard-only navigation testing
  - Color blindness simulation

---

## 🎨 PHASE 5: ADVANCED FEATURES (Mar-Apr 2026)

### **Phase 5.1: Content Management System (Mar 2026)**

**Goal:** Enable non-technical content updates

**Options Being Considered:**
1. **Headless CMS Integration**
   - Payload CMS (researched in documentation-example)
   - Sanity.io
   - Contentful

2. **Custom Admin Panel**
   - Next.js API routes
   - Firebase Admin SDK
   - React Admin or similar

**Features Needed:**
- Blog post creation/editing
- Product catalog management
- Service page updates
- Testimonials management
- Image upload and management
- SEO fields for each page

**Decision Date:** March 2026 (after core migration complete)

---

### **Phase 5.2: Analytics & Monitoring (Mar 2026)**

**Goals:**
- Track user behavior
- Monitor performance
- Identify conversion opportunities

**Tasks:**
- [ ] **Google Analytics 4**
  - Enhanced e-commerce tracking
  - Custom event tracking
  - Goal and conversion setup
  - User flow analysis

- [ ] **Performance Monitoring**
  - Vercel Analytics
  - Real User Monitoring (RUM)
  - Error tracking (Sentry or similar)
  - Uptime monitoring

- [ ] **Business Intelligence**
  - Form submission tracking
  - Popular products/services
  - User journey analysis
  - A/B testing framework

---

### **Phase 5.3: Customer Engagement (Apr 2026)**

**Goal:** Improve customer communication and conversion

**Features:**
- [ ] **Live Chat Integration**
  - Tawk.to, Crisp, or similar
  - Automated responses for common questions
  - Business hours availability
  - Chat history storage

- [ ] **Newsletter System**
  - Email capture forms
  - Mailchimp or similar integration
  - Automated welcome emails
  - Monthly newsletter campaigns

- [ ] **Quote Management**
  - Quote request forms
  - Quote tracking system
  - Email notifications
  - PDF quote generation

- [ ] **Customer Portal** (Stretch Goal)
  - Login/authentication
  - Order history
  - Service history
  - Document downloads

---

## 🌍 PHASE 6: INTERNATIONAL EXPANSION (May 2026+)

**Note:** Preliminary plans exist in `docs/international-plan/` (DO NOT MODIFY)

### **Goals:**
- Multi-language support
- Country-specific content
- International SEO
- Currency/measurement conversions

### **Tasks (High-Level):**
- [ ] i18n implementation (next-intl or similar)
- [ ] Translation management system
- [ ] Country/region detection
- [ ] Hreflang tags for international SEO
- [ ] Localized content strategy
- [ ] Regional pricing (if applicable)

**Status:** Planned for future, not immediate priority

---

## 📊 SUCCESS METRICS & KPIs

### **Technical Metrics:**
| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| Lighthouse Performance | ⏳ TBD | 90+ | Jan 2026 |
| Lighthouse Accessibility | ⏳ TBD | 95+ | Feb 2026 |
| Lighthouse Best Practices | ⏳ TBD | 95+ | Jan 2026 |
| Lighthouse SEO | ⏳ TBD | 95+ | Jan 2026 |
| Bundle Size (Initial) | ⏳ TBD | <500KB | Jan 2026 |
| First Contentful Paint | ⏳ TBD | <1.5s | Jan 2026 |
| Time to Interactive | ⏳ TBD | <3.5s | Jan 2026 |
| Cumulative Layout Shift | ⏳ TBD | <0.1 | Jan 2026 |

### **Business Metrics:**
- Form submission rate
- Quote request volume
- Time on site
- Pages per session
- Bounce rate
- Mobile vs desktop traffic
- Search engine rankings

---

## 🔄 REVIEW & ADAPTATION

### **Weekly Reviews:**
- Review completed tasks
- Adjust priorities based on user feedback
- Address any blocking issues

### **Bi-Weekly Milestones:**
- Assess phase progress
- Update roadmap if needed
- Plan next sprint

### **Monthly Strategic Review:**
- Evaluate business goals alignment
- Consider new feature requests
- Reprioritize if market conditions change

---

## 💡 FUTURE CONSIDERATIONS (6+ Months)

### **Potential Features:**
- E-commerce capabilities (online sales)
- Equipment comparison tool
- Virtual equipment tours (3D/VR)
- AI-powered chatbot
- Mobile app (React Native)
- Equipment finder wizard
- Warranty/service reminder system
- Customer reviews and ratings
- Integration with ERP/CRM systems

### **Emerging Technologies:**
- AI-generated product descriptions
- Automated image optimization
- Voice search optimization
- Progressive Web App (PWA) capabilities
- Edge computing for performance

---

## 🚨 RISK FACTORS & CONTINGENCIES

### **Technical Risks:**
- **Next.js Version Updates:** May require code changes
  - *Mitigation:* Lock versions, test thoroughly before upgrading
  
- **Third-Party Service Downtime:** Firebase, EmailJS, etc.
  - *Mitigation:* Implement error handling, fallback mechanisms
  
- **Performance Regressions:** As site grows
  - *Mitigation:* Regular performance audits, monitoring

### **Business Risks:**
- **Content Migration Delays:** Manual content transfer time-consuming
  - *Mitigation:* Prioritize high-traffic pages, automate where possible
  
- **User Adoption:** Users may be accustomed to old site
  - *Mitigation:* Keep similar navigation, gradual rollout

- **Budget Constraints:** Third-party services costs
  - *Mitigation:* Use free tiers, evaluate cost vs benefit

---

## 📞 STAKEHOLDER COMMUNICATION

### **Progress Updates:**
- Weekly: Status updates on current phase
- Bi-weekly: Demo of completed features
- Monthly: Comprehensive progress report

### **Feedback Loops:**
- User testing sessions
- Analytics review
- Performance benchmarking
- SEO ranking monitoring

---

## ✅ QUICK REFERENCE: WHAT'S NEXT?

### **Immediate (This Week):**
1. Verify mobile overflow fix
2. Start blog system implementation
3. Complete FAQs page
4. Begin Events & News section

### **Short-Term (This Month):**
1. Complete all core pages
2. Start product catalog migration
3. Run initial performance audit
4. Begin SEO optimization

### **Medium-Term (Next 3 Months):**
1. Complete all product pages
2. Complete all service pages
3. Optimize performance (Lighthouse 90+)
4. Implement advanced SEO
5. Accessibility compliance

### **Long-Term (3-6 Months):**
1. CMS implementation
2. Analytics and monitoring
3. Customer engagement features
4. International expansion planning

---

**For current status, see:** `CURRENT-STATUS.md`  
**For project context, see:** `project-overview.md`  
**For guidelines, see:** `AI-AGENT-CRITICAL-GUIDELINES.md`  
**For daily progress, see:** `daily-logs/[date].md`

---

**Last Updated:** November 22, 2025  
**Next Review:** December 7, 2025
