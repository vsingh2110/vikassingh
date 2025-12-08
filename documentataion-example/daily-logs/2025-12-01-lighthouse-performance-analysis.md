# Daily Work Log - December 1, 2025

## Session Summary
**Date:** December 1, 2025  
**Session Type:** Lighthouse Performance Analysis & Accessibility Fixes  
**Focus Areas:** Mobile Performance Deep Dive, CSS Conflicts, Accessibility Improvements  
**Status:** ✅ COMPLETED - All fixes applied  
**Build Status:** ✅ Passing (312 pages)  
**Session End:** ~1:30 AM IST (Dec 1)

---

## 🎯 SESSION OVERVIEW

This session was a **deep dive into Lighthouse performance analysis**, understanding why mobile scores fluctuate, and fixing accessibility issues. We learned critical insights about:

1. How Lighthouse calculates performance scores
2. Why scores can vary from 49 to 89 on the SAME code
3. The difference between actual performance issues vs testing environment issues
4. CSS class conflict debugging
5. Mobile accessibility best practices

---

## 📊 LIGHTHOUSE SCORE ANALYSIS - CRITICAL LEARNINGS

### The Mystery of Fluctuating Scores

**Observation:** Mobile performance score varied wildly:
- First test: 49 (poor)
- Second test: 61 (moderate)  
- Third test: 70 (moderate)
- Fourth test (incognito): 83-89 (good)

**Root Cause Discovery:** The `benchmarkIndex` in Lighthouse JSON reports

### What is benchmarkIndex?

The `benchmarkIndex` is a crucial metric that measures the **computational power of the testing device** at the time of the test. It directly affects simulated mobile throttling.

| benchmarkIndex | Meaning | Score Impact |
|---------------|---------|--------------|
| < 1000 | Very slow/loaded machine | Scores 10-20% lower |
| 1000-1500 | Slow machine | Scores 5-15% lower |
| 1500-2000 | Average machine | Normal scores |
| 2000-2500 | Good machine | Accurate scores |
| > 2500 | Fast machine | Scores may be slightly optimistic |

**Our Tests:**
- Test 1 (score 49): benchmarkIndex = 1261 (machine under load)
- Test 2 (score 89): benchmarkIndex = 2363 (clean environment)

### Chrome Extensions Warning

**Critical Discovery:** Lighthouse detected Chrome extensions:
```
"Chrome extensions negatively affected this page's load performance. 
Try auditing the page in incognito mode or from a Chrome profile without extensions."
```

**Extensions Found in Reports:**
- Video Downloader PLUS (86.3 KiB jQuery loaded!)
- Unknown extension (28.8 KiB jQuery)

**Impact:** Extensions were injecting ~115 KiB of JavaScript into every page test!

### Key Takeaway

> **ALWAYS test Lighthouse in Incognito Mode** on a machine that's not running heavy tasks. The benchmarkIndex should be > 2000 for reliable results.

---

## 🔧 CSS CLASS CONFLICT FIX

### Problem: Conflicting Tailwind Display Classes

**ESLint Error:**
```
"Classnames 'block' and 'flex' are conflicting!"
```

**Location:** `Header.tsx` lines 319 and 414

**Analysis:**
- Mobile dropdown items had: `block py-1 flex items-center`
- `block` = `display: block`
- `flex` = `display: flex`
- Both can't apply simultaneously - CSS cascade means last one wins, but intent is unclear

**Fix Applied:**
```tsx
// Before
className="block py-1 flex items-center"

// After  
className="py-1 flex items-center"
```

**Reasoning:** We needed `flex` for `items-center` alignment. `block` was redundant.

**Files Modified:**
- `src/components/layout/Header.tsx` - Lines 319, 414

---

## ♿ ACCESSIBILITY FIXES APPLIED

### 1. Hamburger Menu Button - Missing Accessible Name

**Issue:** Screen readers announced just "button" with no context

**Lighthouse Error:**
```
"Buttons do not have an accessible name"
"Element does not have inner text that is visible to screen readers"
"aria-label attribute does not exist or is empty"
```

**Fix Applied:**
```tsx
<button 
  onClick={toggleMenu}
  className="flex flex-col justify-center items-center w-10 h-10..."
  aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
  aria-expanded={isMenuOpen}
>
```

**Why Dynamic aria-label:** The label changes based on menu state for better UX.

---

### 2. Download Brochure Button - Low Contrast

**Issue:** White text on green (#59913d) with `text-xs` (12px) failed WCAG contrast

**Lighthouse Error:**
```
"Background and foreground colors do not have a sufficient contrast ratio"
Failing Element: <p class="text-xs text-center">Download Brochure</p>
```

**Fix Applied:**
```tsx
// Before
<i className="fa fa-download text-xs md:text-lg mb-1" aria-hidden="true"></i>
<p className="text-xs text-center">Download<br />Brochure</p>

// After
<i className="fa fa-download text-sm md:text-lg mb-1" aria-hidden="true"></i>
<p className="text-sm font-medium text-center">Download<br />Brochure</p>
```

**Changes:**
- `text-xs` (12px) → `text-sm` (14px) for better readability
- Added `font-medium` for increased contrast perception

---

### 3. Touch Targets Too Small

**Issue:** Phone and email links in Footer had insufficient tap area (< 48x48px)

**Lighthouse Error:**
```
"Touch targets do not have sufficient size or spacing"
Failing Elements: Multiple <a href="tel:..."> and <a href="mailto:..."> links
```

**Minimum Touch Target:** 48x48px (Apple) or 44x44px (WCAG)

**Fix Applied:**

**Footer Contact Links:**
```tsx
// Before
<ul className="space-y-1 text-xs md:text-sm list-disc pl-5">
  <li><a href="tel:..." className="hover:underline">...</a></li>

// After
<ul className="space-y-2 text-xs md:text-sm list-disc pl-5">
  <li><a href="tel:..." className="hover:underline inline-block py-1">...</a></li>
```

**Footer Navigation Links:**
```tsx
// Before
<ul className="space-y-1 text-xs tracking-tight text-left">
  <li><Link href="#" className="hover:underline">{item}</Link></li>

// After
<ul className="space-y-1.5 text-xs tracking-tight text-left">
  <li><Link href="#" className="hover:underline inline-block py-0.5">{item}</Link></li>
```

**Regional Offices Links:**
```tsx
// Before
className="hover:underline"

// After
className="hover:underline inline-block py-1"
```

**Changes Made:**
- Added `inline-block py-1` or `py-0.5` to increase tap height
- Increased `space-y-1` to `space-y-1.5` or `space-y-2` for vertical spacing

---

### 4. Preconnect Crossorigin Fix

**Issue:** Unused preconnect warning for fonts.googleapis.com

**Lighthouse Warning:**
```
"Unused preconnect. Check that the crossorigin attribute is used properly."
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin="anonymous">
```

**Understanding:**
- `fonts.googleapis.com` serves CSS (no CORS needed)
- `fonts.gstatic.com` serves font files (CORS needed)
- Using `crossorigin` on googleapis.com creates a mismatch

**Fix Applied:**
```tsx
// Before
<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

// After
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

---

## 📁 FILES MODIFIED

```
src/components/layout/Header.tsx
  - Line 274-276: Added aria-label and aria-expanded to hamburger button
  - Lines 319, 414: Removed conflicting 'block' class from dropdown items
  - Lines 501-502: Improved Download Brochure text contrast

src/components/layout/Footer.tsx
  - Lines 71-77: Increased touch targets for contact links
  - Lines 83-85: Increased touch targets for Useful Links
  - Lines 90-91: Increased touch targets for Services links
  - Lines 140-141: Increased touch targets for regional office links

src/components/home/RegionalOffices.tsx
  - Lines 106-115: Increased touch targets for phone links
  - Lines 120-129: Increased touch targets for email links

src/app/layout.tsx
  - Lines 154-155: Fixed preconnect crossorigin attribute for fonts.googleapis.com
```

---

## 📊 LIGHTHOUSE METRICS EXPLAINED

### What Each Metric Means

| Metric | Description | Good | Moderate | Poor |
|--------|-------------|------|----------|------|
| **FCP** | First Contentful Paint - First text/image visible | < 1.8s | 1.8-3.0s | > 3.0s |
| **LCP** | Largest Contentful Paint - Main content visible | < 2.5s | 2.5-4.0s | > 4.0s |
| **TBT** | Total Blocking Time - JS blocking main thread | < 200ms | 200-600ms | > 600ms |
| **CLS** | Cumulative Layout Shift - Visual stability | < 0.1 | 0.1-0.25 | > 0.25 |
| **SI** | Speed Index - How quickly content populates | < 3.4s | 3.4-5.8s | > 5.8s |

### Our Metrics (Mobile - Clean Test):
- FCP: 3.4s (Moderate)
- LCP: 4.4s (Moderate)
- TBT: 130-290ms (Good)
- CLS: 0.009 (Good ✅)
- Max Potential FID: 130ms (Good)

---

## 🔍 ISSUES NOT IN OUR CONTROL

### External Script Load Times

| Script | Transfer Size | Issue |
|--------|--------------|-------|
| Font Awesome (cdnjs) | 19.0 KiB | 1,010ms RTT - CDN latency |
| Google Fonts | 1.4 KiB | 850ms RTT |
| Firebase Firestore | 68.6 KiB | 64.7 KiB unused |
| GTM/Analytics | 243.7 KiB | 104.2 KiB unused |
| Facebook Pixel | 83.7 KiB | 32.7 KiB unused |

**These are third-party scripts.** We can:
1. ✅ Self-host Font Awesome (future optimization)
2. ⚠️ Defer non-critical analytics (requires business approval)
3. ⚠️ Use lite-youtube-embed for YouTube (already using lazy load)

### Chrome Extensions in Test

Scripts injected by user's extensions:
- Video Downloader PLUS: 86.3 KiB jQuery
- Unknown extension: 28.8 KiB jQuery

**Solution:** Always test in Incognito Mode!

---

## 💡 KEY LEARNINGS FOR FUTURE REFERENCE

### 1. Lighthouse Score Variability
- Scores can vary 20-30% based on machine load
- Check `benchmarkIndex` in JSON report (should be > 2000)
- Always test in Incognito mode
- Close other applications during testing

### 2. CSS Class Conflicts
- Tailwind classes like `block` and `flex` cannot coexist
- ESLint with tailwindcss plugin will catch these
- Always question redundant display classes

### 3. Touch Target Sizing
- Minimum 44x44px for accessibility
- Use `inline-block py-1` or `py-2` for link padding
- Increase `space-y` for vertical spacing between items

### 4. Preconnect Best Practices
- `fonts.googleapis.com` → NO crossorigin (serves CSS)
- `fonts.gstatic.com` → crossorigin="anonymous" (serves fonts)
- `cdnjs.cloudflare.com` → crossorigin="anonymous" (serves assets)

### 5. aria-label for Icon Buttons
- Any button with only icons needs `aria-label`
- Dynamic labels (open/close) improve UX
- Add `aria-expanded` for toggle buttons

---

## ⚠️ NOTES FOR NEXT SESSION

1. **Git Push Pending:** All changes are local only
2. **Test After Deploy:** Run Lighthouse on production URL in Incognito
3. **Consider:** 
   - Self-hosting Font Awesome fonts
   - Implementing lite-youtube-embed
   - Lazy loading Firebase (deferred initialization)

---

## 📈 BUILD VERIFICATION

```bash
npm run build
```

**Result:** ✅ Build successful - 312 static pages generated

No TypeScript errors, no ESLint errors after fixes.
