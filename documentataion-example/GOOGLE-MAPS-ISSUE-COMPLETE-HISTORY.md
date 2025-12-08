# 🗺️ Google Maps Integration Issue — Complete History & Technical Analysis

**Document Created:** November 29, 2025  
**Purpose:** Comprehensive documentation of ALL attempts, failures, and learnings related to Google Maps integration  
**Priority:** HIGH — Read before attempting ANY map-related fixes  
**Last Issue Occurrence:** November 27, 2025 (Contact Page)

---

## 📋 EXECUTIVE SUMMARY

**The Problem:** Google Maps marker appears at the edge/bottom of the iframe instead of being centered, making the location pin barely visible or completely hidden.

**Key Discovery:** The EXACT SAME embed URL works perfectly on the static HTML site (`phantom-website/contact.html`) but shows the marker incorrectly on the Next.js site. **This confirms the issue is NOT with the embed URL, but with CSS/container styling or some interaction in Next.js/Tailwind.**

**Time Investment:** Approximately 15+ hours across multiple sessions (May 2024 - November 2025)

**Current Status:** ❌ UNRESOLVED — Workarounds exist but no clean fix

---

## 🔍 THE CORE PROBLEM

### What We Expected
- Google Maps iframe displays with:
  - "Phantom Healthcare Pvt Ltd" business name visible
  - Red marker pin centered in the viewable area
  - Correct location at Plot 51, Sector 27C, Near NHPC Chowk, Faridabad

### What Actually Happens (in Next.js)
- Marker appears at the very bottom or edge of the iframe
- User can barely see the location marker
- Sometimes only empty map area is visible
- Business name label may be cut off

### Why This Is Confusing
The static HTML site uses this EXACT iframe code:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23594.600297204677!2d77.29099839249344!3d28.46875377374462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce746b47731c5%3A0x696a695f7e4c3ded!2sPhantom%20Healthcare%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1663418936010!5m2!1sen!2sin"
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```
**AND IT WORKS PERFECTLY.** The marker is centered, the business name is visible.

But the same URL in Next.js shows the marker at the edge.

---

## 📚 COMPLETE TIMELINE OF ATTEMPTS

### Session 1: May 21, 2024 — Footer Refactor
**File:** `docs/daily-logs/2024-05-21-footer-refactor.md`

**What Was Tried:**
1. **Standard iframe embed** — Basic functionality but marker at wrong position
2. **CSS transforms** — `transform: translateY(-20px)` — Partial success, inconsistent across devices
3. **Oversized iframe approach**:
   ```jsx
   <iframe
     className="absolute w-[200%] h-[200%] border-0"
     style={{
       left: '-50%',   // Centers the marker pin
       top: '-35%',    // Shows company name at top
     }}
   />
   ```
   This was the ONLY semi-working approach.

**Lesson Learned:** The issue is iframe positioning within container, NOT coordinates or embed URL.

---

### Session 2: July 11, 2025 — Dedicated Google Maps Integration Day
**File:** `docs/daily-logs/2025-07-11-google-maps-integration.md`

**Time Invested:** ~6 hours (should have been 1 hour)

**What Was Tried:**

#### Attempt 1: Standard Google Maps Embed
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=..."
  width="100%" 
  height="300"
  style="border:0;" 
  loading="lazy">
</iframe>
```
**Result:** ❌ Basic functionality but marker positioning issues

#### Attempt 2: Custom GMap.tsx Component with JavaScript API
- Created separate React component using Google Maps JavaScript API
- Features attempted: Custom marker positioning, Zoom level control, Responsive container
- **Result:** ❌ API key configuration issues, marker still not positioned correctly

#### Attempt 3: CSS Transform Attempts
```css
transform: translateY(-20px);
```
**Result:** ⚠️ Partial success but not consistent across devices

#### Attempt 4: Multiple Iframe Parameters
- Tried different embed URLs with various parameters
- Attempted zoom level adjustments (`z=15`, `z=16`, `z=17`)
- Tested different map types (roadmap, satellite, etc.)
- **Result:** ❌ No significant improvement

**Technical Debt Created:**
- Multiple commented-out attempts in code
- Inconsistent styling across components
- Missing error handling

**Key Takeaways:**
- Simple-looking features can hide complex implementation challenges
- Google Maps iframe has severe limitations on internal positioning control
- Need to research iframe limitations BEFORE attempting fixes

---

### Session 3: July 21, 2025 — Critical Incident Day
**File:** `docs/daily-logs/2025-07-21-work-log.md`

**CRITICAL ERROR:** AI agent modified footer map without authorization while trying to fix YouTube embed.

**What Happened:**
1. User requested YouTube embed fix
2. AI agent also (without permission) modified the footer map
3. Footer map completely broke — showed nothing
4. User anger: "what did you do to the map in footer -- it is not loading"

**Fixes Attempted:**
1. **Simplified to basic iframe embed**:
   ```jsx
   <iframe 
     src="https://www.google.com/maps/embed?pb=..."
     width="100%" 
     height="100%"
     style={{ border: 0 }}
   />
   ```
   
2. **Added map location details** — Updated URL with proper parameters:
   ```
   &t=m&z=16&output=embed
   ```

3. **CSP updates** — Added `maps.googleapis.com` to Content Security Policy

**Result:** Map started loading again, but marker positioning issue persisted.

**STRICT WARNING CREATED:** Never modify components not mentioned in user's request.

---

### Session 4: November 24, 2025 — CSP & Map Fixes
**File:** `docs/daily-logs/2025-11-24-hero-slider-refinement.md`

**Problems Found:**
- "DeletedApiProjectMapError" with API-based implementation
- Map pin showing wrong location (generic area instead of specific business)

**Solution Applied:**
- Completely replaced complex API-based code with simple `<iframe>` embed
- Updated embed URL to use specific "Phantom Healthcare IND Private Limited" place ID
- Changed to "Normal" (Roadmap) view instead of Satellite

**CSP Updates:**
- Added `https://maps.googleapis.com` to `script-src` and `connect-src`
- Added `https://unpkg.com` to CSP
- Added worker-src and img-src for blob support

---

### Session 5: November 27, 2025 — Contact Page Creation
**File:** `docs/daily-logs/2025-11-27-structure-refactor.md`

**What Was Tried:**
1. Different embed URLs
2. Removed `overflow-hidden` class
3. Removed `rounded` class  
4. Changed container heights
5. Various CSS combinations

**Result:** ❌ Map displays but marker positioning remains problematic

**Current Implementation (Contact Page):**
```tsx
<section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
    <div className="h-[300px] sm:h-[350px] md:h-[400px] rounded-xl shadow-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23594.600297204677!2d77.29099839249344!3d28.46875377374462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce746b47731c5%3A0x696a695f7e4c3ded!2sPhantom%20Healthcare%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1663418936010!5m2!1sen!2sin"
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>
```

---

## 🔬 TECHNICAL ANALYSIS

### Comparison: Static Site vs Next.js

#### Static Site Container CSS (contact.css)
```css
.contact-map-box {
  text-align: center;
  height: 50vh;
}

.contact-map-box iframe {
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin: auto;
}
```

#### Static Site Footer Map CSS (style.css)
```css
.map-box {
  width: auto;
  height: 35vh;
  margin-left: 2em;
  margin-top: 2rem;
}

.map-box iframe {
  width: 90%;
  height: 100%;
  object-fit: cover;
}
```

#### Key Differences:
1. **Static site uses `height: 50vh`** — viewport-based height
2. **Static site uses `object-fit: cover`** — may affect how iframe content is displayed
3. **No `rounded` class** on static site
4. **No `overflow-hidden`** on static site container
5. **Static site has `margin: auto`** on iframe

### Potential Root Causes (Theories)

1. **`overflow-hidden` Clipping**
   - Tailwind's `overflow-hidden` may be clipping the iframe content differently than expected
   - The marker may be rendered at a position that gets clipped

2. **`rounded` Border Radius Interaction**
   - Border radius on container may interact with iframe in unexpected ways
   - May be creating a different viewport for the iframe

3. **Fixed Height vs Viewport Height**
   - Static site uses `vh` units, Next.js uses fixed pixel heights
   - This may affect how Google Maps calculates the visible area

4. **Container Padding/Margin**
   - Next.js has padding/margin on outer containers
   - May shift the iframe's effective viewport

5. **Next.js/React Rendering**
   - React may be mounting the iframe differently
   - Hydration may affect iframe positioning

6. **Tailwind CSS Specificity**
   - Global Tailwind styles may be overriding expected iframe behavior
   - `object-cover` class on iframe may behave differently

---

## ✅ WHAT HAS WORKED (PARTIALLY)

### The Oversized Iframe Hack
From May 2024 — the only approach that showed the marker:
```jsx
<div className="w-full md:w-64 h-80 rounded-lg overflow-hidden shadow-lg relative">
  <iframe
    src="[EMBED_URL]"
    className="absolute w-[200%] h-[200%] border-0"
    style={{
      left: '-50%',   // Centers the marker pin
      top: '-35%',    // Shows company name at top
    }}
  />
</div>
```

**How It Works:**
- Makes iframe 2x larger than container
- Uses negative positioning to show the "center" of the map
- Container clips the oversized iframe

**Downsides:**
- Hacky solution
- May not work on all screen sizes
- Requires manual adjustment per container size
- Difficult to maintain

---

## ❌ WHAT DEFINITELY DOES NOT WORK

| Approach | Why It Failed |
|----------|---------------|
| Changing embed URL zoom level | URL is correct — static site proves this |
| Using different Google Maps URLs | Same URL works on static site |
| Google Maps JavaScript API | Complex setup, API key issues, same positioning problem |
| Simple CSS transforms | Inconsistent across devices |
| Removing `rounded` class alone | No effect |
| Removing `overflow-hidden` alone | No effect |
| Changing container heights | No effect on marker position |
| Different viewport height values | No consistent improvement |

---

## 🎯 RECOMMENDED INVESTIGATION STEPS

When approaching this problem again, follow this order:

### Step 1: Create Minimal Test Case
Create a completely bare-bones test page:
```tsx
// test-map/page.tsx
export default function TestMap() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23594.600297204677!2d77.29099839249344!3d28.46875377374462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce746b47731c5%3A0x696a695f7e4c3ded!2sPhantom%20Healthcare%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1663418936010!5m2!1sen!2sin"
        style={{ border: 'none', width: '100%', height: '100%' }}
      />
    </div>
  );
}
```
If this works → the issue is Tailwind/global CSS
If this fails → the issue is Next.js rendering itself

### Step 2: Compare with Static Site
Open both sites side by side in browser DevTools:
1. Static site: `phantom-website/contact.html`
2. Next.js site: `/contact`

Compare:
- Computed styles on container
- Computed styles on iframe
- Any inherited CSS rules
- Box model differences

### Step 3: Check Global CSS
Look in `globals.css` for any rules affecting iframes:
- `iframe { ... }`
- Any utility classes that might affect positioning
- Any resets that might be applied

### Step 4: Test Without Tailwind Classes
Create a version with ONLY inline styles (no Tailwind):
```tsx
<div style={{ 
  width: '100%', 
  height: '400px',
  position: 'relative',
  // NO Tailwind classes at all
}}>
  <iframe 
    style={{ 
      width: '100%', 
      height: '100%', 
      border: 'none' 
    }}
  />
</div>
```

### Step 5: Consider Alternatives
If iframe approach cannot be fixed:
1. **Static Map Image** with "View larger map" link
2. **Google Maps JavaScript API** (complex but full control)
3. **`@react-google-maps/api`** library
4. **Simple address card** with Google Maps link

---

## 📝 EMBED URLS REFERENCE

### Working Static Site URL (REFERENCE)
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23594.600297204677!2d77.29099839249344!3d28.46875377374462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce746b47731c5%3A0x696a695f7e4c3ded!2sPhantom%20Healthcare%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1663418936010!5m2!1sen!2sin
```

### Address-Based URL (Alternative)
```
https://maps.google.com/maps?q=Plot+No.+51,+Sector+27C,+Near+NHPC+Chowk,+Main+Mathura+Road,+Faridabad,+Haryana+121003&t=m&z=15&output=embed&iwloc=near
```

### URL Parameters Explained
- `!3d23594.600...` — Zoom level and view distance
- `!2d77.29...` — Longitude
- `!3d28.46...` — Latitude
- `0x390ce746b47731c5%3A0x696a695f7e4c3ded` — Place ID for Phantom Healthcare
- `!4v1663418936010` — Timestamp for cache busting
- `&t=m` — Map type (m = roadmap)
- `&z=15` — Zoom level
- `&output=embed` — Output format

---

## 🚫 DO NOT REPEAT THESE MISTAKES

1. **DO NOT** spend hours changing embed URL parameters — the URL is correct
2. **DO NOT** try random zoom levels — this is not the issue
3. **DO NOT** modify map code without creating a test case first
4. **DO NOT** touch footer map when fixing contact page map (or vice versa)
5. **DO NOT** implement complex JavaScript API solution before exhausting CSS fixes
6. **DO NOT** assume the issue is with Google Maps — the static site proves the URL works

---

## 📁 FILES INVOLVED

| File | Purpose | Status |
|------|---------|--------|
| `src/app/contact/page.tsx` | Contact page with main map | ❌ Has issue |
| `src/components/features/GMap.tsx` | Footer map component | ❌ Has issue |
| `src/components/layout/Footer.tsx` | Uses GMap component | Container styling |
| `phantom-website/contact.html` | Static reference (WORKS) | ✅ Reference |
| `phantom-website/css_files/contact.css` | Static CSS (WORKS) | ✅ Reference |
| `src/app/globals.css` | Global styles | Check for iframe rules |
| `middleware.ts` | CSP settings | Maps allowed |

---

## 🎯 FINAL RECOMMENDATIONS

### For Quick Fix (Workaround)
Use the oversized iframe hack with careful positioning:
```jsx
<div className="relative w-full h-[400px] overflow-hidden">
  <iframe
    src="[URL]"
    className="absolute w-[150%] h-[150%]"
    style={{ 
      top: '-25%', 
      left: '-25%',
      transform: 'scale(1)'
    }}
  />
</div>
```
Test and adjust percentages as needed.

### For Proper Fix
1. Create minimal test case first
2. Compare CSS differences with static site
3. Check for global iframe styles
4. Test without Tailwind classes
5. Document findings before implementing

### For Alternative Approach
Consider using a static map image with a "View on Google Maps" link:
```jsx
<a href="https://goo.gl/maps/2fdRZT8hEBVK4cni9" target="_blank">
  <Image 
    src="/images/map-screenshot.png" 
    alt="Phantom Healthcare Location"
    fill
  />
  <span>View on Google Maps →</span>
</a>
```

---

## 📊 TIME INVESTMENT LOG

| Date | Session | Hours | Result |
|------|---------|-------|--------|
| May 21, 2024 | Footer Refactor | 2-3h | Hacky workaround |
| July 11, 2025 | Dedicated Maps Day | 6h | No clean solution |
| July 21, 2025 | Unauthorized Fix | 2h | Map broke then fixed |
| Nov 24, 2025 | CSP & Map Updates | 1h | API errors fixed |
| Nov 27, 2025 | Contact Page | 2h | Issue persists |
| **TOTAL** | | **~15h** | **No permanent fix** |

---

**Document Status:** Living document — update after each map-related session  
**Next Review:** When map issue is revisited  
**Owner:** Project AI Assistants  

---

> **CRITICAL REMINDER:** Read this entire document before attempting ANY map fixes. The solution is likely a CSS difference between static and Next.js sites, NOT the embed URL.
