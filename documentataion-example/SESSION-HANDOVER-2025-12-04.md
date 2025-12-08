# Session Handover - December 4, 2025

**Session Time:** Start of session  
**Focus:** AI SEO / GEO / AEO Documentation  
**Build Status:** (Not tested this session)  
**Git Status:** ⚠️ Documentation updated - needs push

---

## 🎯 SESSION SUMMARY

This session focused on adding comprehensive AI SEO (Generative Engine Optimization / Answer Engine Optimization) documentation across all relevant project files. The user had no prior knowledge of GEO/AEO terminology, so detailed explanations were added.

---

## 📖 WHAT IS AI SEO / GEO / AEO?

### Key Terminology

| Term | Full Name | Meaning |
|------|-----------|---------|
| **GEO** | Generative Engine Optimization | Optimizing content to appear in AI-powered search engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) |
| **AEO** | Answer Engine Optimization | Making content visible to AI systems that deliver direct answers (voice assistants, LLMs, AI search) |
| **AI SEO** | AI-focused SEO | Umbrella term covering GEO + AEO + traditional SEO for AI visibility |

### Why It Matters

- Traditional SEO: Rank pages in search results → User clicks your link
- AI SEO (GEO/AEO): Be **cited/mentioned** in AI-generated answers → Brand exposure without click

### Example

When someone asks ChatGPT "Best refurbished MRI machines in India":
- ✅ Good: AI mentions "Phantom Healthcare provides 12-month warranty on refurbished MRI machines"
- ❌ Bad: AI doesn't mention Phantom Healthcare at all

---

## ✅ DOCUMENTATION UPDATED

### 1. SEO-INDIA-REFERENCE.md
**New Section Added:** `## 🤖 AI SEO / GEO / AEO (Generative & Answer Engine Optimization)`

Contents:
- Terminology explained (GEO, AEO, AI SEO, LLM, AI Overviews, Zero-Click Search)
- Why it matters for Phantom Healthcare (table comparison)
- Technical implementation:
  - Content structure for AI extraction
  - FAQ Schema (FAQPage)
  - Speakable Schema (for voice assistants)
  - Server-side rendering importance
- Content optimization examples (before/after)
- Brand authority signals (Wikipedia, LinkedIn, directories)
- AEO vs SEO comparison table
- Monitoring AI visibility (tools and manual testing)
- AI SEO checklist for new pages
- Future-proofing trends
- Key resources/links

### 2. AI-AGENT-CRITICAL-GUIDELINES.md
**New Section Added:** `### 14. AI SEO / GEO / AEO RULES (ADDED Dec 4, 2025)`

Contents:
- Terminology table
- Rules for AI visibility
- Content format examples
- FAQPage schema example
- Reference to full details in SEO-INDIA-REFERENCE.md

### 3. NEW-PAGE-CHECKLIST.md
**New Section Added:** `## 🤖 AI SEO / GEO / AEO CHECKLIST (Added Dec 4, 2025)`

Contents:
- Content structure checklist
- FAQ section example
- FAQPage schema example
- AI content quality checklist
- Testing for AI visibility

Also updated:
- Pre-development checklist (added FAQ planning)
- Reference documents section (updated links)
- Added external resources for AI SEO

### 4. precautions-and-guardrails.md
**New Section Added:** `### **12. AI SEO / GEO / AEO GUARDRAILS (NEW DEC 4, 2025)**`

Contents:
- Terminology explanation
- What to NEVER do (vague marketing, hidden info)
- What to ALWAYS do (lead with key info, quotable sentences)
- Content examples (before/after)
- Schema requirements
- Reference to full documentation

---

## 📁 FILES MODIFIED

```
docs/SEO-INDIA-REFERENCE.md
  - Updated "Last Updated" date
  - Updated Table of Contents (added AI SEO as #1)
  - Added comprehensive AI SEO / GEO / AEO section (~300 lines)

docs/AI-AGENT-CRITICAL-GUIDELINES.md
  - Updated "Last Updated" date
  - Added Section 14: AI SEO / GEO / AEO RULES

docs/NEW-PAGE-CHECKLIST.md
  - Updated "Last Updated" date
  - Updated Pre-development section (added FAQ planning)
  - Added AI SEO / GEO / AEO Checklist section
  - Added external resources section

docs/precautions-and-guardrails.md
  - Updated "Last Updated" date
  - Added Section 12: AI SEO / GEO / AEO GUARDRAILS
```

---

## 📚 KEY SOURCES REFERENCED

Research for this documentation came from:
1. **Semrush: Generative Engine Optimization** - https://www.semrush.com/blog/generative-engine-optimization/
2. **Ahrefs: Answer Engine Optimization** - https://ahrefs.com/blog/answer-engine-optimization/

---

## 🔧 NEXT SESSION PRIORITIES

1. **Git Push** - Push all documentation changes to repository
2. **Implement FAQPage Schema** - Add to existing pages (Home, About, Contact)
3. **Create FAQ Sections** - Add visible FAQ content to pages
4. **Content Audit** - Review existing content for AI-friendly structure
5. **Speakable Schema** - Consider adding for voice search

---

## 💡 KEY IMPLEMENTATION NOTES

### FAQPage Schema Implementation

When implementing, add to `src/components/seo/JsonLd.tsx`:

```tsx
export function FAQPageJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })
      }}
    />
  );
}
```

### Content Guidelines for Writers

When writing new content, follow this structure:

```markdown
# [Product Name] - [Key Benefit]

**Price:** ₹XX,XX,XXX (or "Contact for custom quote")
**Warranty:** 12 months comprehensive
**Installation:** Included
**Availability:** In stock / Lead time X weeks

[First paragraph: What it is, key specs, who it's for]

## Key Specifications
- Spec 1
- Spec 2
- Spec 3

## Frequently Asked Questions

### What warranty is included?
[Direct answer]

### What is the installation process?
[Direct answer]
```

---

## ⚠️ IMPORTANT NOTES

1. **AI SEO is NOT a replacement for traditional SEO** - It's an extension
2. **Server-side rendering is critical** - Next.js already handles this ✅
3. **FAQPage schema is high-priority** - Direct input to AI answer systems
4. **Brand consistency matters** - Same info across all platforms helps AI trust
5. **Regular testing needed** - Ask ChatGPT/Perplexity about your industry monthly

---

## 🔗 RELATED FILES

- Full AI SEO guide: `docs/SEO-INDIA-REFERENCE.md`
- Critical guidelines: `docs/AI-AGENT-CRITICAL-GUIDELINES.md`
- New page checklist: `docs/NEW-PAGE-CHECKLIST.md`
- Guardrails: `docs/precautions-and-guardrails.md`
- Previous session: `docs/SESSION-HANDOVER-2025-12-01.md`
