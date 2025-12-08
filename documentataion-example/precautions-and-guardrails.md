# Precautions, Guardrails, and Critical Rules

**Project:** Phantom Medical Imaging - Next.js Migration  
**Last Updated:** December 4, 2025  
**Audience:** All developers and AI agents working on this project

---

## 🆕 NEW SECTION: SEO & ACCESSIBILITY GUARDRAILS (UPDATED DEC 4, 2025)

### **6. IMAGE GUARDRAILS (CRITICAL)**

**The Rule:**
> All images MUST have proper dimensions, alt text, and aspect ratios.

**What This Means:**
- ❌ **NEVER** use `width={0} height={0}` - causes SEO tool warnings
- ❌ **NEVER** skip `alt` text - accessibility violation
- ❌ **NEVER** use wrong aspect ratio - causes image distortion
- ✅ **ALWAYS** calculate correct dimensions from actual image size
- ✅ **ALWAYS** use `priority` for above-fold images
- ✅ **ALWAYS** use `fill` + `sizes` for responsive images

**Aspect Ratio Formula:**
```
Actual image: 260 × 94 (ratio = 260/94 = 2.77)
For display height 56px: width = 56 × 2.77 = 155px
```

**Why This Rule Exists:**
- Lighthouse fails "image-aspect-ratio" audit with wrong dimensions
- SEO tools flag 0×0 images as errors
- Distorted images look unprofessional

---

### **7. SCHEMA.ORG GUARDRAILS (CRITICAL)**

**The Rule:**
> Use only valid schema properties. Test with Google Rich Results, not just schema.org validator.

**Invalid Properties That WILL Cause Errors:**

| Schema Type | ❌ Invalid Properties |
|-------------|----------------------|
| MedicalDevice | category, manufacturer, isRelatedTo |
| Organization/Corporation | geo (put in location.Place instead) |
| Product | missing image (Google REQUIRES image!) |

**Correct Patterns:**
```tsx
// ✅ CORRECT: geo inside location.Place
{
  "@type": "Corporation",
  "location": {
    "@type": "Place",
    "geo": { "@type": "GeoCoordinates", ... }
  }
}

// ✅ CORRECT: geo directly on LocalBusiness
{
  "@type": "ProfessionalService",
  "geo": { "@type": "GeoCoordinates", ... }
}

// ✅ CORRECT: Product with image
{
  "@type": "Product",
  "name": "...",
  "image": "https://...",  // REQUIRED!
  "offers": { ... }
}
```

**Why This Rule Exists:**
- Google Rich Results is stricter than schema.org validator
- Invalid properties cause warnings/errors in structured data
- Products without images won't qualify for rich results

---

### **8. META TAG GUARDRAILS**

**The Rule:**
> Never duplicate viewport meta tags. Use correct (non-deprecated) meta tags.

**What This Means:**
- ❌ **NEVER** add `<meta name="viewport">` in layout.tsx head (Next.js handles it)
- ❌ **NEVER** use `apple-mobile-web-app-capable` (deprecated)
- ✅ **ALWAYS** use `mobile-web-app-capable`
- ✅ **ALWAYS** add preconnect hints for external resources

**Why This Rule Exists:**
- Duplicate viewport causes Lighthouse warnings
- Deprecated meta tags are flagged by SEO tools
- Missing preconnects slow down page load (300+ms penalty)

---

### **9. ACCESSIBILITY GUARDRAILS (UPDATED DEC 1, 2025)**

**The Rule:**
> All interactive elements MUST have accessible names. Touch targets MUST be at least 44x44px.

**What This Means:**
- ❌ **NEVER** have icon-only buttons without aria-label
- ❌ **NEVER** have icon-only links without aria-label
- ❌ **NEVER** skip heading levels (H1 → H3, skipping H2)
- ❌ **NEVER** have multiple H1 tags per page
- ❌ **NEVER** use conflicting CSS classes (`block` + `flex`)
- ❌ **NEVER** have touch targets smaller than 44x44px
- ✅ **ALWAYS** add `aria-label` to icon-only interactive elements
- ✅ **ALWAYS** add `aria-expanded` to toggle buttons
- ✅ **ALWAYS** use `sr-only` class for screen reader text
- ✅ **ALWAYS** keep H1 between 20-70 characters
- ✅ **ALWAYS** add `inline-block py-1` to links for touch targets

**Correct Patterns:**
```tsx
// ✅ Icon button with toggle state
<button 
  aria-label={isOpen ? "Close menu" : "Open menu"}
  aria-expanded={isOpen}
>
  <span className="sr-only">Menu</span>
  <MenuIcon aria-hidden="true" />
</button>

// ✅ Touch-friendly link
<a href="tel:..." className="hover:underline inline-block py-1">
  +91 98765 43210
</a>

// ✅ Long visual heading with short H1
<h1 className="sr-only">Phantom Healthcare - About Us</h1>
<p className="text-4xl font-bold">India's Leading Provider...</p>
```

**CSS Class Conflict Rule (NEW DEC 1):**
```tsx
// ❌ WRONG - 'block' and 'flex' conflict
className="block py-1 flex items-center"

// ✅ CORRECT - One display class only
className="py-1 flex items-center"
```

**Why This Rule Exists:**
- Screen readers can't describe icon-only elements
- Lighthouse Accessibility audit fails without aria-labels
- Small touch targets cause frustration on mobile
- CSS conflicts cause unpredictable layouts

---

### **10. LIGHTHOUSE TESTING GUARDRAILS (UPDATED DEC 1, 2025)**

**The Rule:**
> Lighthouse tests ONE page at a time. ALWAYS test in Incognito Mode. Check benchmarkIndex > 2000.

**Critical Discovery (Dec 1, 2025):**
> Lighthouse scores can vary 20-30% based on testing conditions, not actual code!

**The `benchmarkIndex` Factor:**
- Hidden in Lighthouse JSON reports
- Measures machine's computational capacity
- **Must be > 2000 for reliable results**

| benchmarkIndex | Score Impact |
|---------------|--------------|
| < 1500 | 10-20% lower than actual |
| 1500-2000 | 5-10% lower |
| > 2000 | Accurate |

**Testing Requirements:**
1. ✅ Use Incognito Mode (no extensions)
2. ✅ Close other applications
3. ✅ Check benchmarkIndex in JSON report
4. ✅ Run 3-5 times, take median

**Target Scores:**
| Category | Desktop | Mobile |
|----------|---------|--------|
| Performance | >80 | >60 (varies) |
| Accessibility | >95 | >95 |
| Best Practices | >90 | >90 |
| SEO | >95 | >95 |

**Why Mobile Scores Vary:**
- 4x CPU throttling simulation
- Slow 4G network simulation
- Throttling affected by machine's base performance

**Why This Rule Exists:**
- Scores without Incognito can be 20-30% lower due to extensions
- Low benchmarkIndex gives artificially low scores
- Can't diagnose real issues vs testing environment issues

---

### **11. PRECONNECT GUARDRAILS (NEW DEC 1, 2025)**

**The Rule:**
> Use correct crossorigin attribute based on resource type.

**What This Means:**
- ❌ **NEVER** use crossorigin on CSS resources (fonts.googleapis.com)
- ✅ **ALWAYS** use crossorigin="anonymous" on font/asset resources
- ✅ **ALWAYS** verify preconnects are being used

**Correct Patterns:**
```tsx
// CSS files - NO crossorigin
<link rel="preconnect" href="https://fonts.googleapis.com" />

// Font files - WITH crossorigin
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

// CDN assets - WITH crossorigin
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
```

**Why This Rule Exists:**
- Mismatched crossorigin creates unused connections
- Lighthouse warns about unused preconnects
- Wastes browser connection slots

---

### **12. AI SEO / GEO / AEO GUARDRAILS (NEW DEC 4, 2025)**

**The Rule:**
> Content must be structured for AI extraction. Avoid vague marketing language. Include specific, quotable data.

**Terminology:**
- **GEO** = Generative Engine Optimization (for ChatGPT, Perplexity, etc.)
- **AEO** = Answer Engine Optimization (for voice assistants, AI search)
- **AI SEO** = Umbrella term for GEO + AEO

**What This Means:**
- ❌ **NEVER** write vague marketing copy ("world-class solutions")
- ❌ **NEVER** hide key information in paragraphs of fluff
- ❌ **NEVER** use "contact us for pricing" without ANY specifics
- ❌ **NEVER** skip FAQ sections on product/service pages
- ✅ **ALWAYS** lead with key information (price, warranty, specs)
- ✅ **ALWAYS** use declarative, quotable sentences
- ✅ **ALWAYS** include specific numbers and data
- ✅ **ALWAYS** add FAQ sections with FAQPage schema
- ✅ **ALWAYS** structure content with clear headings and lists

**Content Examples:**
```markdown
<!-- ❌ WRONG - AI can't extract useful info -->
"We are a leading provider of world-class medical imaging solutions 
with decades of experience serving India's finest hospitals."

<!-- ✅ CORRECT - AI can quote this directly -->
"Phantom Healthcare has installed over 150 refurbished MRI and CT 
scanners across India since 2011. Our 12-month warranty covers 
all parts and labor."
```

**Schema Requirements:**
```tsx
// ✅ Add FAQPage schema to all product/service pages
{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What warranty does Phantom Healthcare offer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "12-month comprehensive warranty covering parts and labor."
    }
  }]
}
```

**Why This Rule Exists:**
- AI systems extract and cite clear, structured content
- Vague marketing copy is ignored by AI answer engines
- Being mentioned in AI answers = 24/7 brand exposure
- FAQPage schema directly feeds AI answer systems

**Reference:** `docs/SEO-INDIA-REFERENCE.md` → AI SEO / GEO / AEO section

---

## 🚨 ABSOLUTE RULES (ZERO TOLERANCE)

These rules have been established due to past incidents and MUST be followed without exception.

### **1. MOBILE/DESKTOP SEPARATION (MOST CRITICAL)**

**The Rule:**
> Mobile and desktop hero sections, sliders, and enquiry forms must remain COMPLETELY SEPARATE. Never merge, never share code, never apply styles from one to the other.

**What This Means:**
- ❌ **NEVER** merge mobile and desktop JSX blocks
- ❌ **NEVER** use same image sources for both
- ❌ **NEVER** apply desktop animations to mobile
- ❌ **NEVER** add zoom transforms to mobile hero slider
- ❌ **NEVER** use shared CSS classes that affect both
- ✅ **ALWAYS** maintain separate components
- ✅ **ALWAYS** use device-specific images (horizontal for desktop, vertical for mobile)
- ✅ **ALWAYS** test on REAL devices, not just browser resize

**Why This Rule Exists:**
- Mobile and desktop have fundamentally different layout needs
- Shared code causes conflicts and layout breakage
- Device-specific optimization requires separation
- Historical incident: Merging caused days of debugging (July 10, 2025)

**Reference:** `docs/daily-logs/2025-07-10-hero-section-separation-critical.md`

---

### **2. UNAUTHORIZED CHANGES (ZERO TOLERANCE)**

**The Rule:**
> Only modify components explicitly mentioned in the user's request. Never touch other parts of the code "while you're at it."

**What This Means:**
- ❌ **NEVER** modify components not in user's request
- ❌ **NEVER** "improve" code not related to the task
- ❌ **NEVER** refactor working features without permission
- ❌ **NEVER** assume something needs fixing
- ✅ **ALWAYS** ask before expanding scope
- ✅ **ALWAYS** document exactly what you changed
- ✅ **ALWAYS** explain why you made changes

**Why This Rule Exists:**
- Working features have been broken by well-intentioned changes
- One fix can create cascading failures
- User loses trust when unexpected things break
- Historical incident: YouTube fix broke footer map (July 21, 2025)

**Example Violation:**
- User asks: "Fix YouTube embed"
- AI agent also modifies: Footer map, navigation, styles
- Result: Multiple components broken, 8+ hours lost debugging

**Reference:** `docs/daily-logs/2025-07-21-work-log.md`

---

### **3. DOCUMENTATION PROTOCOLS (MANDATORY)**

**The Rule:**
> Document changes in REAL-TIME as you work. Update BOTH work logs AND general notes concurrently. NEVER overwrite existing logs.

**What This Means:**
- ✅ **ALWAYS** create daily log entry at start of session
- ✅ **ALWAYS** update logs as you work, not at end
- ✅ **ALWAYS** document WHY, not just WHAT
- ✅ **ALWAYS** append to files, never overwrite
- ✅ **ALWAYS** preserve chronological order
- ❌ **NEVER** wait until session end to document
- ❌ **NEVER** overwrite or delete existing entries
- ❌ **NEVER** skip documentation because "it's quick"

**Why This Rule Exists:**
- AI agents forget 90% of details when asked to recall later
- Future developers (including AI) need context
- Decisions made weeks ago affect current work
- Historical issue: Multiple work log overwrites lost valuable history

**Documentation Flow:**
1. Start session → Create daily log entry
2. Make decision → Document immediately in both files
3. Implement feature → Update log with progress
4. Encounter issue → Document problem and solution
5. End session → Final summary in daily log

---

### **4. REFERENCE CODE PRESERVATION**

**The Rule:**
> Commented reference code is sacred. Never alter it unless explicitly instructed. When implementing from reference code, keep original commented.

**What This Means:**
- ❌ **NEVER** modify commented reference code
- ❌ **NEVER** change colors/styles in commented code
- ❌ **NEVER** delete reference code "to clean up"
- ✅ **ALWAYS** keep original code commented when implementing
- ✅ **ALWAYS** add new code alongside, not replacing
- ✅ **ALWAYS** mark what you added vs what was reference

**Why This Rule Exists:**
- Reference code serves as documentation
- Original design decisions need to be traceable
- May need to revert to original approach
- Helps understand evolution of features

---

### **5. TESTING REQUIREMENTS**

**The Rule:**
> Always test on real mobile devices. Browser resize is not sufficient for mobile testing.

**What This Means:**
- ✅ **ALWAYS** test on actual mobile devices
- ✅ **ALWAYS** test on multiple screen sizes
- ✅ **ALWAYS** test both portrait and landscape
- ✅ **ALWAYS** test on different browsers
- ❌ **NEVER** rely only on browser DevTools resize
- ❌ **NEVER** assume desktop behavior = mobile behavior

**Testing Checklist:**
- [ ] iPhone (Safari)
- [ ] Android phone (Chrome)
- [ ] Tablet (both iOS and Android)
- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Ultra-wide monitors (1920px+)

**Why This Rule Exists:**
- Browser DevTools don't perfectly simulate mobile
- Touch interactions behave differently
- Mobile browsers have quirks
- Viewport units behave differently
- Historical issue: Mobile overflow not caught in browser testing

---

## 🔧 TECHNICAL GUARDRAILS

### **CSS & Styling Rules**

#### **1. Tailwind First, Custom CSS Last**
```
Priority Order:
1. Tailwind utility classes
2. Tailwind custom classes (via @apply)
3. CSS modules (if needed)
4. Inline styles (only for dynamic values)
5. Global CSS (absolute last resort)
```

#### **2. Responsive Units (MANDATORY)**
- ✅ **USE:** rem, em, %, vw, vh, vmin, vmax, clamp(), min(), max()
- ❌ **AVOID:** px (except for borders, Swiper config, specific cases)

**Examples:**
```css
/* ✅ GOOD */
font-size: clamp(1rem, 2vw, 1.5rem);
padding: 2rem 5%;
width: min(90vw, 1200px);

/* ❌ BAD */
font-size: 16px;
padding: 32px;
width: 1200px;
```

#### **3. Prevent Horizontal Overflow**
Always include in global styles:
```css
html, body {
  max-width: 100vw;
  overflow-x: hidden;
}
```

#### **4. Transform Effects on Mobile**
- Limit scale transforms on mobile (max 1.1x)
- Test that transforms don't cause overflow
- Use separate animations for mobile vs desktop

#### **5. Font Smoothing**
Always apply to body:
```css
@apply antialiased subpixel-antialiased;
```

#### **6. Brand Colors**
- Primary Green: `#59913d`
- Hover Green: `#255a0a`
- Use Tailwind config for brand colors, not hardcoding

---

### **Component Architecture Rules**

#### **1. File Organization**
```
src/
├── app/              # Next.js pages (App Router)
├── components/       # Reusable components
│   ├── layout/      # Header, Footer, Navigation
│   ├── ui/          # Buttons, Cards, Forms
│   └── features/    # Feature-specific components
├── lib/             # Utilities, configurations
├── types/           # TypeScript definitions
└── styles/          # Global styles (minimal)
```

#### **2. Component Naming**
- PascalCase for components: `HeroSlider.tsx`
- kebab-case for files with multiple components: `form-elements.tsx`
- Descriptive names: `ProductCard` not `Card`

#### **3. TypeScript Types**
- Define interfaces for all component props
- Use `types/` directory for shared types
- Prefer interfaces over types for objects

#### **4. State Management**
- Use React hooks (useState, useEffect, useCallback, useMemo)
- Minimize global state
- Keep state close to where it's used

---

### **Performance Guardrails**

#### **1. Image Optimization**
- Use Next.js `Image` component (not `<img>`)
- Specify width and height
- Use appropriate formats (WebP, AVIF)
- Lazy load below-the-fold images

#### **2. Code Splitting**
- Lazy load heavy components:
  ```tsx
  const HeavyComponent = dynamic(() => import('./HeavyComponent'));
  ```
- Don't import entire libraries when you need one function

#### **3. Bundle Size**
- Run `npm run analyze` regularly
- Remove unused dependencies
- Tree shake when possible

#### **4. External Scripts**
- Load non-critical scripts asynchronously
- Use Next.js `Script` component with appropriate strategy
- Defer analytics and tracking scripts

---

### **Firebase & EmailJS Rules**

#### **1. Environment Variables**
```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

#### **2. Firebase Configuration**
- ❌ **NEVER** modify working Firebase config without research
- ✅ **ALWAYS** test configuration changes in development first
- ✅ **ALWAYS** keep Firebase rules in separate file

#### **3. EmailJS Implementation**
- Use `@emailjs/browser` package (not deprecated `emailjs-com`)
- Validate form data before sending
- Implement rate limiting to prevent spam
- Show loading state during send

---

## 🔒 SECURITY GUARDRAILS

### **1. Environment Variables**
- ❌ **NEVER** commit `.env.local` to Git
- ❌ **NEVER** hardcode API keys (except Google Maps - special case)
- ✅ **ALWAYS** use `NEXT_PUBLIC_` prefix for client-side vars
- ✅ **ALWAYS** keep sensitive keys server-side only

### **2. Content Security Policy**
- Include all external domains in CSP
- Test after adding new external scripts
- Monitor console for CSP violations

### **3. Form Validation**
- Validate on client-side (UX)
- Validate on server-side (security)
- Sanitize all user inputs
- Prevent XSS attacks

### **4. API Routes**
- Rate limit to prevent abuse
- Validate request methods
- Check origin headers
- Implement CSRF protection

---

## 📝 WORKFLOW GUARDRAILS

### **Session Start Checklist:**
- [ ] Read `AI-AGENT-CRITICAL-GUIDELINES.md`
- [ ] Read `CURRENT-STATUS.md`
- [ ] Check latest daily log entry
- [ ] Understand user's specific request
- [ ] Research relevant documentation
- [ ] Create new daily log entry

### **During Work Checklist:**
- [ ] Only modify components in user's request
- [ ] Document decisions in real-time
- [ ] Update both work log and general notes
- [ ] Test changes incrementally
- [ ] Commit frequently with descriptive messages

### **Before Committing:**
- [ ] Test on desktop
- [ ] Test on mobile (real device)
- [ ] Check console for errors
- [ ] Verify no unauthorized changes
- [ ] Update documentation
- [ ] Write descriptive commit message

### **Session End Checklist:**
- [ ] Update `CURRENT-STATUS.md`
- [ ] Finalize daily log entry
- [ ] List any pending issues
- [ ] Document next steps
- [ ] Commit all changes

---

## 🚫 COMMON MISTAKES TO AVOID

### **1. "While I'm Here" Syndrome**
❌ "I'm fixing the header, might as well update the footer"  
✅ Only touch what's in the request

### **2. Assuming Context**
❌ "This must need fixing" (without being asked)  
✅ Ask if you see potential issues

### **3. Trial-and-Error Without Research**
❌ "Let me try random solutions"  
✅ Research documentation first, then implement

### **4. Over-Optimization**
❌ "Let me refactor everything while fixing this bug"  
✅ Fix the bug, refactor separately if needed

### **5. Skipping Documentation**
❌ "It's just a small change, no need to document"  
✅ Document everything, no matter how small

### **6. Desktop-Only Testing**
❌ "Looks good in browser, ship it"  
✅ Always test on real mobile devices

### **7. Merging Mobile/Desktop Code**
❌ "I can make this work for both with one component"  
✅ Keep them separate, always

### **8. Deleting Reference Code**
❌ "This commented code is just clutter"  
✅ Reference code is documentation, keep it

---

## ✅ SUCCESS PATTERNS

### **What Works Well:**

1. **Research First, Code Second**
   - Read documentation before implementing
   - Search for official examples
   - Understand the problem before solving

2. **Incremental Changes**
   - Make small changes
   - Test after each change
   - Commit working code frequently

3. **Real-Time Documentation**
   - Document as you work
   - Update multiple files concurrently
   - Include rationale, not just actions

4. **Asking Questions**
   - Clarify ambiguous requests
   - Confirm before expanding scope
   - Discuss potential issues upfront

5. **Testing Thoroughly**
   - Test on multiple devices
   - Test edge cases
   - Test error scenarios

---

## 🎯 WHEN IN DOUBT

### **Decision Framework:**

**Question 1:** Is this in the user's request?
- **No** → Don't touch it
- **Yes** → Proceed to Question 2

**Question 2:** Have I researched the best approach?
- **No** → Research first
- **Yes** → Proceed to Question 3

**Question 3:** Am I documenting as I work?
- **No** → Start documenting now
- **Yes** → Proceed to Question 4

**Question 4:** Have I tested on mobile?
- **No** → Test on real device
- **Yes** → Ready to commit

---

## 📚 REFERENCE DOCUMENTS

**Always Consult:**
- `AI-AGENT-CRITICAL-GUIDELINES.md` - Rules for AI agents
- `CURRENT-STATUS.md` - Current project state
- `project-overview.md` - Project context
- `daily-logs/[date].md` - Recent work history
- `development-roadmap.md` - Future plans
- `best-practices.md` - Coding standards
- `tech-stack-reference.md` - Technology details

---

## 🔄 UPDATING THESE GUARDRAILS

These guardrails should be updated when:
- New patterns emerge
- New mistakes are made
- Technologies change
- Project requirements evolve
- Team feedback indicates gaps

**Update Process:**
1. Discuss proposed change
2. Document rationale
3. Update this file
4. Notify all developers/agents
5. Add to checklist if critical

---

**Remember:** These guardrails exist because of real problems that occurred. They're not theoretical—they're practical lessons learned through painful debugging sessions. Follow them to avoid repeating history.

---

**Last Updated:** November 22, 2025  
**Next Review:** December 22, 2025 or after significant incidents
