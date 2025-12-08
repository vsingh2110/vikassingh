# Project Overview — Phantom Medical Imaging Equipment

**Prepared by:** AI Documentation Agent  
**Date:** November 22, 2025  
**Project Type:** Static HTML/CSS Website Migration to Next.js  
**Status:** Active Development - Migration Phase

---

## 📋 EXECUTIVE SUMMARY

**Project Name:** Phantom Medical Imaging Equipment Website  
**Business:** Medical imaging equipment sales, refurbishment, and service  
**Primary Goal:** Migrate existing static HTML/CSS website to modern Next.js application with enhanced features and CMS capabilities

**Static Site Location:** `phantom-website/` folder (current live production)  
**Next.js Site Location:** `phantom-nextjs/` folder (migration target)

---

## 🎯 PROJECT GOALS

### Primary Objectives:
1. **Replicate Existing Functionality:** Preserve all features from static site
2. **Enhance User Experience:** Improve performance, responsiveness, and interactivity
3. **Modernize Tech Stack:** Leverage Next.js, React, TypeScript for maintainability
4. **Add Dynamic Features:** Firebase database integration, EmailJS notifications
5. **Improve SEO:** Server-side rendering, optimized meta tags, structured data
6. **Enable Easy Updates:** Move from static HTML to component-based architecture

### Business Requirements:
- Medical equipment catalog (CT Scan, MRI, PET-CT, Gamma Camera, DEXA, Cath Lab)
- Service offerings (AMC/CMC, Installation, Site Planning, Helium Filling)
- Contact forms with email notifications
- Customer testimonials carousel
- Google Maps integration for location
- Responsive design for mobile and desktop
- Fast loading times for healthcare industry credibility

---

## 🏗️ TECHNICAL ARCHITECTURE

### Current Tech Stack:

#### **Frontend Framework:**
- **Next.js 15.3.5** (App Router, React 18)
- **TypeScript 5** for type safety
- **Turbopack** for faster development builds

#### **Styling:**
- **Tailwind CSS 3.4.0** (utility-first CSS framework)
- **PostCSS** with Autoprefixer
- Responsive design principles (mobile-first)
- Custom color scheme: Brand green #59913d

#### **Backend/Data:**
- **Firebase 10.14.1** (Firestore for form data storage)
- **EmailJS (@emailjs/browser 4.4.1)** for email notifications
- No traditional backend server (serverless architecture)

#### **UI Components & Libraries:**
- **Swiper 11.2.10** (carousels/sliders)
- **react-youtube 10.1.0** (embedded videos)
- **@next/third-parties** (Google Analytics, Google Maps)
- Font Awesome icons (via CDN)

#### **Development Tools:**
- **ESLint** (code quality)
- **@next/bundle-analyzer** (performance monitoring)
- **VS Code** (primary IDE)
- **Git** for version control

#### **Deployment:**
- **Vercel** (likely deployment target, built for Next.js)
- Environment variables for sensitive keys
- Production and development environments

---

## 📁 PROJECT STRUCTURE

### Static Website (`phantom-website/`):
```
phantom-website/
├── index.html (homepage)
├── about.html
├── products.html
├── services.html
├── contact.html
├── blogs.html
├── customer-feedback.html
├── events-and-news.html
├── faqs.html
├── css_files/ (styles)
├── js_files/ (JavaScript)
├── images/ (assets)
├── product-pages/ (individual product pages)
└── service-pages/ (individual service pages)
```

### Next.js Website (`phantom-nextjs/`):
```
phantom-nextjs/
├── src/
│   ├── app/ (Next.js App Router pages)
│   │   ├── product-pages/ (Product categories & details)
│   │   ├── service-pages/ (Service details)
│   │   ├── news/ (News & Events - Planned)
│   │   └── blogs/ (Blog posts - Planned)
│   ├── components/ (React components)
│   │   ├── layout/ (Header, Footer, etc.)
│   │   ├── home/ (Homepage specific)
│   │   ├── ui/ (Reusable UI elements)
│   │   ├── features/ (Functional components)
│   │   └── scripts/ (Third-party scripts)
│   ├── lib/ (utilities, Firebase, EmailJS config)
│   ├── types/ (TypeScript definitions)
│   └── scripts/ (helper scripts)
├── public/
│   ├── images/ (static assets)
│   └── scripts/ (legacy scripts if needed)
├── docs/ (project documentation - THIS FOLDER)
├── middleware.ts (Next.js middleware)
├── next.config.js (configuration)
├── tailwind.config.js (styling config)
└── package.json (dependencies)
```

---

## 🚀 MIGRATION JOURNEY

### **Phase 1: Initial Setup (May-July 2024)**
**Goal:** Basic Next.js project setup and core page migration

**Completed:**
- ✅ Created Next.js project with TypeScript
- ✅ Configured Tailwind CSS
- ✅ Set up project structure (app router)
- ✅ Migrated basic HTML structure to React components
- ✅ Implemented footer component
- ✅ Created initial documentation structure

**Key Decisions:**
- Chose App Router over Pages Router (Next.js 13+)
- Adopted Tailwind CSS over traditional CSS
- Implemented TypeScript for type safety

---

### **Phase 2: Core Features (July 2025)**

#### **July 10, 2025: Hero Section Separation (CRITICAL)**
**Issue:** Mobile and desktop hero sections conflicting

**Solution:**
- Separated mobile and desktop hero/slider components completely
- Created distinct components with different image orientations
- Established rule: NEVER merge mobile/desktop sections
- Documented in `docs/daily-logs/2025-07-10-hero-section-separation-critical.md`

**This became a critical guideline for all future work.**

---

#### **July 11, 2025: Google Maps Integration**
**Goal:** Add location map to footer

**Implementation:**
- Integrated Google Maps API
- Initially used environment variables
- **Issue:** Performance problems with lazy loading + env vars
- **Solution:** Hardcoded API key (user manages security in Google Cloud)
- Successfully integrated interactive map in footer

**Lesson:** Sometimes practical solutions trump theoretical best practices

---

#### **July 12, 2025: Testimonials Carousel**
**Goal:** Implement customer feedback slider

**Implementation:**
- Used Swiper library for carousel functionality
- Created responsive design for mobile/desktop
- Implemented autoplay with pause on hover
- Added navigation buttons and pagination

**Challenges:**
- Multiple implementation attempts documented
- Fine-tuning responsive behavior
- Ensuring smooth animations

---

#### **July 14-15, 2025: General Development**
**Activities:**
- Continued component development
- Responsive design refinements
- Performance optimizations
- Documentation updates

---

#### **July 16, 2025: Dependency Security Updates (Evening Session)**
**Issue:** 10 moderate severity vulnerabilities in Firebase dependencies

**Solution:**
- Updated EmailJS: `emailjs-com` → `@emailjs/browser`
- Added dependency override in package.json:
  ```json
  "overrides": {
    "undici": "^6.21.1"
  }
  ```
- Fixed without breaking Firebase configuration

**Lesson:** Use overrides for transitive dependency issues

---

#### **July 18, 2025: Continued Development**
**Activities:**
- Additional feature implementations
- Bug fixes from testing
- Documentation updates

---

#### **July 21, 2025: CRITICAL INCIDENT - Multiple Component Failures**
**User Report:** "YouTube issue still not resolved, all website icons still not working, what did you do to the map in footer"

**Issues Identified:**
1. ❌ YouTube embed broken (black screen, no controls)
2. ❌ All Font Awesome icons missing
3. ❌ Footer Google Maps not loading
4. ❌ Overall functionality compromised

**Root Cause:**
- AI agent made UNAUTHORIZED changes to footer map
- Content Security Policy blocking external scripts
- Impacts: YouTube, Font Awesome, Google Analytics, Firebase, EmailJS all blocked

**This incident led to creation of "UNAUTHORIZED CHANGES" rule in guidelines**

**Fixes Implemented:**
- Simplified YouTube embed to basic iframe
- Fixed Content Security Policy headers
- Restored footer map functionality
- Restored Font Awesome icons
- Documented all changes thoroughly

**Major Lesson:** NEVER modify components not mentioned in user request

---

### **Phase 3: Mobile Responsiveness Focus (November 2025)**

#### **November 22, 2025: Mobile Horizontal Overflow Issue**
**User Report:** "Big zoom in/zoom out, big gap on right side of website in mobile version"

**Issue:** Hero slider scale transforms causing viewport overflow on mobile

**Root Cause:**
- `.hero-slider-container .myslide.active .img-slider` using `transform: scale(1.5)`
- 150% zoom causes elements to extend beyond viewport width
- Creates horizontal scroll and gap

**Solution:**
- Added `max-width: 100vw; overflow-x: hidden;` to html/body
- Reduced mobile scale to `scale(1.05)` instead of `scale(1.5)`
- Created mobile-specific animation keyframes
- Applied `!important` to ensure media query overrides

**Files Modified:**
- `src/app/globals.css`

**Status:** ✅ Fixed (pending user verification)

---

### **Phase 4: Structure Refactor & Expansion (November 27, 2025)**

#### **November 27, 2025: Component Reorganization & Page Structure**
**Goal:** Clean up codebase and prepare for internationalization

**Implementation:**
- **Component Refactor:** Moved components from flat `src/components` to logical subfolders (`layout`, `home`, `ui`, `features`, `scripts`).
- **Page Structure:** Replicated static site URL structure in `src/app` (e.g., `product-pages/mri-scanner-machines`).
- **Placeholder Pages:** Created 50+ empty page files to establish routing.
- **Documentation:** Updated docs to reflect new structure and internationalization readiness.

**Key Decisions:**
- **Products vs. Blogs:** Defined hierarchy strategy (Products = Nested, Blogs = Flat).
- **Internationalization Prep:** Structure allows easy wrapping in `[lang]` folder later.

**Status:** ✅ Structure Complete, Content Pending

---

## 🔧 KEY TECHNICAL IMPLEMENTATIONS

### 1. **Firebase Integration**
**Purpose:** Store contact form submissions

**Implementation:**
- Firebase SDK initialized in `src/lib/firebase.ts`
- Firestore collection for form data
- Environment variables for Firebase config
- Client-side form submission handling

**Collections:**
- `contact_forms` - Contact page submissions
- `enquiry_forms` - Product/service enquiries

---

### 2. **EmailJS Integration**
**Purpose:** Send email notifications when forms submitted

**Implementation:**
- EmailJS SDK: `@emailjs/browser` package
- Configured in `src/lib/emailjs.ts`
- Service ID, Template ID, Public Key stored in environment
- Sends notification to business email on form submission

**Workflow:**
1. User fills form
2. Data saved to Firebase
3. EmailJS sends notification email
4. User sees success message

---

### 3. **Responsive Hero Slider**
**Implementation:** Swiper library with custom animations

**Features:**
- Auto-play with 5-second intervals
- Fade transitions between slides
- Ken Burns zoom effect on images
- Separate mobile/desktop implementations
- Different image orientations (horizontal/vertical)

**Critical Rule:** Mobile and desktop sliders are COMPLETELY SEPARATE

---

### 4. **Google Maps Integration**
**Purpose:** Show business location in footer

**Implementation:**
- Google Maps JavaScript API
- Embedded map component
- Custom marker for business location
- Responsive sizing
- **Hardcoded API key** for performance (security managed via Google Cloud)

---

### 5. **SEO Optimization**
**Implementation:**
- Next.js metadata API for meta tags
- Structured data (JSON-LD) for rich snippets
- Optimized images with Next.js Image component
- Server-side rendering for better indexing
- Semantic HTML structure

---

## 🎨 DESIGN & UX PRINCIPLES

### Brand Identity:
- **Primary Color:** #59913d (medical green)
- **Secondary Color:** #255a0a (darker green for hover states)
- **Typography:** Professional, clean fonts with font smoothing
- **Imagery:** Medical equipment photos, professional staff images
- **Tone:** Professional, trustworthy, healthcare-focused

### Responsive Design:
- **Mobile-First:** Design for mobile, enhance for desktop
- **Breakpoints:** 640px (sm), 768px (md), 1024px (lg), 1280px (xl), 1920px+ (ultra-wide)
- **Units:** rem, em, %, vw, vh, clamp() (avoid px)
- **Testing:** Real device testing required, not just browser resize

### Performance:
- **Lazy Loading:** Non-critical components and images
- **Code Splitting:** Automatic with Next.js
- **Image Optimization:** Next.js Image component with WebP
- **Bundle Analysis:** Regular checks with webpack bundle analyzer
- **Core Web Vitals:** Target excellent scores (LCP, FID, CLS)

---

## 📊 CURRENT STATUS (November 22, 2025)

### ✅ **Completed Features:**
- [x] Basic page structure and routing
- [x] Header/navigation component
- [x] Footer with Google Maps
- [x] Hero slider (mobile and desktop separate)
- [x] Testimonials carousel
- [x] Contact forms with Firebase integration
- [x] EmailJS notifications
- [x] Product pages structure
- [x] Service pages structure
- [x] Responsive design foundation
- [x] Tailwind CSS configuration
- [x] TypeScript setup
- [x] SEO meta tags
- [x] Mobile horizontal overflow fix

### 🚧 **In Progress:**
- [ ] Complete product catalog migration
- [ ] Complete service pages migration
- [ ] Blog system implementation
- [ ] Advanced SEO (JSON-LD structured data)
- [ ] Performance optimization (image optimization)
- [ ] Accessibility improvements (WCAG compliance)

### ⏳ **Planned Features:**
- [ ] Admin panel for content management (future CMS)
- [ ] Analytics dashboard
- [ ] Multi-language support (international expansion)
- [ ] Advanced search functionality
- [ ] Newsletter subscription
- [ ] Live chat integration
- [ ] Customer portal (view orders, service history)

### 🐛 **Known Issues:**
- ⚠️ Mobile zoom/overflow fixed (awaiting user verification)
- ⚠️ Some product pages pending migration
- ⚠️ Legacy CSS from static site needs cleanup

---

## 📚 DOCUMENTATION STRUCTURE

### Core Documentation Files:
- **AI-AGENT-CRITICAL-GUIDELINES.md** - Rules for AI assistants (READ FIRST)
- **project-overview.md** - This file (project context and history)
- **CURRENT-STATUS.md** - Real-time project status and active issues
- **development-roadmap.md** - Future plans and milestones
- **precautions-and-guardrails.md** - Development restrictions and best practices
- **best-practices.md** - Coding standards and conventions
- **tech-stack-reference.md** - Detailed technology documentation

### Folders:
- **daily-logs/** - Session-specific work logs (chronological)
- **dev-notes/** - Technical notes and feature-specific documentation
- **international-plan/** - Future international expansion plans (DO NOT TOUCH)

---

## 👥 TEAM & WORKFLOW

### Primary Developer:
- **Role:** Frontend Developer
- **Skills:** HTML, CSS, JavaScript, React basics
- **Learning:** Next.js, TypeScript, Firebase
- **Support:** AI agents for backend/infrastructure guidance

### Development Environment:
- **OS:** Windows
- **IDE:** Visual Studio Code
- **Shell:** PowerShell
- **Git:** Version control (GitHub repository)
- **Browser:** Chrome DevTools for debugging

### Workflow:
1. User requests feature or reports issue
2. AI agent reads documentation and researches
3. AI agent implements with real-time documentation
4. User tests on actual devices
5. Iterate based on feedback
6. Update documentation and commit changes

---

## 🎓 KEY LESSONS LEARNED

### 1. **Mobile/Desktop Separation is Critical**
- Never merge separate implementations
- Different devices have fundamentally different needs
- Test on real devices, not just browser resize

### 2. **Research Before Implementation**
- Read documentation first, code second
- Official examples save hours of debugging
- Don't guess when answers exist

### 3. **Real-Time Documentation is Essential**
- Document DURING work, not after
- AI agents forget details quickly
- Future developers (including AI) need context

### 4. **Never Touch Unauthorized Components**
- Only modify what user explicitly requests
- Working features can break from unrelated changes
- Always ask permission before expanding scope

### 5. **Practical Solutions Over Theory**
- Hardcoded API key better than broken performance
- Overrides for dependencies acceptable when necessary
- Perfect is enemy of good

### 6. **Version Control is Your Friend**
- Commit frequently with descriptive messages
- Document why, not just what
- Git history serves as backup documentation

---

## 🔮 FUTURE VISION

### Short-Term (1-3 Months):
- Complete static site migration
- Launch Next.js site to production
- Implement analytics tracking
- Optimize for Core Web Vitals
- Complete all SEO improvements

### Medium-Term (3-6 Months):
- Add headless CMS (Payload or similar)
- Build admin dashboard for content management
- Implement customer portal features
- Add advanced filtering for product catalog
- Multi-language support (international)

### Long-Term (6-12 Months):
- E-commerce capabilities (quotes, orders)
- Integration with ERP/CRM systems
- Advanced analytics and reporting
- Mobile app (React Native)
- AI-powered chatbot for customer support

---

## 📞 PROJECT CONTACTS & RESOURCES

### Official Documentation:
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Firebase: https://firebase.google.com/docs
- EmailJS: https://www.emailjs.com/docs/
- Swiper: https://swiperjs.com/
- TypeScript: https://www.typescriptlang.org/docs/

### Community Resources:
- Next.js GitHub: https://github.com/vercel/next.js
- Tailwind GitHub: https://github.com/tailwindlabs/tailwindcss
- Stack Overflow: https://stackoverflow.com/questions/tagged/next.js

### Project Repository:
- **GitHub:** vsingh2110/nextjs-phantom
- **Branch:** master

---

## 🔄 DOCUMENT MAINTENANCE

**This document should be updated when:**
- Major features are completed
- Technology stack changes
- Project phase transitions occur
- Significant decisions are made
- New team members join
- Project goals evolve

**Last Major Update:** November 22, 2025  
**Next Review:** December 2025 or when Phase 3 completes

---

**For immediate status updates, see:** `CURRENT-STATUS.md`  
**For daily work details, see:** `daily-logs/[date].md`  
**For AI agent guidelines, see:** `AI-AGENT-CRITICAL-GUIDELINES.md`
