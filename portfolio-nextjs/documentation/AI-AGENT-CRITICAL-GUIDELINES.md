# 🚨 AI AGENT CRITICAL GUIDELINES 🚨

## 🔴 READ THIS BEFORE ANYTHING ELSE - NO EXCEPTIONS 🔴

**Last Updated:** December 9, 2025  
**Priority:** ABSOLUTE HIGHEST - MANDATORY COMPLIANCE  
**Project:** Vikas Singh Portfolio & Blog Website

---

## ⚠️ PROJECT CONTEXT

**Project Name:** Vikas Singh Portfolio & Blog Website  
**Current Phase:** Migration from Static HTML/CSS to Next.js  
**Developer Profile:** Frontend Developer with Digital Marketing expertise (relies on AI for modern frameworks)

**Critical Understanding:**
- **Old Site:** Static HTML/CSS single-page portfolio (`index.html`, `style.css`, `script.js`)
- **New Site:** Next.js 14.2.18 with TypeScript, Tailwind CSS, App Router
- **Goal:** Modernize portfolio and add dynamic blog functionality
- **Tech Stack:** Next.js 14.2.18, TypeScript, Tailwind CSS, React 18

**Project Started:** December 9, 2025

---

## 🔴 THE GOLDEN RULE: RESEARCH-FIRST METHODOLOGY

### NEVER START WORK WITHOUT CHECKING DOCUMENTATION FIRST

When user reports ANY issue or requests ANY feature:

1. ✅ **Read relevant documentation files** (10-15 min)
   - Check `CURRENT-STATUS.md` for known issues
   - Review `project-overview.md` for context
   - Check `daily-logs/` for recent work history
   - Review `tech-stack-reference.md` for package versions

2. ✅ **Search official documentation** (10-15 min)
   - Next.js: https://nextjs.org/docs
   - Tailwind CSS: https://tailwindcss.com/docs
   - TypeScript: https://www.typescriptlang.org/docs
   - React: https://react.dev/

3. ✅ **Search official repositories for examples** (10 min)
   - Look for production examples
   - Check GitHub issues for similar problems
   - Verify tech stack versions match

4. ✅ **Identify patterns and best practices**

5. ❌ **ONLY THEN propose and implement solution**

**BANNED APPROACH**: Trial-and-error without research = IMMEDIATE FAILURE

---

## 🔴 ABSOLUTE RULES - NO EXCEPTIONS

### 1. RESEARCH BEFORE IMPLEMENTATION

**ALWAYS search official documentation and examples BEFORE writing code.**

❌ **WRONG:** "Let me try this approach and see if it works"  
✅ **RIGHT:** "I've researched Next.js docs and found this is the recommended approach because..."

**Rationale:** Developer relies on AI assistance. Random trial-and-error wastes time and creates technical debt.

---

### 2. DOCUMENTATION IS MANDATORY

**Document EVERY significant change, decision, and implementation.**

**What to Document:**
- ✅ New features added
- ✅ Bugs fixed (with root cause analysis)
- ✅ Architecture decisions
- ✅ Package installations/updates
- ✅ Configuration changes
- ✅ Known issues and workarounds

**Where to Document:**
- `CURRENT-STATUS.md` - Update at end of session
- `daily-logs/YYYY-MM-DD-description.md` - Create per session
- `tech-stack-reference.md` - When changing packages
- `general-development-notes.md` - For knowledge discoveries

❌ **NEVER skip documentation** because you think the change is "small"

---

### 3. NO UNAUTHORIZED CHANGES

**NEVER change, remove, or refactor code without explicit user permission, EXCEPT:**

✅ **Allowed Without Permission:**
- Fixing syntax errors
- Adding missing semicolons/commas
- Correcting obvious typos in comments
- Formatting code (if already formatted inconsistently)

❌ **REQUIRES PERMISSION:**
- Renaming variables/functions/components
- Changing file structure
- Refactoring logic
- Removing "unused" code (it might be used!)
- Updating package versions (except security patches)
- Changing styling approaches
- Modifying existing features

**Why:** User may have specific reasons for current implementation. Always ASK first.

---

### 4. INCREMENTAL CHANGES ONLY

**Make small, testable changes. NEVER giant refactors.**

✅ **Good Workflow:**
1. Implement one component
2. Test it works
3. Move to next component
4. Test again

❌ **Bad Workflow:**
1. Rewrite entire app
2. Hope it works
3. Discover 50 errors
4. Spend hours debugging

**Rule of Thumb:** If a change touches more than 5 files, break it into smaller steps.

---

### 5. RESPONSIVE DESIGN IS MANDATORY

**EVERY component must work on mobile, tablet, AND desktop.**

**Test breakpoints:**
- Mobile: 375px, 414px (iPhone)
- Tablet: 768px, 1024px (iPad)
- Desktop: 1280px, 1920px

**Use Tailwind responsive prefixes:**
```tsx
<div className="text-sm md:text-base lg:text-lg">
  Mobile: small | Tablet: base | Desktop: large
</div>
```

❌ **NEVER assume desktop-only usage**

---

### 6. ACCESSIBILITY IS NON-NEGOTIABLE

**Every feature must be accessible (WCAG 2.1 Level AA minimum).**

**Checklist:**
- ✅ All images have `alt` text
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Sufficient color contrast (4.5:1 for text)
- ✅ Keyboard navigation works
- ✅ Focus states visible
- ✅ ARIA labels where needed

**Tools:**
- Lighthouse accessibility audit
- axe DevTools
- Manual keyboard testing

---

### 7. SEO MUST BE BUILT-IN

**Every page needs proper SEO from day one.**

**Required Elements:**
```tsx
// app/page.tsx or any route
export const metadata = {
  title: "Page Title | Vikas Singh",
  description: "Concise, keyword-rich description (150-160 chars)",
  keywords: ["keyword1", "keyword2", "keyword3"],
  openGraph: {
    title: "Page Title",
    description: "Description for social media",
    images: ["/images/og-image.jpg"],
  },
};
```

**Best Practices:**
- ✅ Unique title for every page
- ✅ Description 150-160 characters
- ✅ Semantic HTML (header, main, section, article)
- ✅ Structured data (JSON-LD) where appropriate
- ✅ Mobile-friendly design (Google Mobile-First Indexing)

---

### 8. NEXT.JS IMAGE COMPONENT RULES

**MANDATORY for all images:**

| Scenario | Required Props | Example |
|----------|---------------|---------|
| Icons, thumbnails (known size) | `width`, `height` | `width={100} height={100}` |
| Hero, backgrounds (responsive) | `fill`, `sizes` | `fill sizes="(max-width: 768px) 100vw, 50vw"` |
| Above-fold images | Add `priority` | `priority` |

**NEVER DO:**
- ❌ `width={0} height={0}` - Causes errors
- ❌ Skip `alt` text on any image
- ❌ Use regular `<img>` tag (use Next.js `<Image>` instead)

---

### 9. PERFORMANCE IS PRIORITY

**Target Lighthouse scores: 90+ for all categories**

**Optimization Checklist:**
- ✅ Use Next.js Image component for all images
- ✅ Lazy load below-the-fold content
- ✅ Minimize JavaScript bundle size
- ✅ Use CSS-in-JS sparingly (prefer Tailwind)
- ✅ Optimize fonts (use `next/font`)
- ✅ Enable image optimization in production

**Test with:**
```bash
npm run build
npm start
# Then run Lighthouse audit
```

---

### 10. SECURITY BEST PRACTICES

**Protect sensitive information and prevent vulnerabilities.**

**Rules:**
- ✅ Use environment variables for API keys
- ✅ Never commit `.env.local` to Git
- ✅ Validate all user inputs
- ✅ Sanitize form data before processing
- ✅ Use HTTPS in production
- ✅ Keep dependencies updated (security patches)

**Environment Variables:**
```bash
# .env.local (never commit this!)
NEXT_PUBLIC_API_KEY=your_key_here
```

**Usage:**
```tsx
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
```

---

## 🚦 WORKFLOW FOR AI AGENTS

### **Starting a New Session:**

```
1. Read AI-AGENT-CRITICAL-GUIDELINES.md (this file) ✅
2. Read CURRENT-STATUS.md ✅
3. Check latest daily log ✅
4. Understand user's request ✅
5. Research official docs (Next.js, Tailwind, etc.) ✅
6. Plan approach and get user approval if major change ✅
7. Implement incrementally ✅
8. Test thoroughly ✅
```

### **During Development:**

```
- Follow best-practices.md guidelines ✅
- Refer to tech-stack-reference.md for package usage ✅
- Test on mobile and desktop ✅
- Validate accessibility ✅
- Check SEO requirements ✅
- Document non-obvious decisions ✅
```

### **Ending a Session:**

```
1. Test all changes thoroughly ✅
2. Update CURRENT-STATUS.md ✅
3. Create daily log entry ✅
4. Document unresolved issues ✅
5. Note clear next steps ✅
6. Verify build works: npm run build ✅
```

---

## ❌ COMMON MISTAKES TO AVOID

### **Mistake #1: Skipping Research**
❌ **Don't:** Jump into coding without checking docs  
✅ **Do:** Spend 15-20 mins researching first

### **Mistake #2: Giant Changes**
❌ **Don't:** Refactor entire codebase at once  
✅ **Do:** Make small, testable incremental changes

### **Mistake #3: Desktop-Only Testing**
❌ **Don't:** Only test on desktop browser  
✅ **Do:** Test on mobile, tablet, and desktop

### **Mistake #4: Ignoring Documentation**
❌ **Don't:** Skip updating docs "because it's minor"  
✅ **Do:** Document every significant change

### **Mistake #5: Assuming Knowledge**
❌ **Don't:** Assume you know how Next.js works  
✅ **Do:** Verify in official docs, especially for new features

### **Mistake #6: Breaking Existing Features**
❌ **Don't:** Change code without understanding its purpose  
✅ **Do:** Ask user before modifying existing functionality

### **Mistake #7: Poor SEO/Accessibility**
❌ **Don't:** Add features without alt text, meta tags, or proper semantics  
✅ **Do:** Build SEO and accessibility in from the start

---

## 🎯 SUCCESS CRITERIA

A change is considered successful when:

1. ✅ It solves the user's problem completely
2. ✅ It works on mobile, tablet, and desktop
3. ✅ It passes Lighthouse audit (90+ scores)
4. ✅ It follows all best practices
5. ✅ It's documented properly
6. ✅ It doesn't break existing features
7. ✅ The build succeeds (`npm run build`)
8. ✅ The user is satisfied with the result

---

## 📚 REFERENCE QUICK LINKS

**Official Documentation:**
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs
- React: https://react.dev/

**Tools:**
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- PageSpeed Insights: https://pagespeed.web.dev/
- Can I Use: https://caniuse.com/

**Internal Docs:**
- `CURRENT-STATUS.md` - Current project state
- `project-overview.md` - Full project context
- `tech-stack-reference.md` - All packages and configs
- `best-practices.md` - Coding standards

---

## 🔴 FINAL REMINDER

**This is not a suggestion. This is MANDATORY.**

Every rule in this document exists because of past mistakes that cost time and created technical debt.

**Follow these guidelines religiously, or the project will suffer.**

---

**Last Updated:** December 9, 2025  
**Next Review:** When major features are added or issues arise
