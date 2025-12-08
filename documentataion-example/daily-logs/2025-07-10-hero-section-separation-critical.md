# CRITICAL: Hero Section Mobile vs Desktop Separation

## ⚠️ CRITICAL WARNING ⚠️
**NEVER MERGE OR MODIFY THE SEPARATE MOBILE AND DESKTOP HERO SECTIONS**

## Current Implementation Structure

### 1. JSX Structure (HeroSlider.tsx)
```jsx
// MOBILE ONLY (below md breakpoint)
<div className="block md:hidden w-full overflow-x-hidden bg-blue-100">
  {/* Mobile-specific slider implementation */}
</div>

// DESKTOP ONLY (md and above)
<div className="hidden md:flex w-full h-[70vh] flex-row">
  {/* Desktop-specific slider implementation */}
</div>
```

### 2. CSS Structure (globals.css)

#### Desktop Zoom Animation (ONLY for desktop)
```css
@media screen and (min-width: 801px) {
  .hero-slider-container .myslide.active .img-slider {
    transform: scale(1.5, 1.5);
    -webkit-animation-name: zoomin;
    -webkit-animation-duration: 8s;
    animation-name: zoomin;
    animation-duration: 8s;
  }
}
```

#### Mobile Styles (NO zoom animation)
```css
@media screen and (max-width: 800px) {
  .hero-slider-container .img-slider {
    object-fit: cover;
    /* NO ZOOM ANIMATION - INTENTIONAL */
  }
}
```

## Key Rules

1. **Mobile and Desktop are COMPLETELY SEPARATE implementations**
2. **Mobile slider has NO zoom animation** - this is by design
3. **Desktop slider HAS zoom animation** - this is by design
4. **NEVER apply desktop styles to mobile or vice versa**
5. **Each section has its own image sources, animations, and layout logic**

## Common Mistakes to Avoid

❌ **WRONG**: Adding zoom animation to mobile CSS
❌ **WRONG**: Merging mobile and desktop JSX blocks
❌ **WRONG**: Applying desktop styles to mobile breakpoints
❌ **WRONG**: Using same image sources for both mobile and desktop

✅ **CORRECT**: Keep mobile and desktop completely separate
✅ **CORRECT**: Mobile = no zoom, Desktop = zoom animation
✅ **CORRECT**: Different image sources for mobile vs desktop
✅ **CORRECT**: Different CSS animations for each breakpoint

## File Locations
- **Component**: `src/components/HeroSlider.tsx`
- **Styles**: `src/app/globals.css` (hero-slider-container section)
- **Images**: `public/images/slideshow/` (separate mobile and desktop images)

## Testing Requirements
- Test mobile on actual mobile devices (not just browser resize)
- Test desktop on actual desktop screens
- Verify zoom animation only appears on desktop
- Verify mobile has no zoom animation

## Last Updated
2025-01-27 - Created critical documentation to prevent future mistakes

---
**REMEMBER**: Mobile and Desktop hero sections are DIFFERENT CODE with DIFFERENT LOGIC. Never merge or cross-contaminate them. 