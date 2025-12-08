# FINAL ARCHITECTURE - Phantom Healthcare International

**Date:** 2025-11-27  
**Status:** APPROVED & IMPLEMENTED  
**Author:** Claude Opus 4.5

---

## Executive Summary

This document defines the **THREE-LAYER** architecture for Phantom Healthcare's web presence:

1. **Main India Site** - Deep product/service catalog (phantomhealthcare.in)
2. **India City Pages** - SEO directory pages (Indiamart/Justdial style)
3. **International Sites** - COMPLETELY SEPARATE websites for each country

---

## Layer 1: Main India Site (Root Level)

### Purpose
Primary business website for Phantom Healthcare India with comprehensive product and service information.

### URL Structure
```
phantomhealthcare.in/
├── /                           # Homepage
├── /about/                     # About us
├── /contact/                   # Contact form
├── /products/                  # Product categories
├── /services/                  # Service categories
├── /blogs/                     # Blog listing
├── /privacy-policy/            # Legal
├── /terms-and-conditions/      # Legal
├── /faqs/                      # FAQs
├── /customer-feedback/         # Testimonials
├── /events-and-news/           # News section
├── /sell-your-medical-imaging-equipment/   # Equipment selling
├── /spare-parts-and-inventory/             # Parts catalog
└── /sitemap/                   # HTML sitemap
```

### Deep Product Structure (NEW)
```
/product-pages/
├── ct-scan-machines/
│   ├── 16-slice-ct/
│   │   ├── page.tsx                        # 16-slice category overview
│   │   ├── ge-brightspeed-16/              # Individual model
│   │   └── siemens-somatom-emotion-16/     # Individual model
│   ├── 32-slice-ct/
│   │   ├── page.tsx
│   │   ├── ge-optima-ct660/
│   │   └── siemens-somatom-go-top/
│   ├── 64-slice-ct/
│   │   ├── page.tsx
│   │   ├── ge-revolution-ct/
│   │   └── siemens-somatom-definition/
│   └── 128-slice-ct/
│       ├── page.tsx
│       ├── ge-revolution-frontier/
│       └── siemens-somatom-force/
│
├── mri-machines/
│   ├── 1-5t-mri/
│   │   ├── page.tsx
│   │   ├── ge-signa-hdxt/
│   │   └── siemens-magnetom-avanto/
│   └── 3-0t-mri/
│       ├── page.tsx
│       ├── ge-discovery-mr750/
│       └── siemens-magnetom-vida/
│
├── x-ray-machines/              # Existing
├── c-arm-machines/              # Existing
├── mammography/                 # Existing
├── ultrasound/                  # Existing
└── cath-lab/                    # Existing
```

### Deep Service Structure (NEW)
```
/service-pages/
├── amc-comprehensive-maintenance/
│   ├── page.tsx                 # General AMC page
│   ├── ge-mri-amc/              # Brand + modality specific
│   ├── siemens-mri-amc/
│   ├── ge-ct-amc/
│   ├── siemens-ct-amc/
│   ├── philips-ct-amc/
│   └── toshiba-ct-amc/
│
├── installation-deinstallation/
├── equipment-relocation/
└── training/
```

---

## Layer 2: India City Pages (SEO Directory)

### Purpose
Indiamart/Justdial-style SEO pages targeting local keywords like:
- "MRI machine buy in Indore"
- "CT scan manufacturers in Mumbai"
- "Used medical imaging equipment Chennai"

### URL Structure
```
/locations/
├── [city]/
│   ├── page.tsx                           # General city page
│   └── [category]/page.tsx                # Category-specific page
```

### Example URLs
```
/locations/mumbai/                          # General Mumbai page
/locations/mumbai/ct-scan/                  # CT scan in Mumbai
/locations/mumbai/mri/                      # MRI in Mumbai
/locations/mumbai/x-ray/                    # X-ray in Mumbai
/locations/mumbai/refurbished-equipment/    # Used equipment in Mumbai
/locations/mumbai/amc-services/             # AMC in Mumbai

/locations/delhi/
/locations/bangalore/
/locations/chennai/
/locations/hyderabad/
/locations/kolkata/
/locations/pune/
/locations/ahmedabad/
/locations/indore/
/locations/jaipur/
/locations/lucknow/
... (50+ Indian cities)
```

### Content Strategy
Each city page includes:
- H1: "MRI Machine Dealers in Mumbai"
- Local address/contact information
- City-specific testimonials
- Nearby hospital references
- Local service coverage details
- Google Maps embed for that region

### SEO Benefits
- Target 50+ cities × 5-10 categories = 250-500 landing pages
- Each page targets "[product/service] in [city]" keywords
- Internal linking to main product pages
- Local schema markup

---

## Layer 3: International Sites (SEPARATE WEBSITES)

### ⚠️ CRITICAL UNDERSTANDING
**International sites are NOT translations of the India site.**
**They are COMPLETELY SEPARATE websites with:**
- Different headers (country-specific logo, navigation)
- Different footers (local contact, country-specific links)
- Different content (country-specific products, pricing)
- Different contact forms (local phone, address, map)
- Different legal pages (country-specific policies)

### URL Structure
```
/[lang]/
├── page.tsx                    # Country homepage
├── about/
├── contact/                    # DIFFERENT form, DIFFERENT map
├── products/
│   ├── page.tsx
│   └── [category]/
├── services/
│   ├── page.tsx
│   └── [type]/
├── locations/                  # Cities in THAT country
│   ├── [city]/
│   │   └── [category]/
└── blogs/
```

### Language Codes
```typescript
const SUPPORTED_LANGS = ['us', 'ae', 'uk', 'au', 'fr'] as const;

// URL Examples:
// /us/              → United States site
// /ae/              → UAE site
// /uk/              → United Kingdom site
// /au/              → Australia site
// /fr/              → France site
```

### Example: UAE Site Structure
```
/ae/                            # UAE Homepage
/ae/about/                      # About Phantom UAE
/ae/contact/                    # Dubai office address, UAE phone
/ae/products/                   # Products available in UAE
/ae/products/mri-machines/      # MRI category for UAE
/ae/services/                   # Services offered in UAE
/ae/locations/dubai/            # Dubai city page
/ae/locations/abu-dhabi/        # Abu Dhabi city page
/ae/locations/sharjah/          # Sharjah city page
```

### Component Architecture
```typescript
// International sites need DIFFERENT components:

// src/components/international/
├── InternationalHeader.tsx     // Country-specific header
├── InternationalFooter.tsx     // Country-specific footer
├── CountryContactForm.tsx      // Country-specific form
├── CountryMap.tsx              // Google Maps for that country
└── CountryContent.tsx          // Country-specific content wrapper

// Usage in [lang] routes:
import { InternationalHeader } from '@/components/international/InternationalHeader';
import { InternationalFooter } from '@/components/international/InternationalFooter';
```

---

## File Structure Summary

```
src/app/
├── page.tsx                    # India homepage
├── about/
├── contact/
├── products/
├── services/
├── blogs/
├── privacy-policy/             # ✅ NEW
├── terms-and-conditions/       # ✅ NEW
├── faqs/                       # ✅ NEW
├── customer-feedback/          # ✅ NEW
├── events-and-news/            # ✅ NEW
├── sell-your-medical-imaging-equipment/  # ✅ NEW
├── spare-parts-and-inventory/  # ✅ NEW
├── sitemap/                    # ✅ NEW
│
├── product-pages/
│   ├── ct-scan-machines/
│   │   ├── 16-slice-ct/        # ✅ NEW
│   │   │   ├── ge-brightspeed-16/      # ✅ NEW
│   │   │   └── siemens-somatom-emotion-16/  # ✅ NEW
│   │   ├── 32-slice-ct/        # ✅ NEW
│   │   ├── 64-slice-ct/        # ✅ NEW
│   │   └── 128-slice-ct/       # ✅ NEW
│   └── mri-machines/
│       ├── 1-5t-mri/           # ✅ NEW
│       └── 3-0t-mri/           # ✅ NEW
│
├── service-pages/
│   └── amc-comprehensive-maintenance/
│       ├── ge-mri-amc/         # ✅ NEW
│       ├── siemens-mri-amc/    # ✅ NEW
│       ├── ge-ct-amc/          # ✅ NEW
│       └── siemens-ct-amc/     # ✅ NEW
│
├── locations/                  # India city pages
│   └── [city]/
│       ├── page.tsx
│       └── [category]/page.tsx
│
└── [lang]/                     # International sites (SEPARATE)
    ├── page.tsx
    ├── about/
    ├── contact/
    ├── products/
    ├── services/
    ├── locations/
    │   └── [city]/
    │       └── [category]/
    └── blogs/
```

---

## SEO Files

### robots.txt (public/robots.txt)
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://phantomhealthcare.in/sitemap.xml
```

### sitemap.xml (public/sitemap.xml)
- Main pages
- All product categories
- All product specifications (16-slice, 32-slice, etc.)
- All individual product models
- All service pages
- All location pages
- All international sites

---

## URL Mapping: Static → Next.js

| Static Site (phantom-website/) | Next.js Route |
|-------------------------------|---------------|
| index.html | / |
| about.html | /about/ |
| contact.html | /contact/ |
| products.html | /products/ |
| services.html | /services/ |
| blogs.html | /blogs/ |
| privacy-policy.html | /privacy-policy/ |
| terms-and-conditions.html | /terms-and-conditions/ |
| faqs.html | /faqs/ |
| customer-feedback.html | /customer-feedback/ |
| events-and-news.html | /events-and-news/ |
| sell-your-medical-imaging-equipment.html | /sell-your-medical-imaging-equipment/ |
| spare-parts-and-inventory.html | /spare-parts-and-inventory/ |
| sitemap.html | /sitemap/ |
| product-pages/ct-scan-machines.html | /product-pages/ct-scan-machines/ |
| service-pages/amc-comprehensive-maintenance.html | /service-pages/amc-comprehensive-maintenance/ |

---

## Key Architecture Decisions

### Decision 1: City Pages at Root Level
**Why:** India is the primary market. City pages should be `/locations/mumbai/` not `/in/locations/mumbai/`.

### Decision 2: International as Separate Sites
**Why:** Each country has different business requirements, contact details, and products. They are not translations.

### Decision 3: Deep Product Structure
**Why:** SEO requires individual pages for each specification level and model. This allows targeting keywords like:
- "16 slice CT scanner price"
- "GE BrightSpeed 16 specifications"
- "Siemens 3.0T MRI buy"

### Decision 4: Dynamic Routes for Scale
**Why:** With 50+ cities × 10 categories × 5 countries, hard-coding pages is not feasible. Dynamic routes with data files scale efficiently.

---

## Next Steps

1. **Populate Data Files:** Create JSON/TS data files for:
   - City information (address, phone, coordinates)
   - Product specifications (each model's specs, features, price range)
   - International site content

2. **Create Components:**
   - City page template
   - Product page template
   - International header/footer

3. **Generate Static Params:**
   - Implement `generateStaticParams()` for all dynamic routes
   - Create ISR strategy for dynamic content

4. **SEO Implementation:**
   - JSON-LD schema for each page type
   - OpenGraph/Twitter cards
   - Canonical URLs for cross-linking

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2025-11-27 | 1.0 | Initial architecture document |
| 2025-11-27 | 1.1 | Added deep product/service structure |
| 2025-11-27 | 1.2 | Added missing pages (privacy, terms, faqs, etc.) |
| 2025-11-27 | 1.3 | Added robots.txt and sitemap.xml |
