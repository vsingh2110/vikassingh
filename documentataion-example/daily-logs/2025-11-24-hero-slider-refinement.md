# Work Log: November 24, 2025

**Session:** Hero Slider Refinement & Sidebar Fixes
**Time:** Morning
**Status:** Active Development

## 🎯 SESSION GOALS
1. Fix the "touching" issue where the Hero Sidebar touches the slider image on desktop.
2. Verify and refine Hero Slider text styling and animations (pixel-perfect match).
3. Update documentation to reflect changes.

## ✅ WORK COMPLETED

### **1. Hero Sidebar "Touching" Fix**
**Issue:** The sidebar content was touching the slider image on desktop because the inner wrapper was forced to `320px` width inside a `320px` container, ignoring padding.
**Solution:** 
- Modified `src/components/HeroSideSection.tsx`: Changed `xl:w-[320px]` to `xl:w-full`.
- This allows the component to respect the parent container's layout and padding, creating the necessary visual separation.

### **2. Hero Slider Styling Refinements**
**Issue:** 
- `letter-spacing` was using `rem` units (`0.1rem`) instead of `px`.
- Animation duration for `zoomin` was inconsistent (`8s` vs `40s` in webkit).
**Solution:**
- Updated `src/app/globals.css`:
  - Changed `.hero-slider-container .txt1 p` letter-spacing to `1px`.
  - Changed `.hero-slider-container .img-slider` animation-duration to `40s` to match the static site's slow zoom effect.

### **3. Top Block Responsiveness Fix**
**Issue:** 
- **1024px-1279px:** Unused gap on sides.
- **1280px-1535px:** Needed breathing room from edges.
- **1920px+:** Content looked "horrible" (too small/narrow) because it was capped at `max-w-7xl` (1280px).
**Solution:**
- Modified `src/components/TopBlock.tsx`:
  - Changed container width to `max-w-[95%]`.
  - Added `2xl:max-w-[1800px]` to allow scaling on large screens.
  - Increased padding (`px-4 md:px-6 lg:px-8`) to prevent sticking to edges.
  - Made gaps responsive (`gap-4 md:gap-6 lg:gap-8 xl:gap-10`) to maintain proportions.

### **4. Top Block Visual Enhancements**
**Issue:** User requested stronger shadow, card-like effect, larger icons, and specific hover behavior (scale up 5% + darker shadow).
**Solution:**
- Modified `src/components/TopBlock.tsx`:
  - **Shadow:** Increased base shadow to `shadow-[0_0_20px_rgba(0,0,0,0.15)]`.
  - **Hover:** Changed to `hover:scale-105` (5% scale) and `hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]` (darker shadow).
  - **Icons:** Increased size from `w-20 h-20` to `w-24 h-24` (mobile) and `w-24 h-24` to `w-28 h-28` (desktop).

### **5. Hero Slider Animation Speed**
**Issue:** Desktop zoom animation was too slow (40s). User requested faster speed matching mobile.
**Solution:**
- Modified `src/app/globals.css`:
  - Changed `.hero-slider-container .img-slider` animation duration from `40s` to `10s`.
  - This provides a much faster, noticeable zoom effect on all devices (since mobile inherits this class unless overridden, and 10s is a standard "active" zoom speed).

### **6. Top Block Further Refinements**
**Issue:** User requested even stronger visual cues:
- Icons "a bit more big"
- "More box shadow behind" (base state)
- "More darker shadow on hover"
- "A bit more scale on hover"
**Solution:**
- Modified `src/components/TopBlock.tsx`:
  - **Icons:** Increased to `w-28 h-28 md:w-32 md:h-32` (was `w-24/28`).
  - **Base Shadow:** Increased to `shadow-[0_0_25px_rgba(0,0,0,0.2)]`.
  - **Hover Shadow:** Increased to `shadow-[0_0_45px_rgba(0,0,0,0.3)]`.
  - **Hover Scale:** Increased to `scale-110` (10% zoom).

### **7. Hero Slider Video Slide Clarification**
**Note:** User expressed concern about the "Complete Turnkey Solutions" video slide being affected by image animations.
**Verification:** Confirmed that the zoom animation in `globals.css` targets `.img-slider` class only. The video slide uses `.video-bg` class which does not have the zoom animation. The video slide remains untouched and safe.

### **8. About Us Section Implementation**
**Issue:** 
- User reported past issues with YouTube embedding ("hit and trial").
- Current implementation in `page.tsx` used a placeholder video (Rick Astley) and inline styles for background image (which was flagged as problematic in past logs).
**Solution:**
- **Video ID:** Retrieved correct video ID `xmB3MDYaOMU` from static website `index.html`.
- **Component:** Created new `src/components/AboutSection.tsx` to encapsulate the section.
- **Background Image:** Replaced inline styles with Next.js `<Image>` component using `fill` and `object-cover` for better performance and reliability.
- **YouTube Embed:** Used the existing robust `YouTubeEmbedComponent` (iframe-based) with the correct video ID.
- **Refactor:** Updated `src/app/page.tsx` to use the new `AboutSection` component.

### **9. YouTube Embed Fixes (Privacy & UI)**
**Issue:** 
- User reported "80% black screen", "no autoplay", and "data usage" issues.
- User requested NO controls, NO heading, and NO interaction.
- User specifically asked to prevent "website data" usage (cookies).
**Solution:**
- Modified `src/components/YouTubeEmbed.tsx`:
  - **Privacy:** Switched domain to `www.youtube-nocookie.com`.
  - **Autoplay:** Added `autoplay=1&mute=1` (mute is required for autoplay).
  - **Loop:** Added `loop=1&playlist=${videoId}`.
  - **UI Cleanup:** Added `controls=0`, `modestbranding=1`, `rel=0`, `iv_load_policy=3` (hide annotations).
  - **No Interaction:** Added `pointer-events-none` class to iframe to prevent clicking/pausing.
  - **Hide Title:** Added `scale-[1.35]` to the iframe. This zooms in slightly to crop out the top title bar and bottom controls, leaving only the clean video content.
  - **Container:** Ensured `overflow-hidden` clips the zoomed iframe.

### **10. Content Security Policy (CSP) Updates**
**Issue:** 
- Console errors reported blocking of `youtube-nocookie.com`, `vercel.live`, `maps.googleapis.com`, and `responsivetesttool.com`.
- User reported "Framing ... violates CSP" and "Loading script ... violates CSP".
**Solution:**
- Modified `middleware.ts`:
  - Added `https://www.youtube-nocookie.com` to `frame-src`.
  - Added `https://vercel.live` to `script-src`, `frame-src`, and `connect-src`.
  - Added `https://maps.googleapis.com` and `https://unpkg.com` to `script-src` and `connect-src`.
  - Added `frame-ancestors 'self' https://responsivetesttool.com` to allow embedding in the testing tool.
  - Added `worker-src 'self' blob:;` and `img-src ... blob:` for Google Maps performance.
  - Added Firebase Auth domains (`identitytoolkit`, `securetoken`, `firebaseinstallations`) to `connect-src`.
- **Critical Fix:** Removed conflicting `Content-Security-Policy` header from `next.config.js` which was overriding the middleware settings.

### **11. Google Maps Fixes**
**Issue:** 
- "DeletedApiProjectMapError" with the API-based map implementation.
- Map pin was showing the wrong location (generic area instead of specific business).
- User requested to switch to a simple iframe embed to avoid API complexity.
**Solution:**
- Modified `src/components/GMap.tsx`:
  - Completely replaced the complex API-based code with a simple `<iframe>` embed.
  - Updated the embed URL to use the specific "Phantom Healthcare IND Private Limited" place ID and coordinates provided by the user.
  - Ensured the map view is "Normal" (Roadmap) instead of Satellite as per user request.
  - Fixed a syntax error (orphaned code) that caused a build failure.

### **12. YouTube Embed Polish**
**Issue:** 
- User reported "more than half of screen is black" with the previous scale.
**Solution:**
- Modified `src/components/YouTubeEmbed.tsx`:
  - Increased scale to `1.5` (150%).
  - Added centering classes: `top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`.
  - This ensures the video zooms from the center, effectively cropping black bars on all sides while keeping the subject visible.

## 📝 NEXT STEPS
- Verify the Map Pin location on the live site (user reported it might still be slightly off).
- Create missing pages: `privacy-policy`, `terms-and-conditions`, `faqs`.
- Monitor for any remaining CSP violations.
