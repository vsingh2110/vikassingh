# SEO Reference Guide - India Version

**Created:** November 30, 2025  
**Last Updated:** December 7, 2025 (Speakable Schema Implementation Complete)  
**Purpose:** Complete SEO & Development Guidelines for Phantom Healthcare India website  
**Why Now:** Fix SEO on initial pages before scaling to 100+ pages

---

## 🎯 WHY DOCUMENT SEO EARLY?

> "If we do SEO at the end, we'll have hundreds of pages to fix. If we do it now and successfully implement for initial pages, the rest of the website will be easy."

This document captures all SEO learnings from the Nov 29-30, 2025 sessions so future pages can be built correctly from the start.

---

## 📚 TABLE OF CONTENTS

1. [🤖 AI SEO / GEO / AEO (NEW!)](#-ai-seo--geo--aeo-generative--answer-engine-optimization)
2. [Schema.org Types Used](#-schemaorg-types-used)
3. [Meta Tags Reference](#-meta-tags-reference)
4. [Next.js Image Best Practices](#-nextjs-image-best-practices)
5. [Accessibility Guidelines](#-accessibility-guidelines)
6. [New Page Development Checklist](#-new-page-development-checklist)
7. [Common Pitfalls & Mistakes](#-common-pitfalls--mistakes)
8. [Validation Tools](#-validation-tools)
9. [Non-Relevant Warnings](#-non-relevant-warnings-ignore-these)
10. [Lighthouse Audit Results](#-lighthouse-audit-results-november-30-2025)

---

## 🤖 AI SEO / GEO / AEO (Generative & Answer Engine Optimization)

**Added:** December 4, 2025  
**Why This Matters:** Search is evolving from "list of links" to "direct answers." AI systems like ChatGPT, Google AI Overviews, Perplexity, Claude, and Gemini are now synthesizing answers from the web. Your content needs to be cited in these AI-generated answers, not just ranked on Google.

---

### 📖 TERMINOLOGY EXPLAINED

| Term | Full Name | Meaning |
|------|-----------|---------|
| **GEO** | Generative Engine Optimization | Optimizing content to appear in AI-powered search engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) |
| **AEO** | Answer Engine Optimization | Making content visible and useful to AI systems that deliver direct answers (voice assistants, LLMs, AI search) |
| **AI SEO** | AI-focused SEO | Umbrella term covering GEO + AEO + traditional SEO for AI visibility |
| **LLM** | Large Language Model | The AI models (GPT-4, Claude, Gemini) that power these systems |
| **AI Overviews** | Google's AI Answers | Google's AI-generated summaries at the top of search results |
| **Zero-Click Search** | No website click needed | When AI answers the query directly, user doesn't click any website |

**Key Insight:** GEO and AEO are NOT replacements for traditional SEO—they are **extensions** of SEO for the AI era.

---

### 🎯 WHY GEO/AEO MATTERS FOR PHANTOM HEALTHCARE

| Traditional SEO | AI SEO (GEO/AEO) |
|-----------------|------------------|
| Rank #1 on Google | Be **mentioned/cited** in AI answers |
| User clicks link to your site | User gets answer with your brand name (may not click) |
| Compete for top 10 spots | Compete to be **part of the answer itself** |
| Focus on keywords | Focus on clear, quotable statements |
| Optimize meta tags | Optimize for AI extraction and trust signals |

**Business Impact:**
- ✅ If AI mentions "Phantom Healthcare" for "best refurbished MRI India" → Brand exposure 24/7
- ❌ If AI doesn't mention you → You're invisible to AI users

---

### 🔧 TECHNICAL IMPLEMENTATION FOR AI VISIBILITY

#### 1. Content Structure for AI Extraction

AI systems extract and cite content that is:
- **Clear and declarative** (not vague or marketing fluff)
- **Structured with Q&A format** where appropriate
- **Contains statistics, quotes, and specific data**
- **Uses proper headings hierarchy**

```markdown
<!-- ❌ WRONG - Vague marketing copy AI can't use -->
"We are a leading provider of world-class medical imaging solutions 
with decades of experience serving India's finest hospitals."

<!-- ✅ CORRECT - Clear, quotable, data-rich content -->
"Phantom Healthcare has installed over 150 refurbished MRI and CT 
scanners across India since 2011. Our 12-month warranty covers 
all parts and labor."
```

#### 2. FAQ Schema for AI Answers ✅ IMPLEMENTED Dec 5, 2025

AI systems LOVE FAQ content. We have implemented FAQ schemas on all 3 main pages:

**Existing FAQ Components (in `src/components/seo/JsonLd.tsx`):**
```tsx
import { 
  HomeFAQJsonLd,     // 8 FAQs - products, warranty, services
  AboutFAQJsonLd,    // 5 FAQs - company, leadership, certifications
  ContactFAQJsonLd   // 6 FAQs - contact, demos, support
} from '@/components/seo/JsonLd';

// Usage in page:
<HomeFAQJsonLd />
```

**Visible FAQ Component (in `src/components/ui/FAQSection.tsx`):**
```tsx
import FAQSection from '@/components/ui/FAQSection';

<FAQSection
  title="Frequently Asked Questions"
  subtitle="Common questions about our products"
  faqs={[
    { question: "...", answer: "..." }
  ]}
/>
```

**For NEW pages, create a new FAQ schema:**
```tsx
export function YourPageFAQJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the warranty on refurbished MRI machines from Phantom Healthcare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare provides a 12-month comprehensive warranty on all refurbished MRI machines, covering parts and labor."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
```

**⚠️ CRITICAL: Sync visible FAQs with JSON-LD FAQs!**
- Home: 8 visible FAQs = 8 in JSON-LD ✅
- About: 5 visible FAQs = 5 in JSON-LD ✅
- Contact: 6 visible FAQs = 6 in JSON-LD ✅

#### 3. Speakable Schema (Voice Assistants) ✅ IMPLEMENTED Dec 7, 2025

For voice search (Alexa, Google Assistant, Siri):

```tsx
// src/components/seo/JsonLd.tsx - HomeSpeakableJsonLd, AboutSpeakableJsonLd, ContactSpeakableJsonLd
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Page Title for Voice Assistants",
  "url": "https://phantomhealthcare.com/page-url",  // ⚠️ MUST match actual page URL!
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"]  // Use ONLY universal selectors that exist on all pages
  },
  "mainEntity": {
    "@type": "MedicalBusiness",  // or Organization, LocalBusiness
    "name": "Phantom Healthcare",
    "description": "Clear, quotable description for voice assistants.",
    "telephone": "+91-9899963601",
    "email": "biz@phantomhealthcare.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 51, Sector 27C",
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "postalCode": "121003",
      "addressCountry": "IN"
    }
  }
}
```

**⚠️ CRITICAL Speakable Rules (Learned Dec 7, 2025):**
1. **URL must match page** - Don't cross-reference URLs between pages!
2. **cssSelector must exist** - Only use `["h1", "h2"]` not custom classes like `.hero-text`
3. **Include address** - MedicalBusiness/LocalBusiness require PostalAddress
4. **Test with Rich Results** - Google validates the schema

**Currently Implemented On:**
- ✅ Home: `HomeSpeakableJsonLd` → `https://phantomhealthcare.com`
- ✅ About: `AboutSpeakableJsonLd` → `https://phantomhealthcare.com/about`
- ✅ Contact: `ContactSpeakableJsonLd` → `https://phantomhealthcare.com/contact`

#### 4. Server-Side Rendering (Already Done ✅)

**Good News:** Next.js with SSR is PERFECT for AI visibility!

- ❌ Client-side JS-only content = AI crawlers may not see it
- ✅ SSR/SSG content = Fully visible to AI crawlers

Our Next.js setup already handles this correctly.

---

### 📝 CONTENT OPTIMIZATION FOR AI

#### Write "AI-Friendly" Content

| Traditional Content | AI-Optimized Content |
|---------------------|---------------------|
| Long-winded intros | Lead with the answer first |
| Subjective claims | Specific facts and numbers |
| Marketing jargon | Clear, plain language |
| Buried key info | Key info in first paragraph |
| Walls of text | Bullet points, tables, lists |

#### Example: Product Page Content

```markdown
<!-- ❌ BEFORE - Hard for AI to extract -->
Welcome to our world-class collection of medical imaging equipment. 
At Phantom Healthcare, we pride ourselves on providing exceptional 
service and cutting-edge technology to meet all your diagnostic needs.
Our team of experts is dedicated to helping you find the perfect solution...

<!-- ✅ AFTER - AI can easily quote this -->
## Refurbished GE Signa 3.0T MRI Scanner

**Price:** Contact for quote  
**Warranty:** 12 months comprehensive  
**Installation:** Included  
**Availability:** In stock  

The GE Signa 3.0T MRI Scanner is a high-field imaging system ideal for 
neurology, orthopedic, and cardiac imaging. This refurbished unit has 
been fully reconditioned by Phantom Healthcare's certified engineers.

### Key Specifications:
- Field Strength: 3.0 Tesla
- Bore Size: 60cm
- Gradient Strength: 50 mT/m
- Year of Manufacture: 2018-2020
```

---

### 🌐 BRAND AUTHORITY SIGNALS FOR AI

AI systems determine trustworthiness based on:

1. **Wikipedia Presence** - Having a Wikipedia page significantly increases AI visibility
2. **Third-Party Mentions** - Being cited on industry websites, news, directories
3. **Social Proof** - Consistent presence across LinkedIn, YouTube, Facebook
4. **E-E-A-T Signals** - Experience, Expertise, Authoritativeness, Trust
5. **Consistent NAP** - Same Name, Address, Phone across all platforms

**Action Items for Phantom Healthcare:**

| Platform | Action | Priority |
|----------|--------|----------|
| Wikipedia | Create/improve Wikipedia article | HIGH |
| LinkedIn | Regular company posts with expertise | HIGH |
| YouTube | Machine demo videos with transcripts | MEDIUM |
| Industry Directories | IndiaMart, TradeIndia, Sulekha | HIGH |
| Google Business Profile | Complete all fields, add photos | HIGH |
| Press/News | PR for installations, awards | MEDIUM |

---

### 📊 AEO vs SEO COMPARISON

| Aspect | Traditional SEO | Answer Engine Optimization (AEO) |
|--------|-----------------|----------------------------------|
| **Primary Goal** | Rank pages in search results | Be cited in AI answers |
| **Content Focus** | Comprehensive long-form | Concise, quotable answers |
| **Query Targeting** | High-volume keywords | Question-based, informational |
| **Technical Focus** | Meta tags, internal links | Schema markup, speakable content |
| **Measurement** | Rankings, clicks, impressions | Citations, mentions in AI responses |
| **User Journey** | User clicks to your site | Zero-click brand exposure |
| **Key Schema** | Article, Product, LocalBusiness | FAQPage, HowTo, Speakable |

---

### 🔍 MONITORING AI VISIBILITY

**Tools to Track AI Mentions:**

| Tool | Purpose | Cost |
|------|---------|------|
| Semrush AI Visibility Toolkit | Track brand mentions in ChatGPT, Perplexity | Paid |
| Ahrefs Brand Radar | Monitor AI search visibility | Paid |
| Manual Testing | Ask ChatGPT/Perplexity about your industry | Free |

**Manual Testing Protocol:**

Test these queries in ChatGPT, Perplexity, and Google AI:

```
"Best refurbished MRI machines in India"
"Where to buy refurbished CT scanner Delhi"
"Phantom Healthcare reviews"
"Medical imaging equipment dealers India"
"Refurbished Siemens MRI price India"
```

Track whether Phantom Healthcare is mentioned in responses.

---

### ✅ AI SEO CHECKLIST FOR NEW PAGES

- [x] **Lead with key information** (don't bury the lede) ✅
- [x] **Add FAQ section** with common questions about the topic ✅ (Dec 5)
- [x] **Include specific data** (numbers, dates, specs, prices) ✅
- [x] **Use declarative sentences** that can be quoted directly ✅
- [x] **Add FAQPage schema** for question-answer content ✅ (Dec 5)
- [x] **Use tables and lists** for specifications and comparisons ✅
- [ ] **Include expert quotes** or testimonials with attribution
- [x] **Ensure SSR/SSG** (Next.js handles this automatically) ✅
- [x] **Implement Speakable schema** for voice search ✅ (Dec 7)
- [ ] **Test in Incognito** with ChatGPT/Perplexity

---

### 🚀 FUTURE-PROOFING FOR AI SEARCH

**Trends to Watch:**

1. **Personalized AI Answers** - AI will tailor responses to user context
2. **Deeper Schema Usage** - More structured data = better AI understanding
3. **Wikipedia Importance** - Wikipedia entries may boost AI visibility significantly
4. **UGC Platforms** - Reddit, YouTube, Quora influence AI responses heavily
5. **Fresh Content Priority** - AI prefers recent, updated information

**What This Means:**
- Update product pages regularly with new dates
- Add new FAQs based on actual customer questions
- Publish case studies and success stories
- Maintain active social media with expertise sharing

---

### 📚 KEY RESOURCES

- [Semrush: Generative Engine Optimization](https://www.semrush.com/blog/generative-engine-optimization/)
- [Ahrefs: Answer Engine Optimization](https://ahrefs.com/blog/answer-engine-optimization/)
- [Google: Speakable Structured Data](https://developers.google.com/search/docs/appearance/structured-data/speakable)
- [Schema.org: FAQPage](https://schema.org/FAQPage)

---

## 📋 SCHEMA.ORG TYPES USED

### 1. Corporation (Organization)
**File:** `src/components/seo/JsonLd.tsx` → `OrganizationJsonLd()`  
**Used On:** Home page

```javascript
{
  "@type": "Corporation",
  "name": "Phantom Healthcare IND Private Limited",
  "alternateName": ["Phantom Healthcare"],
  "url": "https://phantomhealthcare.com",
  "logo": "https://phantomhealthcare.com/images/logo.jpg",
  "foundingDate": "2011",
  "founder": [...],
  "address": {...},
  "location": { "@type": "Place", "geo": {...} },  // geo goes inside Place, NOT Organization
  "contactPoint": [...],
  "sameAs": [...],
  "hasOfferCatalog": {...}
}
```

**⚠️ IMPORTANT:** 
- `geo` property is ONLY valid on `Place` or `LocalBusiness`, NOT on `Organization/Corporation`
- Put geo inside: `"location": { "@type": "Place", "geo": {...} }`

---

### 2. ProfessionalService (LocalBusiness)
**File:** `src/components/seo/JsonLd.tsx` → `LocalBusinessJsonLd()`  
**Used On:** Home, Contact pages

```javascript
{
  "@type": "ProfessionalService",  // NOT MedicalBusiness (restricted on ad platforms)
  "name": "Phantom Healthcare",
  "geo": {...},  // Valid here because LocalBusiness extends Place
  "openingHoursSpecification": {...},
  "priceRange": "$$$$"
}
```

**⚠️ IMPORTANT:**
- Use `ProfessionalService` instead of `MedicalBusiness` (MedicalBusiness restricted on Google Ads, etc.)
- `geo` IS valid on LocalBusiness (it extends Place)

---

### 3. MedicalDevice
**File:** `src/components/seo/JsonLd.tsx` → `MedicalDeviceJsonLd()`  
**Used On:** Home page

**VALID Properties:**
- `name` ✅
- `description` ✅
- `url` ✅
- `image` ✅
- `sameAs` ✅

**INVALID Properties (will show warnings):**
- ~~`category`~~ ❌
- ~~`isRelatedTo`~~ ❌
- ~~`manufacturer`~~ ❌

```javascript
// CORRECT
{
  "@type": "MedicalDevice",
  "name": "Refurbished GE Signa 3.0T MRI Scanner",
  "description": "Refurbished high-field 3.0T MRI Scanner...",
  "url": "https://phantomhealthcare.com/product-pages/..."
}

// WRONG - these properties not recognized
{
  "@type": "MedicalDevice",
  "manufacturer": {...},  // ❌ NOT VALID
  "category": "MRI Scanner",  // ❌ NOT VALID
  "isRelatedTo": "..."  // ❌ NOT VALID
}
```

---

### 4. MedicalBusiness (Secondary Schema)
**File:** `src/components/seo/JsonLd.tsx` → `MedicalBusinessJsonLd()`  
**Used On:** Home, About pages (as secondary, not primary)

Use only required properties:
```javascript
{
  "@type": "MedicalBusiness",
  "name": "...",
  "description": "...",
  "url": "...",
  "telephone": "...",
  "email": "...",
  "address": {...},
  "geo": {...},
  "openingHoursSpecification": {...},
  "priceRange": "$$$$"
}
```

---

### 5. Product (for Offer Catalog)
**File:** `src/components/seo/JsonLd.tsx` → Inside `hasOfferCatalog`

**REQUIRED for Google Rich Results:**
- `name` ✅
- `image` ✅ **CRITICAL - Missing this causes errors!**
- `offers` OR `review` OR `aggregateRating` ✅

```javascript
{
  "@type": "Product",
  "name": "Refurbished GE Signa 3.0T 750W MRI Scanner",
  "description": "...",
  "image": "https://phantomhealthcare.com/images/products/ge-signa-3t.jpg",  // REQUIRED!
  "brand": { "@type": "Brand", "name": "GE Healthcare" },
  "category": "Refurbished MRI Scanner",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR",
    "price": "0",  // Use 0 for "Contact for Price"
    "priceValidUntil": "2026-12-31",
    "url": "https://phantomhealthcare.com/contact"
  }
}
```

---

## 📱 META TAGS REFERENCE

### Required in layout.tsx
```tsx
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
// Do NOT add maximum-scale=1 (causes accessibility warning)

<meta name="mobile-web-app-capable" content="yes" />
// NOT apple-mobile-web-app-capable (deprecated)
```

### Recommended Legacy Meta Tags
```tsx
// Geographic
<meta name="geo.region" content="IN-HR" />
<meta name="geo.placename" content="Faridabad" />
<meta name="geo.position" content="28.46875;77.29099" />
<meta name="ICBM" content="28.46875, 77.29099" />

// Dublin Core
<meta name="DC.title" content="..." />
<meta name="DC.creator" content="..." />
<meta name="DC.subject" content="..." />
<meta name="DC.description" content="..." />

// Business
<meta name="contact" content="info@phantomhealthcare.com" />
<meta name="copyright" content="© 2011-2025 Phantom Healthcare" />
```

---

## 📏 SEO LENGTH LIMITS

| Element | Ideal Length | Max Length |
|---------|-------------|------------|
| Title | 50-60 chars | 65 chars |
| Description | 150-160 chars | 165 chars |
| H1 | 20-70 chars | 70 chars |
| URL slug | Short, keyword-rich | N/A |

---

## ✅ VALIDATION TOOLS

1. **Google Rich Results Test** (Primary)
   - https://search.google.com/test/rich-results
   - Tests what Google will actually detect

2. **Schema.org Validator** (Secondary)
   - https://validator.schema.org/
   - More lenient, detects more types

3. **Structured Data Testing Tool** (Legacy)
   - Being phased out, use Rich Results instead

---

## ⚠️ COMMON PITFALLS

### 1. Schema validated on schema.org but NOT on Google
- Google has stricter requirements
- Always test with Google Rich Results
- Example: ContactPage schema may not show in Google

### 2. MedicalBusiness restricted on ad platforms
- Use ProfessionalService for LocalBusiness instead
- MedicalBusiness works for schema but causes ad issues

### 3. geo property placement
- ❌ WRONG: Put geo directly on Organization
- ✅ RIGHT: Put geo inside `location.Place` or on LocalBusiness

### 4. Product without image
- Google REQUIRES image for Product schema eligibility
- Without image = "Invalid item" error

### 5. Refurbished products
- Always include "Refurbished" in product names
- We are resellers, not original manufacturers
- Website clearly states refurbished, but schema should too

---

## 🔗 QUICK REFERENCE

### Files to Edit for SEO
```
src/app/layout.tsx                 - Global meta tags
src/components/seo/JsonLd.tsx      - All JSON-LD schemas
src/app/[page]/page.tsx            - Page-specific metadata
```

### Schema Components Available
```typescript
import { 
  OrganizationJsonLd,      // Corporation schema
  LocalBusinessJsonLd,      // ProfessionalService
  WebSiteJsonLd,           // WebSite with SearchAction
  BreadcrumbJsonLd,        // BreadcrumbList
  MedicalDeviceJsonLd,     // 8 medical device products
  MedicalBusinessJsonLd,   // Secondary business type
  AboutPageFullJsonLd      // AboutPage + Organization
} from '@/components/seo/JsonLd';
```

---

## 📝 CHECKLIST FOR NEW PAGES

- [ ] Add page-specific metadata (title < 65 chars, description < 165 chars)
- [ ] Add openGraph and twitter metadata
- [ ] Add canonical URL
- [ ] Add BreadcrumbJsonLd
- [ ] Add visible breadcrumb in hero section
- [ ] Add relevant page-type schema (AboutPage, ContactPage, etc.)
- [ ] Ensure single H1 (20-70 chars)
- [ ] Test with Google Rich Results
- [ ] Add page to sitemap.xml

---

## 🚫 NON-RELEVANT WARNINGS (IGNORE THESE)

### 1. Canonical URL Warning
- **Warning:** "Canonical and page URL are different"
- **Why Ignore:** During development, we're on `nextjs-phantom.vercel.app` but canonical points to `phantomhealthcare.com` (production domain)
- **Action:** This is intentional. Will resolve when deployed to production domain.

### 2. Vercel Preview URL Warnings
- **Warning:** Any warnings about `vercel.app` URLs
- **Why Ignore:** Development/preview URLs, not production
- **Action:** None needed. Production uses `phantomhealthcare.com`

### 3. Anchor Links Without Text (# links)
- **Warning:** "Links without anchor text" for `#products`, `#services`, etc.
- **Why Ignore:** These are dropdown menu anchor links that trigger submenus
- **Action:** These are intentional UX patterns for navigation dropdowns

### 4. Image WIDTH/HEIGHT Missing (Next.js fill prop)
- **Warning:** "17 images missing WIDTH or HEIGHT attribute"
- **Why Ignore:** Next.js Image with `fill` prop + `sizes` attribute is the correct responsive image pattern
- **Reality:** Images use: `<Image fill sizes="(max-width: 768px) 100vw, 50vw" />`
- **Action:** None needed. This is Next.js best practice for responsive images.

### 5. Hidden Content Warnings for line breaks
- **Warning:** "Content seems to be hidden" for h3 elements
- **Why Ignore:** These h3 elements use `<br/>` tags for text wrapping, not to hide content
- **Example:** `24*7 Service & <br/> Support` shows as two lines, not hidden
- **Action:** None needed. False positive from SEO checker.

### 6. Image TITLE Attribute Missing
- **Warning:** "37 images with missing TITLE attribute"
- **Why Ignore:** TITLE is optional, ALT is required. All our images have ALT text.
- **Action:** Optional - can add title for enhanced tooltips, but not SEO-critical

### 7. META charset/httpEquiv Position
- **Warning:** "This tag has to be placed above"
- **Status:** ✅ FIXED - Moved charset and httpEquiv to top of head in layout.tsx
- **Note:** charset, httpEquiv, viewport should always be first in head

---

## 🖼️ IMAGE WIDTH/HEIGHT GUIDANCE

### When to use `fill` prop (NO width/height needed)
```jsx
// ✅ CORRECT - Hero images, full-width backgrounds
<Image 
  fill 
  sizes="(max-width: 768px) 100vw, 50vw"
  src="/images/hero.jpg" 
  alt="..." 
/>
```

### When to use explicit width/height
```jsx
// ✅ CORRECT - Icons, thumbnails, known-size images
<Image 
  src="/images/icon.png" 
  alt="..." 
  width={150} 
  height={150} 
/>

// ❌ WRONG - Never use width={0} height={0}
<Image 
  src="/images/icon.png" 
  width={0} 
  height={0}  // This causes SEO warnings!
/>
```

### Images Fixed (Nov 30, 2025)
- `icons.png` - Changed from 0x0 to 150x150
- `upd.png` - Changed from 0x0 to 150x150  
- `ser.png` - Changed from 0x0 to 150x150

---

## 🔧 PRODUCT SCHEMA REQUIREMENTS (Google Rich Results)

### Required Fields for Products
```javascript
{
  "@type": "Product",
  "name": "...",              // ✅ REQUIRED
  "image": "...",             // ✅ REQUIRED - Google will reject without this!
  "offers": {...}             // ✅ REQUIRED (or review/aggregateRating)
}
```

### Recommended Fields for Better Rich Results
```javascript
{
  "aggregateRating": {        // Highly recommended
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "45",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": {                 // Highly recommended
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Organization", "name": "Apollo Hospitals" },
    "reviewBody": "Excellent refurbished MRI..."
  }
}
```

### Product URL Best Practice
- ❌ WRONG: `"url": "https://phantomhealthcare.com/contact"`
- ✅ RIGHT: `"url": "https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines"`
- Each product's URL should point to its actual product page, not the contact page

---

## 📊 CURRENT PRODUCT COUNT IN SCHEMA

| Category | Count | Schema Location |
|----------|-------|-----------------|
| MRI Machines (3.0T) | 4 | hasOfferCatalog |
| MRI Machines (1.5T) | 4 | hasOfferCatalog |
| CT Scanners | 4 | hasOfferCatalog |
| PET-CT Scanners | 2 | hasOfferCatalog |
| Cath Lab Systems | 2 | hasOfferCatalog |
| Gamma Camera SPECT | 3 | hasOfferCatalog |
| Bone Densitometer | 1 | hasOfferCatalog |
| **TOTAL** | **20** | OrganizationJsonLd |

All products have: name, description, image, brand, category, aggregateRating, review, offers with proper URLs

---

## 🖼️ NEXT.JS IMAGE BEST PRACTICES

### Understanding Image Sizing in Next.js

Next.js `<Image>` component has two main patterns:

#### Pattern 1: Explicit Width/Height (for known-size images)
```jsx
// ✅ CORRECT - Icons, thumbnails, logos with known dimensions
<Image 
  src="/images/icon.png" 
  alt="Icon description" 
  width={150} 
  height={150}
  className="w-28 h-28 object-contain"
/>
```

**When to use:**
- Icons and small graphics
- Thumbnails with fixed sizes
- Logos with known dimensions
- Any image where you know the exact size

#### Pattern 2: Fill + Sizes (for responsive images)
```jsx
// ✅ CORRECT - Hero images, backgrounds, full-width images
<div className="relative h-[400px] w-full">
  <Image 
    src="/images/hero.jpg" 
    alt="Hero image"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover"
  />
</div>
```

**When to use:**
- Hero/banner images
- Background images
- Full-width responsive images
- Images that should scale with container

### SEO Tool Warning: Images with 0x0 or - x - dimensions

**Understanding the Warning:**
When SEO tools report images with `REAL 0x0` or `HTML - x -`, this often means:

1. **For `fill` images:** This is EXPECTED behavior. Next.js `fill` uses CSS sizing, not HTML width/height attributes.
2. **For lazy-loaded images:** SEO tools check dimensions before images load into viewport.

**NOT a Problem If:**
- Image has `fill` prop with proper `sizes` attribute
- Image actually renders correctly on the page
- Image has proper `alt` text

**IS a Problem If:**
- Image has explicit `width={0} height={0}` ← NEVER DO THIS
- Image doesn't render visually
- Image is missing entirely

### ❌ NEVER DO THIS
```jsx
// ❌ WRONG - This causes real SEO issues
<Image 
  src="/images/icon.png"
  width={0}
  height={0}
  className="w-auto h-auto"
/>
```

### Priority Loading for Above-the-Fold Images

```jsx
// ✅ For images visible immediately on page load
<Image 
  src="/images/logo.jpg"
  alt="Phantom Healthcare Logo"
  width={220}
  height={70}
  priority  // Loads immediately, not lazy
/>

// For sliders/carousels - first slide gets priority
{slides.map((slide, index) => (
  <Image 
    src={slide.image}
    alt={slide.title}
    fill
    sizes="100vw"
    priority={index === 0}  // Only first slide
  />
))}
```

### Images Fixed During Nov 30, 2025 Session

| File | Issue | Fix Applied |
|------|-------|-------------|
| `TopBlock.tsx` | width={0} height={0} | Changed to width={150} height={150} |
| `Footer.tsx` | `unoptimized` on white-logo | Removed `unoptimized` |
| `Footer.tsx` | `unoptimized` on flags | Removed `unoptimized`, fixed alt text |
| `RegionalOffices.tsx` | `unoptimized`, no sizes | Removed `unoptimized`, added `sizes="80px"` |
| `TestimonialsCarousel.tsx` | `unoptimized` on doctor images | Removed `unoptimized` |
| `page.tsx` (home) | Spare parts images missing sizes | Added responsive `sizes` attribute |
| `Header.tsx` | Logo lazy loading above fold | Added `priority` prop |
| `About page.tsx` | Founder images missing sizes | Added `sizes` attribute |

---

## ♿ ACCESSIBILITY GUIDELINES

### Required for All Interactive Elements

#### Buttons MUST have accessible names
```jsx
// ❌ WRONG - No accessible name
<button onClick={prevSlide}>
  <i className="fas fa-chevron-left"></i>
</button>

// ✅ CORRECT - Has aria-label
<button onClick={prevSlide} aria-label="Previous slide">
  <i className="fas fa-chevron-left" aria-hidden="true"></i>
</button>
```

#### Links MUST have accessible names
```jsx
// ❌ WRONG - Icon-only link without aria-label
<a href="https://twitter.com/...">
  <i className="fa fa-twitter"></i>
</a>

// ✅ CORRECT - Has aria-label
<a href="https://twitter.com/..." aria-label="Follow us on Twitter">
  <i className="fa fa-twitter" aria-hidden="true"></i>
</a>
```

### Icon Best Practices
```jsx
// For decorative icons (next to text)
<i className="fa fa-phone" aria-hidden="true"></i>
<span>+91 9899963601</span>

// For icon-only buttons
<button aria-label="Call us">
  <i className="fa fa-phone" aria-hidden="true"></i>
</button>
```

### Fixed During Nov 30, 2025 Session

| Component | Issue | Fix |
|-----------|-------|-----|
| `HeroSlider.tsx` | 8 buttons without accessible names | Added `aria-label` to prev/next/dots/play-pause |
| `Footer.tsx` | 7 social links without text | Added `aria-label` to all social links |
| `Header.tsx` | Social links in top bar | Already had `aria-label` ✓ |

---

## 📱 META TAGS REFERENCE

### Next.js Metadata API vs Manual Meta Tags

**IMPORTANT:** Next.js adds some meta tags automatically through the metadata API. DO NOT duplicate these:

```tsx
// In metadata object (Next.js handles these):
export const metadata: Metadata = {
  title: '...',
  description: '...',
  viewport: { ... },  // Next.js adds viewport automatically
  // ...
}

// In <head> - DO NOT add viewport manually
// ❌ WRONG - Causes duplicate
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

// ✅ CORRECT - Let Next.js handle viewport
{/* NOTE: viewport is handled by Next.js metadata API - do not duplicate */}
```

### Required Order in <head>

```tsx
<head>
  {/* 1. FIRST: Character encoding */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  
  {/* 2. Next.js adds viewport automatically */}
  
  {/* 3. Then other meta tags */}
  <meta name="HandheldFriendly" content="true" />
  ...
</head>
```

### Deprecated Tags to Avoid

| ❌ Deprecated | ✅ Use Instead |
|--------------|---------------|
| `apple-mobile-web-app-capable` | `mobile-web-app-capable` |
| `maximum-scale=1` in viewport | Remove it (accessibility issue) |

---

## 📝 NEW PAGE DEVELOPMENT CHECKLIST

### Before Creating a New Page

```
□ Identify page type (product, service, about, contact, etc.)
□ Determine which Schema.org types to use
□ Prepare all images with proper dimensions
□ Write title (50-60 chars) and description (150-160 chars)
□ Plan heading hierarchy (single H1, logical H2-H6)
```

### Page Structure Template

```tsx
// 1. Imports
import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import Image from 'next/image';
import Link from 'next/link';

// 2. Metadata (REQUIRED)
export const metadata: Metadata = {
  title: 'Page Title - Phantom Healthcare',  // 50-60 chars
  description: 'Page description...',         // 150-160 chars
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: '...',
    description: '...',
    url: 'https://phantomhealthcare.com/page-slug',
    images: [{ url: '/images/page-image.jpg', width: 1200, height: 630, alt: '...' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '...',
    description: '...',
    images: ['/images/page-image.jpg'],
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/page-slug',
  },
};

// 3. Page Component
export default function PageName() {
  // Breadcrumb data
  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'Current Page', url: 'https://phantomhealthcare.com/page-slug' }
  ];

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      
      {/* Hero Section with H1 */}
      <section className="...">
        {/* Visible Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li><Link href="/">Home</Link></li>
            <li><span>›</span></li>
            <li>Current Page</li>
          </ol>
        </nav>
        
        {/* Single H1 - 20-70 characters */}
        <h1>Page Main Heading</h1>
      </section>
      
      {/* Page Content */}
      <section>
        <h2>Section Heading</h2>
        {/* ... */}
      </section>
    </main>
  );
}
```

### Image Checklist for New Pages

```
□ All images have descriptive alt text
□ Above-fold images use priority prop
□ Large/responsive images use fill + sizes
□ Small/icon images use explicit width/height
□ NO width={0} height={0} anywhere
□ NO unoptimized prop unless absolutely necessary
```

### Accessibility Checklist

```
□ All buttons have accessible names (aria-label or text)
□ All icon-only links have aria-label
□ Heading hierarchy is logical (H1 → H2 → H3, no skipping)
□ Form inputs have associated labels
□ Color contrast meets WCAG AA (4.5:1 for text)
□ Interactive elements are keyboard accessible
```

### SEO Checklist

```
□ Page has unique title (50-60 chars)
□ Page has unique description (150-160 chars)
□ Single H1 per page (20-70 chars)
□ Canonical URL set
□ Open Graph meta tags present
□ Twitter card meta tags present
□ Breadcrumb JSON-LD added
□ Visible breadcrumb in hero section
□ Page added to sitemap.xml
□ Tested with Google Rich Results Test
```

---

## ⚠️ COMMON PITFALLS & MISTAKES

### Schema.org Mistakes

| Mistake | Why It's Wrong | Correct Approach |
|---------|---------------|------------------|
| `geo` on Organization | `geo` only valid on Place/LocalBusiness | Put inside `location: { "@type": "Place", "geo": {...} }` |
| Product without image | Google REQUIRES image for eligibility | Always include `"image": "https://..."` |
| MedicalDevice with category | `category` not valid on MedicalDevice | Remove, use only supported properties |
| Product URL to contact page | URL should point to product page | Use actual product page URL |

### Next.js Image Mistakes

| Mistake | Effect | Fix |
|---------|--------|-----|
| `width={0} height={0}` | SEO tools report 0x0 dimensions | Use actual dimensions |
| Missing `sizes` on fill images | Poor responsive behavior | Add proper sizes attribute |
| `unoptimized` on all images | No Next.js optimization | Only use when absolutely necessary |
| No `priority` on above-fold | Slow LCP, poor Core Web Vitals | Add `priority` to critical images |

### Meta Tag Mistakes

| Mistake | Effect | Fix |
|---------|--------|-----|
| Duplicate viewport | Conflicting viewport settings | Remove manual viewport, use Next.js metadata |
| `apple-mobile-web-app-capable` | Deprecated | Use `mobile-web-app-capable` |
| `maximum-scale=1` | Accessibility issue, prevents zoom | Remove from viewport |

### Accessibility Mistakes

| Mistake | Effect | Fix |
|---------|--------|-----|
| Icon button without aria-label | Screen readers can't describe action | Add `aria-label="Button purpose"` |
| Icon link without aria-label | Screen readers can't describe link | Add `aria-label="Link destination"` |
| Skipped heading levels | Poor document structure | Use H1→H2→H3 in order |
| H1 too long | Poor SEO, truncated in search results | Keep 20-70 characters |

---

## 🎯 SEO LENGTH LIMITS (REMINDER)

| Element | Ideal | Current Status |
|---------|-------|----------------|
| H1 | 20-70 chars | ✅ Fixed: "Phantom Healthcare - Refurbished MRI & CT Scanner India" (60 chars) |
| Title | 50-60 chars | ✅ OK |
| Description | 150-160 chars | ✅ OK |

---

## 📊 LIGHTHOUSE AUDIT RESULTS (November 30, 2025)

### Overview

Lighthouse audits were run on the homepage (`https://nextjs-phantom.vercel.app/`) on November 30, 2025.

**Lighthouse Version:** 12.8.2 (axe-core 4.10.3)

### Category Scores

| Category | Desktop | Mobile | Notes |
|----------|---------|--------|-------|
| **Performance** | 81 | 49 | Mobile needs significant work |
| **Accessibility** | 89 | 83 | Good, minor issues |
| **Best Practices** | 96 | 96 | Excellent |
| **SEO** | 92 | 92 | Very good |

### Performance Metrics

| Metric | Desktop | Mobile | Target |
|--------|---------|--------|--------|
| First Contentful Paint (FCP) | 1.7s (45) | 7.8s (0) | < 1.8s |
| Largest Contentful Paint (LCP) | 2.1s (60) | 9.0s (1) | < 2.5s |
| Speed Index | 1.8s (69) | 7.8s | < 3.4s |
| Cumulative Layout Shift (CLS) | 0.85 | ? | < 0.1 |
| Main-thread Work | 1.8s ✅ | 5.4s ❌ | < 4.0s |
| JavaScript Execution (bootup) | 0.6s ✅ | 2.0s ❌ | < 2.0s |

**⚠️ CRITICAL:** Mobile performance needs urgent attention. FCP of 7.8s and LCP of 9.0s are very poor scores.

### Failed Audits - Action Required

#### 1. Image Aspect Ratio ✅ FIXED (Nov 30, 2025)
**Issue:** Logo image displayed dimensions don't match actual aspect ratio
- **File:** `src/components/layout/Header.tsx`
- **Image:** `logo.jpg` (260px × 94px actual = 2.77 aspect ratio)
- **Previous (Wrong):** 
  - Desktop: `width={220} height={70}` (3.14 ratio)
  - Mobile: `width={180} height={55}` (3.27 ratio)

**Applied Fix:**
```tsx
// Mobile (matches h-16/h-20 target heights with correct 2.77 ratio):
<Image src="/images/logo.jpg" width={222} height={80} />

// Desktop (matches h-14 = 56px height with correct 2.77 ratio):
<Image src="/images/logo.jpg" width={155} height={56} />
```

#### 2. Missing Preconnects ✅ FIXED (Nov 30, 2025)
**Potential Savings:** Desktop 140ms, Mobile 320ms

**Added to `layout.tsx`:**
```tsx
<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link rel="dns-prefetch" href="https://yt3.ggpht.com" />
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
```

### Performance Optimizations Needed for Mobile

#### 1. Reduce Main-thread Work (5.4s → target < 4.0s)
- Current: 5.4s (FAILING)
- Biggest contributors:
  - Script Evaluation: 2.0s
  - Other: 2.0s
  - Style & Layout: 1.3s

#### 2. Heavy Third-Party Scripts
| Script | Mobile Time | Recommendation |
|--------|-------------|----------------|
| Google Tag Manager | 245ms | Consider loading defer |
| Facebook SDK | 159ms | Consider loading defer |
| Firebase Analytics | ~100ms | Consider lazy loading |
| YouTube Embed | ~150ms | Use lite-youtube-embed |

#### 3. Reduce JavaScript Execution
- Mobile JS execution: 2.0s (at threshold)
- Consider code splitting for non-critical JS

### Recommendations Priority

**High Priority (Fix First):**
1. ✅ Fix logo aspect ratio in Header.tsx
2. ✅ Add preconnect hints for font CDNs
3. ⚠️ Consider YouTube lite embed for video performance

**Medium Priority:**
1. Defer non-critical third-party scripts (GTM, Facebook)
2. Lazy-load components below the fold
3. Reduce main-thread work

**Low Priority:**
1. Consider Service Worker for caching
2. HTTP/2 push for critical resources
3. Image format optimization (already using Next.js Image)

### What's Working Well ✅

- HTTPS enabled
- Proper viewport meta tag
- All images have alt text
- Valid robots.txt and sitemap
- Proper heading hierarchy
- Crawlable URLs
- Canonical URL set
- Meta description present
- Document title present
- HTTP/2 being used
- Text compression enabled

---

## 🔬 LIGHTHOUSE TESTING BEST PRACTICES (Added Dec 1, 2025)

### Why Lighthouse Scores Vary

**Critical Discovery:** The same code can produce scores ranging from 49 to 89 based on testing conditions!

#### The `benchmarkIndex` Factor

The `benchmarkIndex` is hidden in Lighthouse JSON reports and measures your machine's computational capacity at test time.

```json
// Found in Lighthouse JSON report
"benchmarkIndex": 2363  // Higher = more reliable test
```

| benchmarkIndex | Machine State | Score Impact |
|---------------|---------------|--------------|
| < 1000 | Very slow/loaded | Scores 15-25% lower |
| 1000-1500 | Slow | Scores 10-15% lower |
| 1500-2000 | Average | Scores 5-10% lower |
| 2000-2500 | Good | Accurate scores |
| > 2500 | Fast | Slightly optimistic |

**Our Real Tests:**
| Test | Score | benchmarkIndex | Cause |
|------|-------|----------------|-------|
| Test 1 | 49 | ~1100 | Heavy machine load |
| Test 2 | 61 | 1261 | Extensions active |
| Test 3 | 89 | 2363 | Clean incognito |

### Chrome Extensions Impact

Extensions inject JavaScript into every page, affecting:
- Page weight
- Script execution time
- Main thread blocking

**Real Example:**
```
Video Downloader PLUS: 86.3 KiB jQuery injected
Unknown extension: 28.8 KiB jQuery injected
Total: 115 KiB extra JavaScript!
```

### How to Get Accurate Lighthouse Results

1. **Always use Incognito Mode**
   - No extensions
   - No cached data
   - Clean environment

2. **Check benchmarkIndex in JSON report**
   - Run Lighthouse
   - Download JSON report
   - Search for "benchmarkIndex"
   - Should be > 2000

3. **Close other applications**
   - Reduce CPU load
   - Close unused browser tabs
   - Stop background processes

4. **Run multiple tests**
   - Run 3-5 times
   - Take the median score
   - Ignore outliers

5. **Use consistent test environment**
   - Same time of day
   - Same network (wired preferred)
   - Same device/specs

### Understanding Mobile Throttling

Lighthouse uses **simulated throttling** for mobile tests:
- 4x CPU slowdown
- Slow 4G network simulation (1.6 Mbps download)

This throttling is affected by your machine's base performance, hence the benchmarkIndex impact.

---

## ♿ ACCESSIBILITY REQUIREMENTS (Added Dec 1, 2025)

### Button Accessibility

All buttons MUST have accessible names:

```tsx
// ❌ WRONG - Screen readers say just "button"
<button onClick={toggleMenu}>
  <span className="block w-7 h-0.5 bg-black"></span>
  <span className="block w-7 h-0.5 bg-black"></span>
  <span className="block w-7 h-0.5 bg-black"></span>
</button>

// ✅ CORRECT - Screen readers say "Open navigation menu"
<button 
  onClick={toggleMenu}
  aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
  aria-expanded={isMenuOpen}
>
  <span className="block w-7 h-0.5 bg-black"></span>
  <span className="block w-7 h-0.5 bg-black"></span>
  <span className="block w-7 h-0.5 bg-black"></span>
</button>
```

### Touch Target Sizing

**Minimum:** 44x44 pixels (WCAG) or 48x48 pixels (Apple)

```tsx
// ❌ WRONG - Link is too small
<a href="tel:..." className="hover:underline">+91 9899963601</a>

// ✅ CORRECT - Added padding for tap area
<a href="tel:..." className="hover:underline inline-block py-1">+91 9899963601</a>
```

**Pattern for link lists:**
```tsx
<ul className="space-y-2">  {/* Increased vertical spacing */}
  <li>
    <a href="..." className="inline-block py-1">Link text</a>
  </li>
</ul>
```

### Color Contrast

**WCAG Requirements:**
- Normal text: 4.5:1 contrast ratio
- Large text (18px+): 3:1 contrast ratio

```tsx
// ❌ WRONG - text-xs on green might fail contrast
<p className="text-xs">Download Brochure</p>

// ✅ CORRECT - Larger text + font-medium improves contrast perception
<p className="text-sm font-medium">Download Brochure</p>
```

### Preconnect Best Practices

Different origins need different crossorigin settings:

```tsx
// CSS files (no CORS needed)
<link rel="preconnect" href="https://fonts.googleapis.com" />

// Font files (CORS needed)
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

// CDN assets (CORS needed)
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
```

**Why?** Using crossorigin on a non-CORS resource creates a connection that can't be reused, wasting the preconnect.

---

## 🎨 CSS CLASS CONFLICTS (Added Dec 1, 2025)

### Tailwind Display Class Conflicts

Tailwind classes for `display` property can conflict:

```tsx
// ❌ WRONG - 'block' and 'flex' conflict
className="block py-1 flex items-center"

// ✅ CORRECT - Use only one display class
className="py-1 flex items-center"
```

**Conflicting pairs:**
- `block` vs `flex`
- `block` vs `inline`
- `flex` vs `grid`
- `hidden` vs any display class

**ESLint with tailwindcss plugin will catch these!**

---

