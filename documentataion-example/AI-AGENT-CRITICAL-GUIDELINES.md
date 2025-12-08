# 🚨 AI AGENT CRITICAL GUIDELINES 🚨

## 🔴 READ THIS BEFORE ANYTHING ELSE - NO EXCEPTIONS 🔴

**Last Updated:** December 4, 2025  
**Priority:** ABSOLUTE HIGHEST - MANDATORY COMPLIANCE  
**Project:** Phantom Medical Imaging - Static to Next.js Migration

---

## ⚠️ PROJECT CONTEXT

**Project Name:** Phantom Medical Imaging Equipment Website  
**Current Phase:** Migration from Static HTML/CSS to Next.js  
**Developer Profile:** Frontend Developer (relies on AI for backend/infrastructure)

**Critical Understanding:**
- **Static Site:** `phantom-website/` folder (current live website)
- **Next.js Site:** `phantom-nextjs/` folder (migration target)
- **Goal:** Replicate and enhance static site functionality in Next.js
- **Tech Stack:** Next.js 15.3.5, Firebase, EmailJS, Tailwind CSS, Swiper, React-YouTube

**Completed Pages (as of Nov 30, 2025):**
- ✅ Home page (with full SEO, JSON-LD, accessibility)
- ✅ About page (with full SEO, JSON-LD, accessibility)
- ✅ Contact page (with full SEO, JSON-LD, accessibility)

---

## 🔴 THE GOLDEN RULE: RESEARCH-FIRST METHODOLOGY

### NEVER START WORK WITHOUT CHECKING DOCUMENTATION FIRST

When user reports ANY issue or requests ANY feature:

1. ✅ **Read relevant documentation files** (15 min)
   - Check `CURRENT-STATUS.md` for known issues
   - Review `project-overview.md` for context
   - Check `daily-logs/` for recent work history
   - Review `precautions-and-guardrails.md` for restrictions
   - **NEW:** Read `SEO-INDIA-REFERENCE.md` for SEO guidelines

2. ✅ **Search official documentation** (15 min)
   - Next.js: https://nextjs.org/docs
   - Tailwind CSS: https://tailwindcss.com/docs
   - Firebase: https://firebase.google.com/docs
   - EmailJS: https://www.emailjs.com/docs/
   - Swiper: https://swiperjs.com/
   - **NEW:** Schema.org: https://schema.org/
   - **NEW:** Google Rich Results: https://search.google.com/test/rich-results

3. ✅ **Search official repositories for examples** (15 min)
   - Look for production examples
   - Check GitHub issues for similar problems
   - Verify tech stack versions match

4. ✅ **Identify patterns and best practices**

5. ❌ **ONLY THEN propose and implement solution**

**BANNED APPROACH**: Trial-and-error without research = IMMEDIATE FAILURE

---

## 🆕 SEO & ACCESSIBILITY RULES (CRITICAL - ADDED NOV 30, 2025)

### 8. NEXT.JS IMAGE COMPONENT RULES

**MANDATORY for all images:**

| Scenario | Required Props | Example |
|----------|---------------|---------|
| Icons, thumbnails (known size) | `width`, `height` | `width={150} height={150}` |
| Hero, backgrounds (responsive) | `fill`, `sizes` | `fill sizes="(max-width: 768px) 100vw, 50vw"` |
| Above-fold images | Add `priority` | `priority` |

**NEVER DO:**
- ❌ `width={0} height={0}` - Causes SEO warnings
- ❌ Mismatched aspect ratios (e.g., 220×70 for a 260×94 image)
- ❌ Skip `alt` text on any image

**Aspect Ratio Formula:**
```
If actual image = 260 × 94 (ratio 2.77)
For display height 56px: width = 56 × 2.77 = 155px
```

---

### 9. JSON-LD SCHEMA RULES

**Valid Schema Types & Properties:**

| Type | VALID Properties | INVALID Properties |
|------|-----------------|-------------------|
| `Organization/Corporation` | name, url, logo, foundingDate, address, contactPoint, sameAs | ❌ `geo` (put in location.Place) |
| `LocalBusiness/ProfessionalService` | name, geo, openingHoursSpecification, priceRange | ✅ `geo` valid here |
| `MedicalDevice` | name, description, url, image, sameAs | ❌ `category`, `manufacturer`, `isRelatedTo` |
| `Product` | name, description, image (REQUIRED!), offers, aggregateRating, review | |

**CRITICAL RULES:**
- ✅ Use `ProfessionalService` instead of `MedicalBusiness` (ad platform restrictions)
- ✅ Always include `image` on Product schemas (Google requires it)
- ✅ Always test with Google Rich Results Test, not just schema.org validator
- ✅ Include "Refurbished" in all product names (we're resellers)

---

### 10. META TAGS RULES

**Do NOT duplicate viewport:**
```tsx
// Next.js handles viewport via metadata API
// ❌ NEVER add manual <meta name="viewport"> in layout.tsx head
```

**Use correct meta tags:**
```tsx
// ✅ CORRECT
<meta name="mobile-web-app-capable" content="yes" />

// ❌ DEPRECATED
<meta name="apple-mobile-web-app-capable" content="yes" />
```

**Preconnect for performance (add to layout.tsx):**
```tsx
<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

---

### 11. ACCESSIBILITY RULES

**All interactive elements need accessible names:**
```tsx
// ✅ Icon-only buttons MUST have aria-label
<button aria-label="Open mobile menu">
  <span className="sr-only">Menu</span>
  <MenuIcon />
</button>

// ✅ Icon-only links MUST have aria-label  
<a href="tel:..." aria-label="Call us at +91...">
  <PhoneIcon />
</a>

// ✅ Toggle buttons need aria-expanded
<button 
  aria-label={isOpen ? "Close menu" : "Open menu"}
  aria-expanded={isOpen}
>
```

**Touch Targets (ADDED Dec 1, 2025):**
```tsx
// ❌ WRONG - Link too small for mobile tap
<a href="tel:..." className="hover:underline">Phone</a>

// ✅ CORRECT - Minimum 44x44px tap area
<a href="tel:..." className="hover:underline inline-block py-1">Phone</a>
```

**CSS Class Conflicts (ADDED Dec 1, 2025):**
```tsx
// ❌ WRONG - 'block' and 'flex' conflict
className="block py-1 flex items-center"

// ✅ CORRECT - Use only one display class
className="py-1 flex items-center"
```

**Heading hierarchy:**
- ✅ One `<h1>` per page (20-70 characters)
- ✅ H1 → H2 → H3 in order (no skipping levels)
- ✅ If visual H1 is too long, use `sr-only` H1 + visual `<p>` with heading styles

**Screen reader only text:**
```tsx
<span className="sr-only">Descriptive text for screen readers</span>
```

---

### 12. LIGHTHOUSE TESTING (UPDATED Dec 1, 2025)

**⚠️ CRITICAL: Lighthouse scores vary 20-30% based on testing conditions!**

**The `benchmarkIndex` Factor:**
- Hidden in Lighthouse JSON reports
- Measures machine's computational capacity
- Should be > 2000 for reliable results
- < 1500 = scores are artificially low

**Always Test:**
1. ✅ In Incognito Mode (no extensions)
2. ✅ With other apps closed
3. ✅ Check benchmarkIndex in JSON report
4. ✅ Run 3-5 times, take median

**Target Scores:**
| Category | Desktop | Mobile | Notes |
|----------|---------|--------|-------|
| Performance | >80 | >60 | Mobile varies due to throttling |
| Accessibility | >95 | >95 | Critical |
| Best Practices | >90 | >90 | High |
| SEO | >95 | >95 | Critical |

**Why Mobile Scores Vary:**
- Simulated 4x CPU throttling
- Simulated slow 4G network
- Throttling affected by base machine performance

---

### 13. PRECONNECT RULES (ADDED Dec 1, 2025)

**Different origins need different crossorigin settings:**

```tsx
// CSS files (no CORS needed) - NO crossorigin
<link rel="preconnect" href="https://fonts.googleapis.com" />

// Font files (CORS needed) - WITH crossorigin
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

// CDN assets (CORS needed) - WITH crossorigin
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
```

**Why?** Using crossorigin on non-CORS resource creates unused connection.

---

### 14. AI SEO / GEO / AEO RULES (ADDED Dec 4, 2025)

**What is this?** Optimizing content to appear in AI-generated search answers (ChatGPT, Google AI Overviews, Perplexity, Claude, Gemini).

**📖 TERMINOLOGY:**
| Term | Full Name | Meaning |
|------|-----------|---------|
| **GEO** | Generative Engine Optimization | Optimizing for AI-powered search engines |
| **AEO** | Answer Engine Optimization | Making content visible to AI systems that deliver direct answers |
| **AI SEO** | AI-focused SEO | Umbrella term for GEO + AEO + traditional SEO |

**RULES FOR AI VISIBILITY:**

1. **Content Structure:**
   - ✅ Lead with key information (don't bury the lede)
   - ✅ Use declarative, quotable sentences
   - ✅ Include specific data, numbers, specifications
   - ✅ Add FAQ sections with common questions
   - ❌ Don't use vague marketing language

2. **Schema Implementation:**
   - ✅ Add FAQPage schema for Q&A content
   - ✅ Consider Speakable schema for voice search
   - ✅ Implement HowTo schema for process content

3. **Technical Requirements:**
   - ✅ SSR/SSG is CRITICAL (Next.js already handles this)
   - ❌ Heavy JavaScript-only content may be invisible to AI crawlers

**Content Format Examples:**
```markdown
<!-- ❌ WRONG - AI can't extract useful info -->
"We offer world-class solutions with decades of experience."

<!-- ✅ CORRECT - AI can quote this directly -->
"Phantom Healthcare provides 12-month warranty on all refurbished 
MRI machines. We have installed 150+ systems across India since 2011."
```

**FAQPage Schema Example:**
```tsx
{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What warranty does Phantom Healthcare offer on refurbished MRI?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Phantom Healthcare provides a 12-month comprehensive warranty on all refurbished MRI machines, covering parts and labor."
    }
  }]
}
```

**📚 Full Details:** See `docs/SEO-INDIA-REFERENCE.md` → AI SEO / GEO / AEO section

---

## 🚨 CRITICAL PROJECT-SPECIFIC RULES

### 1. MOBILE/DESKTOP SEPARATION (ABSOLUTE)

**THE MOST VIOLATED RULE - ZERO TOLERANCE**

- ❌ **NEVER** merge mobile and desktop hero/slider/enquiry sections
- ❌ **NEVER** apply desktop styles to mobile or vice versa
- ❌ **NEVER** use same image sources for mobile and desktop
- ❌ **NEVER** add zoom animation to mobile hero slider
- ❌ **NEVER** merge JSX blocks for mobile/desktop
- ✅ **ALWAYS** keep separate components for mobile and desktop
- ✅ **ALWAYS** test on real devices, not just browser resize

**See:** `docs/daily-logs/2025-07-10-hero-section-separation-critical.md`

---

### 2. UNAUTHORIZED CHANGES (ZERO TOLERANCE)

**Historical Issue:** AI agents have broken working features by making unauthorized changes

**STRICT RULES:**
- ❌ **NEVER** modify components not mentioned in user's request
- ❌ **NEVER** alter footer, maps, navigation, or any component without explicit permission
- ❌ **NEVER** assume something needs fixing if not mentioned
- ✅ **ALWAYS** ask before making changes outside the request scope
- ✅ **ALWAYS** document what you changed and WHY
- ✅ **ALWAYS** test changes before implementing

**Example Violation:** User asks to fix YouTube embed → AI breaks footer map (July 21, 2025)

---

### 3. WORK LOG & DOCUMENTATION PROTOCOLS

**THE SECOND MOST VIOLATED RULE**

#### Real-Time Documentation (MANDATORY):
- ✅ **ALWAYS** update documentation DURING development, not at end
- ✅ **ALWAYS** update BOTH work logs AND general notes concurrently
- ❌ **NEVER** wait until session end to document
- ❌ **NEVER** overwrite or replace existing work logs - APPEND ONLY
- ✅ **ALWAYS** preserve chronological order and session context
- ✅ **ALWAYS** document WHY decisions were made, not just WHAT

#### Why Concurrent Updates Are Critical:
- AI agents forget 90% of details when asked to update at session end
- Important technical decisions and rationale get lost
- Development flow and decision-making process not preserved
- Compiled resources and tools not properly documented

**See:** `docs/dev-notes/general-development-notes.md` Section on Documentation

---

### 4. CODE PRESERVATION & REFERENCE CODE

**STRICT RULES:**
- ❌ **NEVER** alter commented reference code unless explicitly instructed
- ❌ **NEVER** change design/colors of commented code when only uncomment is requested
- ✅ **ALWAYS** keep original code commented safely when making modifications
- ✅ **ALWAYS** document mistakes and recovery steps in real time

---

### 5. GOOGLE MAPS EMBED ISSUE (KNOWN PROBLEM)

**Status:** UNRESOLVED since July 2025
**Affected Files:** `src/app/contact/page.tsx`, `src/components/layout/Footer.tsx`

**Problem:**
Google Maps marker appears at edge/bottom of iframe instead of centered.

**Key Observation:**
The static site (`phantom-website/contact.html`) uses the EXACT SAME embed URL and works perfectly. This means the issue is NOT the URL but CSS/container styling in Next.js.

**What Has Been Tried:**
- Different embed URLs with various zoom levels ❌
- Removed `overflow-hidden` and `rounded` classes ❌
- Changed container heights ❌
- Various CSS combinations ❌

**What To Investigate:**
- Compare container CSS between static site and Next.js
- Check global styles that might affect iframes
- Test with completely stripped-down container
- Consider Google Maps JavaScript API as fallback

**DO NOT:**
- Spend hours trying random URL changes
- Assume the embed URL is wrong (it's the same as static site)

---

### 6. TAILWIND & CSS PROTOCOLS

**MANDATORY CONVENTIONS:**
- ✅ **ALWAYS** use Tailwind utility classes first
- ✅ **ALWAYS** use rem, em, %, vw, vh, vmin, vmax, clamp() for responsive units
- ❌ **NEVER** use px except where absolutely required (e.g., Swiper configuration)
- ❌ **NEVER** use manual/custom CSS unless Tailwind cannot achieve the result
- ✅ **ALWAYS** apply font smoothing with `antialiased` and `subpixel-antialiased`
- ✅ **ALWAYS** preserve brand green (#59913d) and gradient themes

**Performance:**
- ✅ Use `max-width: 100vw` and `overflow-x: hidden` to prevent horizontal scroll
- ✅ Limit transforms/scales on mobile to prevent viewport overflow
- ✅ Test responsive behavior on actual mobile devices

---

### 7. MOBILE ZOOM/OVERFLOW ISSUES (CURRENT FOCUS)

**Recent Issue (Nov 22, 2025):** Large gap on right side of mobile website, zoom in/out issues

**Common Causes:**
- Hero slider scale transforms (e.g., `scale(1.5)`) overflow viewport
- Fixed widths instead of responsive units
- Large negative margins
- Elements with `position: absolute` extending beyond viewport

**Standard Fixes:**
```css
html, body {
  max-width: 100vw;
  overflow-x: hidden;
}

@media (max-width: 800px) {
  .hero-slider-container .myslide.active .img-slider {
    transform: scale(1.05) !important; /* Reduced from 1.5 */
  }
}
```

---

## 📚 MANDATORY PRE-WORK CHECKLIST

Before starting ANY work:

- [ ] Read `CURRENT-STATUS.md` for active issues
- [ ] Review latest `daily-logs/` entry
- [ ] Check `precautions-and-guardrails.md` for restrictions
- [ ] Review `project-overview.md` for context
- [ ] Search official documentation for the feature/issue
- [ ] Check recent work logs for similar issues
- [ ] Verify you understand the MOBILE/DESKTOP separation rule
- [ ] Confirm you will NOT touch unauthorized components
- [ ] Commit to REAL-TIME documentation updates

---

## 🎯 TECHNICAL STACK REFERENCE

**Core Technologies:**
- **Framework:** Next.js 15.3.5 (App Router)
- **Styling:** Tailwind CSS 3.4.0
- **Database:** Firebase 10.14.1 (Firestore)
- **Email:** EmailJS (@emailjs/browser 4.4.1)
- **Sliders:** Swiper 11.2.10
- **Video:** react-youtube 10.1.0
- **Language:** TypeScript 5

**Key Integrations:**
- Google Maps (hardcoded API key for performance)
- Google Analytics (@next/third-parties)
- Font Awesome icons
- YouTube embeds
- Contact forms with Firebase storage

---

## ⚡ COMMON ISSUES & SOLUTIONS

### Issue: Mobile Horizontal Overflow
**Solution:** Add `max-width: 100vw; overflow-x: hidden;` to html/body

### Issue: Hero Slider Too Large on Mobile
**Solution:** Reduce scale transforms in mobile media queries

### Issue: Firebase "not defined" Error
**Solution:** Check Content Security Policy, ensure proper Script tag loading

### Issue: EmailJS Not Sending
**Solution:** Verify @emailjs/browser package, check service/template IDs

### Issue: Icons Not Showing
**Solution:** Verify Font Awesome CDN loading, check CSP headers

---

## 📝 SESSION WORKFLOW

1. **Start Session:**
   - Read `CURRENT-STATUS.md`
   - Review latest daily log entry
   - Create new daily log entry with timestamp

2. **During Work:**
   - Document decisions in REAL-TIME
   - Update work log as you progress
   - Test thoroughly before committing changes
   - Only modify components explicitly mentioned

3. **End Session:**
   - Update `CURRENT-STATUS.md` with current state
   - Finalize daily log entry
   - List any pending issues or blockers
   - Commit all changes with descriptive messages

---

## 🔥 PAST FAILURES TO LEARN FROM

### July 21, 2025: Unauthorized Footer Map Changes
- **Issue:** User asked to fix YouTube embed
- **Mistake:** AI broke footer map without permission
- **Impact:** User extremely frustrated, multiple broken features
- **Lesson:** NEVER touch components not in the request

### July 16, 2025: Firebase Dependency Issues
- **Issue:** 10 moderate vulnerabilities in Firebase packages
- **Solution:** Override undici version in package.json
- **Lesson:** Research official solutions before making changes

### Multiple Sessions: Work Log Overwrites
- **Issue:** AI agents overwrote entire work logs instead of appending
- **Impact:** Lost development history and context
- **Lesson:** APPEND ONLY, never overwrite logs

---

## ✅ SUCCESS PATTERNS

### What Works:
- ✅ Reading documentation before coding
- ✅ Real-time concurrent documentation
- ✅ Testing on actual mobile devices
- ✅ Asking permission before changing unrelated components
- ✅ Using Tailwind utilities over custom CSS
- ✅ Preserving mobile/desktop separation
- ✅ Keeping reference code commented and safe

---

## 🚀 NEXT AI AGENT QUICK START

1. Read this file completely (5 min)
2. Read `CURRENT-STATUS.md` (3 min)
3. Read latest `daily-logs/` entry (5 min)
4. Read `project-overview.md` (5 min)
5. Understand user's request
6. Research relevant documentation (15-30 min)
7. Create daily log entry
8. Implement with real-time documentation
9. Test thoroughly
10. Update status files

**Total Prep Time:** 30-45 minutes  
**Result:** Avoid 8+ hours of debugging and user frustration

---

## 📞 EMERGENCY CONTACTS

**When Stuck:**
1. Search project documentation
2. Search official docs
3. Search GitHub issues
4. Ask user for clarification
5. Document the blocker in daily log

**Never:**
- Make random changes hoping something works
- Touch unrelated components
- Skip documentation
- Implement without testing

---

**Remember:** Every mistake costs the developer time, money, and frustration. Research first, implement carefully, document everything.
