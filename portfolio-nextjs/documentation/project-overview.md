# Project Overview — Vikas Singh Portfolio & Blog Website

**Prepared by:** AI Development Assistant  
**Date:** December 9, 2025  
**Project Type:** Static HTML/CSS Website Migration to Next.js  
**Status:** Active Development - Initial Setup

---

## 📋 EXECUTIVE SUMMARY

**Project Name:** Vikas Singh Portfolio & Blog Website  
**Owner:** Vikas Singh  
**Type:** Personal Portfolio and Professional Blog  
**Primary Goal:** Migrate existing static single-page portfolio to modern Next.js application with blog functionality

**Old Site Location:** `vikassingh/` folder (HTML/CSS/JS files)  
**New Site Location:** `vikassingh/portfolio-nextjs/` folder (Next.js application)

---

## 🎯 PROJECT GOALS

### Primary Objectives:
1. **Modernize Tech Stack:** Migrate from static HTML/CSS to Next.js with TypeScript
2. **Add Blog Functionality:** Create dynamic blog section with multiple posts
3. **Improve Maintainability:** Component-based architecture for easier updates
4. **Enhance Performance:** Leverage Next.js optimization features
5. **SEO Enhancement:** Server-side rendering and optimized meta tags
6. **Responsive Design:** Mobile-first approach for all devices

### Business Requirements:
- Professional portfolio showcasing skills and experience
- Services offered (Front End Development, Digital Marketing, WordPress/Shopify)
- Project showcase section
- Team members display
- Contact information and form
- Social media links
- Blog section with:
  - Blog listing page
  - Individual blog post pages
  - Click-to-read-more functionality
  - Professional blog card design

---

## 🏗️ TECHNICAL ARCHITECTURE

### Current Tech Stack:

#### **Frontend Framework:**
- **Next.js 14.2.18** (App Router, React 18)
  - Chosen version: Safe pre-December 2025 security issues
  - App Router for modern routing
  - Server Components for performance
- **TypeScript 5** for type safety
- **React 18** for UI components

#### **Styling:**
- **Tailwind CSS 3.4.1** (utility-first CSS framework)
- **PostCSS** with Autoprefixer
- Responsive design principles (mobile-first)
- Custom color scheme (to be extracted from current site)

#### **Development Tools:**
- **ESLint** (code quality)
- **VS Code** (primary IDE)
- **Git** for version control

#### **Future Integrations (Planned):**
- Form handling (EmailJS or similar)
- Analytics (Google Analytics)
- CMS for blog posts (file-based or headless CMS)

---

## 📁 PROJECT STRUCTURE

### Old Static Website:
```
vikassingh/
├── index.html (single-page portfolio)
├── style.css (1146 lines of CSS)
├── script.js (85 lines of JavaScript)
├── images/ (profile pics, team photos)
└── package.json (basic static site config)
```

### New Next.js Application:
```
portfolio-nextjs/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   ├── Journey.tsx
│   │   ├── Projects.tsx
│   │   ├── Team.tsx
│   │   ├── Contact.tsx
│   │   ├── SocialLinks.tsx
│   │   └── Footer.tsx
│   ├── blog/                # Blog section
│   │   ├── page.tsx         # Blog listing page
│   │   └── [slug]/          # Individual blog posts
│   │       └── page.tsx
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles (Tailwind)
├── public/
│   └── images/              # Static assets
├── lib/                     # Utility functions
│   ├── blog.ts              # Blog data management
│   └── types.ts             # TypeScript types
├── documentation/           # Project documentation
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 👤 TARGET AUDIENCE

### Primary Users:
1. **Potential Employers/Clients**
   - Looking to hire frontend developer
   - Need digital marketing services
   - Want WordPress/Shopify development

2. **Professional Network**
   - Colleagues and collaborators
   - Industry professionals
   - Recruiters

3. **Blog Readers**
   - Web development enthusiasts
   - Digital marketing professionals
   - Students and learners

### User Needs:
- Quick overview of skills and experience
- Easy way to contact
- Professional presentation
- Accessible on all devices
- Fast loading times
- Engaging blog content

---

## 🌟 KEY FEATURES

### Current Features (from static site):

#### **1. Hero Section**
- Name and title display
- Animated typing effect (multiple roles)
- Call-to-action button ("Hire me")

#### **2. About Section**
- Profile picture
- Bio and background
- CV download link
- Animated typing for job title

#### **3. Services Section**
- Three service cards:
  - Front End Development (HTML, CSS, JS, React/Next.js)
  - Digital Marketing & Paid Ads (SEO, SMO, SMM, Google/FB ads)
  - WordPress & Shopify Design

#### **4. Skills Section**
- Skills list with progress bars:
  - HTML (90%)
  - CSS (60%)
  - JavaScript (60%)
  - React/Next.js (50%)
  - Digital Marketing (85%)

#### **5. Journey Section (Resume)**
- Education timeline:
  - M.A. Psychology (2020-2022)
  - B.Tech Electrical Engineering (2016-2020)
  - Secondary & Senior Secondary (2013-2014)
- Experience timeline:
  - Phantom Healthcare (March 2021 - Present)
  - Zara International Machines (Jan-March 2021)
  - Freelance work (2017-2020)

#### **6. Projects Section**
- Project cards with:
  - Images
  - Titles
  - Descriptions
  - "Visit Website" / "Read more" links
- Example projects:
  - Ecommerce Shopify website
  - Portfolio sites
  - Blog projects

#### **7. Team Section**
- Team member carousel with:
  - Photos
  - Names
  - Roles/Titles
- Members:
  - Gaurav Mahlawat (Drupal & WordPress)
  - Tejaswi D (Embedded Engineer)
  - Sahil Sharma (Full Stack)
  - Sunil Kumar (Python)
  - Aaqib Pathan (AI-ML)

#### **8. Contact Section**
- Contact information:
  - Location: Faridabad, Delhi(NCR)
  - Phone: +91-9716186925
  - Email: vsingh2110@gmail.com
- Contact form (to be implemented in Next.js)

#### **9. Social Links**
- Icons for:
  - Facebook
  - Twitter
  - LinkedIn
  - GitHub
  - WhatsApp

#### **10. Navigation**
- Sticky navbar with menu
- Smooth scroll to sections
- Mobile hamburger menu
- Scroll-to-top button

### New Features (to be added):

#### **11. Blog Section** ⭐ NEW
- Blog listing page (`/blog`)
  - Grid of blog post cards
  - Each card shows:
    - Featured image
    - Title
    - Excerpt/preview
    - Publication date
    - Read time estimate
    - Tags/categories
  - Pagination or load more
  - Search/filter functionality
- Individual blog post pages (`/blog/[slug]`)
  - Full blog post content
  - Author info
  - Publication date
  - Reading time
  - Social sharing buttons
  - Related posts suggestion
  - Comments section (future)

---

## 🎨 DESIGN PHILOSOPHY

### Visual Style:
- **Professional & Clean:** Portfolio aesthetic
- **Modern:** Contemporary web design trends
- **Readable:** High contrast, clear typography
- **Trustworthy:** Professional color scheme (likely crimson/red accents based on static site)

### User Experience:
- **Fast:** Quick page loads and smooth transitions
- **Intuitive:** Clear navigation and information hierarchy
- **Accessible:** Works for all users, all abilities
- **Responsive:** Perfect on mobile, tablet, desktop

### Brand Identity:
- **Name:** Vikas Singh (Portfo**lio.** branding from static site)
- **Tagline:** Multiple roles (Front End Developer, Digital Marketer, WordPress Designer)
- **Tone:** Professional, competent, approachable
- **Colors:** (To be extracted from existing CSS)

---

## 🔄 MIGRATION STRATEGY

### Phase 1: Project Setup ✅
- Initialize Next.js project
- Configure TypeScript and Tailwind
- Set up folder structure
- Create documentation

### Phase 2: Component Migration 🚧
- Convert HTML sections to React components
- Migrate CSS to Tailwind classes
- Implement interactivity (scroll, animations)
- Test responsive design

### Phase 3: Blog Implementation ⏳
- Design blog data structure
- Create blog listing page
- Create blog post template
- Add sample blog posts
- Implement navigation between posts

### Phase 4: Enhancement ⏳
- Add form functionality
- Implement SEO optimization
- Performance optimization
- Accessibility improvements
- Analytics integration

### Phase 5: Deployment ⏳
- Prepare for production
- Deploy to Vercel
- Configure custom domain (if applicable)
- Set up CI/CD

---

## 📊 SUCCESS METRICS

### Technical Metrics:
- ✅ Lighthouse Performance: 90+
- ✅ Lighthouse Accessibility: 95+
- ✅ Lighthouse SEO: 95+
- ✅ Mobile-friendly test: Pass
- ✅ Core Web Vitals: All green

### Functional Metrics:
- ✅ All sections from static site replicated
- ✅ Blog functionality working perfectly
- ✅ Forms submitting correctly
- ✅ Responsive on all devices
- ✅ Fast page load times (<3s)

### User Experience Metrics:
- ✅ Easy navigation
- ✅ Clear call-to-actions
- ✅ Professional appearance
- ✅ Engaging content
- ✅ Accessible to all users

---

## 🚧 TECHNICAL CHALLENGES

### Challenge 1: Animation Migration
**Issue:** Static site uses jQuery, Typed.js, Owl Carousel  
**Solution:** Replace with React-friendly alternatives (Framer Motion, react-type-animation)

### Challenge 2: Smooth Scroll
**Issue:** jQuery smooth scroll implementation  
**Solution:** Native CSS `scroll-behavior: smooth` or React scroll libraries

### Challenge 3: Blog Data Management
**Issue:** No existing blog content or structure  
**Solution:** File-based blog (Markdown) or JSON structure

### Challenge 4: Form Handling
**Issue:** No backend for form submissions  
**Solution:** EmailJS, Formspree, or Next.js API routes with email service

---

## 📚 DEVELOPER BACKGROUND

**Name:** Vikas Singh  
**Education:**
- M.A. Psychology (2020-2022) - Focus on Cyber Psychology
- B.Tech Electrical Engineering (2016-2020)

**Experience:**
- Frontend Developer & Digital Marketing at Phantom Healthcare (2021-present)
- WordPress Developer at Zara International Machines (Jan-March 2021)
- Freelance web development (2017-2020)

**Skills:**
- HTML, CSS, JavaScript
- React.js, Next.js (learning/improving)
- Tailwind CSS
- WordPress, Shopify
- Digital Marketing (SEO, SMO, SEM, SMM)
- Google Ads, Facebook Ads

**Approach to AI:**
- Uses AI agents for modern framework implementation
- Prefers clear documentation and guidelines
- Values best practices and maintainable code

---

## 🔗 REFERENCES

**Original Site:** `vikassingh/index.html`  
**Documentation:** `portfolio-nextjs/documentation/`  
**GitHub:** @vsingh2110  
**Email:** vsingh2110@gmail.com

---

## 📅 PROJECT TIMELINE

**Start Date:** December 9, 2025  
**Target Completion:** TBD (depends on scope and complexity)

**Milestones:**
- ✅ Week 1: Project setup and documentation
- 🚧 Week 2: Component migration and styling
- ⏳ Week 3: Blog functionality implementation
- ⏳ Week 4: Polish, optimization, and deployment

---

## 💡 NOTES

### Important Considerations:
1. Use Next.js 14.2.18 (safe version, pre-security issues)
2. Tailwind CSS for styling consistency
3. TypeScript for type safety
4. Mobile-first responsive design
5. Accessibility and SEO from day one
6. Comprehensive documentation for future maintenance

### Future Enhancements:
- Comment system for blog posts
- Newsletter subscription
- Search functionality across site
- Admin panel for blog management
- Multi-language support
- Dark mode toggle

---

**Last Updated:** December 9, 2025  
**Status:** Active Development
