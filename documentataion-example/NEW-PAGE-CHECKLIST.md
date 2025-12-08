# 📋 NEW PAGE CHECKLIST

**Created:** November 30, 2025  
**Last Updated:** December 7, 2025 (New Pages Added)  
**Purpose:** Quick reference for creating new pages with proper SEO & Accessibility  
**Use This:** Before creating ANY new page in the Next.js site

---

## 📄 COMPLETED PAGE EXAMPLES

Use these as reference templates when creating new pages:

| Page | Path | Template For | Key Features |
|------|------|--------------|--------------|
| About | `src/app/about/page.tsx` | Content pages | FAQs, leadership, counters |
| Contact | `src/app/contact/page.tsx` | Contact pages | Form, map, office cards |
| Privacy Policy | `src/app/privacy-policy/page.tsx` | Legal pages | Prose content, sections |
| Terms & Conditions | `src/app/terms-and-conditions/page.tsx` | Legal pages | Lists, definitions |
| FAQs | `src/app/faqs/page.tsx` | FAQ pages | Categorized FAQs, navigation |

---

## ✅ PRE-DEVELOPMENT

- [ ] Read `SEO-INDIA-REFERENCE.md` for SEO guidelines (including AI SEO section!)
- [ ] Check existing similar pages for patterns
- [ ] Identify page type (product, service, location, etc.)
- [ ] Plan schema types needed
- [ ] Plan FAQ section for AI visibility

---

## ✅ METADATA (in page.tsx)

```tsx
export const metadata: Metadata = {
  title: 'Page Title - Phantom Healthcare',  // 50-60 chars ideal
  description: 'Page description with keywords...',  // 150-160 chars ideal
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/page-url',
    siteName: 'Phantom Healthcare',
    title: '...',
    description: '...',
    images: [{ url: '/images/...', width: 1200, height: 630, alt: '...' }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '...',
    description: '...',
    images: ['/images/...'],
  },
  
  alternates: {
    canonical: 'https://phantomhealthcare.com/page-url',
  },
};
```

- [ ] Title: 50-60 characters ✅
- [ ] Description: 150-160 characters ✅
- [ ] OpenGraph configured ✅
- [ ] Twitter card configured ✅
- [ ] Canonical URL set ✅

---

## ✅ HEADING STRUCTURE

- [ ] Exactly ONE `<h1>` per page
- [ ] H1 is 20-70 characters
- [ ] Heading hierarchy: H1 → H2 → H3 (no skipping)

**If visual heading is too long:**
```tsx
<h1 className="sr-only">Short H1 for SEO (20-70 chars)</h1>
<p className="text-4xl font-bold">Longer visual heading text</p>
```

---

## ✅ BREADCRUMBS

### JSON-LD (for search engines)
```tsx
<BreadcrumbJsonLd items={[
  { name: 'Home', item: 'https://phantomhealthcare.com' },
  { name: 'Category', item: 'https://phantomhealthcare.com/category' },
  { name: 'Current Page', item: 'https://phantomhealthcare.com/category/page' },
]} />
```

### Visible Breadcrumb (for users)
```tsx
<nav aria-label="Breadcrumb" className="...">
  <ol className="flex items-center">
    <li><Link href="/">Home</Link></li>
    <li><span aria-hidden="true" className="mx-2">›</span></li>
    <li><Link href="/category">Category</Link></li>
    <li><span aria-hidden="true" className="mx-2">›</span></li>
    <li aria-current="page">Current Page</li>
  </ol>
</nav>
```

- [ ] JSON-LD BreadcrumbList added ✅
- [ ] Visible breadcrumb in hero section ✅
- [ ] Separator uses `aria-hidden="true"` ✅
- [ ] Current page has `aria-current="page"` ✅

---

## ✅ IMAGES

### Fixed Size Images (icons, thumbnails)
```tsx
<Image 
  src="/images/icon.png" 
  alt="Descriptive alt text" 
  width={150}  // Actual or proportional
  height={150} // Actual or proportional
/>
```

### Responsive Images (hero, backgrounds)
```tsx
<div className="relative h-[400px] w-full">
  <Image 
    fill 
    sizes="(max-width: 768px) 100vw, 50vw"
    src="/images/hero.jpg" 
    alt="Descriptive alt text" 
    className="object-cover"
    priority  // Add for above-fold images
  />
</div>
```

### Aspect Ratio Calculation
```
Actual image: 260 × 94 = 2.77 ratio
Display height 56px → width = 56 × 2.77 = 155px
```

- [ ] All images have `alt` text ✅
- [ ] Above-fold images have `priority` ✅
- [ ] Aspect ratios are correct ✅
- [ ] NO `width={0} height={0}` anywhere ✅

---

## ✅ ACCESSIBILITY

### Icon-Only Buttons
```tsx
<button aria-label="Open mobile menu">
  <span className="sr-only">Menu</span>
  <MenuIcon aria-hidden="true" />
</button>
```

### Icon-Only Links
```tsx
<a href="tel:+919876543210" aria-label="Call us at +91 98765 43210">
  <PhoneIcon aria-hidden="true" />
</a>
```

### Social Media Links
```tsx
<a href="https://facebook.com/..." aria-label="Visit our Facebook page" target="_blank" rel="noopener noreferrer">
  <FacebookIcon aria-hidden="true" />
</a>
```

- [ ] All icon buttons have `aria-label` ✅
- [ ] All icon links have `aria-label` ✅
- [ ] Decorative icons have `aria-hidden="true"` ✅
- [ ] Screen reader text uses `sr-only` class ✅

---

## ✅ JSON-LD SCHEMAS

### Choose Based on Page Type

| Page Type | Primary Schema | Additional Schemas |
|-----------|---------------|-------------------|
| Home | OrganizationJsonLd, LocalBusinessJsonLd | WebSiteJsonLd, MedicalDeviceJsonLd, **HomeSpeakableJsonLd**, **HomeFAQJsonLd** |
| About | AboutPageFullJsonLd | BreadcrumbJsonLd, MedicalBusinessJsonLd, **AboutSpeakableJsonLd**, **AboutFAQJsonLd** |
| Contact | LocalBusinessJsonLd | BreadcrumbJsonLd, ContactPageJsonLd, **ContactSpeakableJsonLd**, **ContactFAQJsonLd** |
| Product Category | ItemListJsonLd | BreadcrumbJsonLd, **SpeakableJsonLd**, **FAQJsonLd** |
| Product Detail | ProductJsonLd | BreadcrumbJsonLd, **FAQJsonLd** |
| Service | ServiceJsonLd | BreadcrumbJsonLd, **SpeakableJsonLd**, **FAQJsonLd** |

### Import from
```tsx
import { 
  BreadcrumbJsonLd,
  OrganizationJsonLd,
  LocalBusinessJsonLd,
  HomeSpeakableJsonLd,     // Voice search - Home
  AboutSpeakableJsonLd,    // Voice search - About
  ContactSpeakableJsonLd,  // Voice search - Contact
  HomeFAQJsonLd,           // FAQ schema - Home (8 FAQs)
  AboutFAQJsonLd,          // FAQ schema - About (5 FAQs)
  ContactFAQJsonLd,        // FAQ schema - Contact (6 FAQs)
  // ... etc
} from '@/components/seo/JsonLd';
```

- [x] Appropriate schemas added ✅
- [x] Product schemas have `image` (REQUIRED!) ✅
- [x] FAQPage schema added ✅ (Dec 5)
- [x] Speakable schema added ✅ (Dec 7)
- [x] Tested with Google Rich Results Test ✅

---

## 🤖 AI SEO / GEO / AEO CHECKLIST (Added Dec 4, 2025)

**Purpose:** Optimize content to appear in AI-generated answers (ChatGPT, Google AI Overviews, Perplexity, Claude)

### Content Structure for AI
- [ ] Lead with key information (don't bury the lede)
- [ ] Use declarative, quotable sentences with specific data
- [ ] Include actual numbers, specifications, prices (avoid "contact us")
- [ ] Add FAQ section with common questions about the topic

### FAQ Section Example ✅ IMPLEMENTED Dec 5, 2025

We have a reusable FAQ component. Import and use it:

```tsx
// Import the reusable FAQ component
import FAQSection from '@/components/ui/FAQSection';

// Define your FAQs
const pageFaqs = [
  {
    question: "What warranty does Phantom Healthcare offer?",
    answer: "Phantom Healthcare provides a 12-month comprehensive warranty on all refurbished medical imaging equipment, covering parts and labor."
  },
  {
    question: "Where are your service centers located?",
    answer: "We have service centers in Faridabad (HQ), Mumbai, Chennai, and Kolkata for pan-India support."
  }
];

// Use in your page component
<FAQSection
  title="Frequently Asked Questions"
  subtitle="Common questions about our products and services"
  faqs={pageFaqs}
/>
```

### FAQPage JSON-LD Schema ✅ IMPLEMENTED Dec 5, 2025

Import the appropriate FAQ JSON-LD component:

```tsx
// For existing pages, we have pre-built components:
import { 
  HomeFAQJsonLd,      // Home page - 8 FAQs about products/warranty
  AboutFAQJsonLd,     // About page - 5 FAQs about company/leadership
  ContactFAQJsonLd    // Contact page - 6 FAQs about contact/demos
} from '@/components/seo/JsonLd';

// Add to your page:
<HomeFAQJsonLd />
```

**For NEW pages**, create a new FAQ schema in `JsonLd.tsx`:

```tsx
export function YourPageFAQJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Your question here?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your answer here with specific data."
        }
      }
      // Add more questions...
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

### FAQ Implementation Checklist
- [x] Import `FAQSection` component ✅
- [x] Define FAQs with specific, quotable answers ✅
- [x] Add FAQPage JSON-LD schema ✅
- [x] Sync visible FAQs with JSON-LD FAQs ✅
- [x] Test with Google Rich Results Test ✅

### AI Content Quality Checklist
- [ ] Avoid vague marketing language ("world-class", "best-in-class")
- [ ] Include specific data that AI can cite ("150+ installations since 2011")
- [ ] Use tables and bullet points for specifications
- [ ] Add expert quotes or testimonials with attribution
- [ ] Include clear answer to "what, when, where, how much" questions

### Testing for AI Visibility
- [ ] Test queries in ChatGPT: "Best refurbished MRI machines in India"
- [ ] Test queries in Perplexity: "Phantom Healthcare reviews"
- [ ] Check if your brand is mentioned in AI responses

---

## 🎤 SPEAKABLE SCHEMA FOR VOICE SEARCH (Added Dec 7, 2025)

**Purpose:** Optimize content for voice assistants (Google Assistant, Alexa, Siri)

### When to Add Speakable Schema
- ✅ Key landing pages (Home, About, Contact)
- ✅ Product category pages
- ✅ Service pages
- ✅ Any page with important audio-friendly content

### Speakable Schema Example
```tsx
import { HomeSpeakableJsonLd } from '@/components/seo/JsonLd';

// In your page component:
<HomeSpeakableJsonLd />
```

### Creating New Speakable Schema
```tsx
export function YourPageSpeakableJsonLd() {
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",  // or AboutPage, ContactPage, etc.
    "name": "Page Title for Voice Assistants",
    "url": "https://phantomhealthcare.com/your-page-url",  // ⚠️ MUST match actual page URL!
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2"]  // Use ONLY selectors that exist on the page
    },
    "mainEntity": {
      "@type": "Organization",  // or LocalBusiness, MedicalBusiness, etc.
      "name": "Phantom Healthcare",
      "description": "Clear, quotable description for voice assistants to read aloud.",
      "telephone": "+91-9899963601",
      "email": "biz@phantomhealthcare.com",
      "url": "https://phantomhealthcare.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
    />
  );
}
```

### ⚠️ CRITICAL: Speakable Schema Rules
1. **URL MUST match page URL** - Home = `/`, About = `/about`, NOT cross-page URLs!
2. **cssSelector must exist** - Only use `["h1", "h2"]` unless you have specific selectors
3. **Avoid custom classes** - `.hero-text`, `.about-summary` will fail if not present
4. **Include address** - MedicalBusiness/LocalBusiness entities need PostalAddress

### Speakable Checklist
- [ ] URL matches the actual page URL ✅
- [ ] cssSelector uses existing elements (`h1`, `h2`) ✅
- [ ] mainEntity includes business description ✅
- [ ] Tested with Google Rich Results Test ✅

---

## ✅ FINAL CHECKS

- [ ] Page builds without errors: `npm run build`
- [ ] No TypeScript errors
- [ ] Test on desktop browser
- [ ] Test on mobile browser (REAL device, not just DevTools)
- [ ] Run Lighthouse audit (IN INCOGNITO MODE!)
- [ ] Check benchmarkIndex > 2000 in Lighthouse JSON
- [ ] Run Google Rich Results Test
- [ ] Add page to `sitemap.xml`
- [ ] Update `CURRENT-STATUS.md`

---

## ♿ ACCESSIBILITY CHECKLIST (Added Dec 1, 2025)

### Buttons
- [ ] All buttons have `aria-label` (especially icon-only buttons)
- [ ] Toggle buttons have `aria-expanded`
- [ ] No empty buttons

### Touch Targets (Mobile)
- [ ] All clickable elements are at least 44x44px
- [ ] Links have `inline-block py-1` for padding
- [ ] Adequate spacing between touch targets (`space-y-2`)

### Contrast
- [ ] Text on colored backgrounds meets 4.5:1 ratio
- [ ] Use `font-medium` on smaller text for better visibility

### CSS Classes
- [ ] No conflicting display classes (`block` vs `flex`)
- [ ] Run ESLint to catch Tailwind conflicts

---

## 🎯 LIGHTHOUSE TARGETS

| Category | Desktop | Mobile |
|----------|---------|--------|
| Performance | >80 | >60 (variable due to throttling) |
| Accessibility | >95 | >95 |
| Best Practices | >90 | >90 |
| SEO | >95 | >95 |

**Note:** Mobile performance varies 20-30% based on testing conditions. Always test in Incognito Mode and check `benchmarkIndex` in JSON report (should be > 2000).

---

## 🔬 LIGHTHOUSE TESTING TIPS

1. **Always use Incognito Mode** - No extensions
2. **Check benchmarkIndex** - Should be > 2000 for accurate results
3. **Run 3-5 times** - Take median score
4. **Close other apps** - Reduce CPU load
5. **Use wired network** - More consistent than WiFi

---

## 📚 REFERENCE DOCUMENTS

- `SEO-INDIA-REFERENCE.md` - Complete SEO guide (includes AI SEO / GEO / AEO section)
- `AI-AGENT-CRITICAL-GUIDELINES.md` - Critical rules
- `best-practices.md` - Coding standards
- `precautions-and-guardrails.md` - What NOT to do

---

## 🔗 EXTERNAL RESOURCES (AI SEO)

- [Semrush: Generative Engine Optimization](https://www.semrush.com/blog/generative-engine-optimization/)
- [Ahrefs: Answer Engine Optimization](https://ahrefs.com/blog/answer-engine-optimization/)
- [Google: Speakable Structured Data](https://developers.google.com/search/docs/appearance/structured-data/speakable)
- [Schema.org: FAQPage](https://schema.org/FAQPage)
