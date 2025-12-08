# STRICT WARNINGS & REPEATED MISTAKES — AI ASSISTANT SELF-CHECKLIST

_Last updated: {{TODAY}}_

> **This file is a living, self-critical checklist of strict warnings and repeated blunders made by the AI assistant, as documented in all work logs. Review this before every session.**

---

## 1. Work Log Protocols & Documentation

- **NEVER overwrite or replace work logs.** Always append new entries. (See: general-development-notes.md, all work logs)
- **ALWAYS update both work logs and general notes concurrently, in real time.** Do not wait until the end of the session. (See: general-development-notes.md)
- **NEVER remove or cut content from work logs when copying to developer notes.** Only copy, never move.
- **ROTATE work logs every 1–2 weeks.** Create a new file, do not let logs grow indefinitely. (See: user protocol)
- **MAINTAIN chronological order and session context.** Do not mix up day/night or office/home sessions.
- **DO NOT create excessive log files.** Keep logs consolidated unless rotation is due.

---

## 2. UI/UX & Code Separation

- **NEVER merge or modify separate mobile and desktop hero/slider/enquiry sections.** They must remain distinct. (See: 2025-07-10-hero-section-separation-critical.md)
- **DO NOT apply desktop styles or logic to mobile, or vice versa.**
- **DO NOT use the same image sources for both mobile and desktop hero sections.**
- **DO NOT add zoom animation to mobile hero slider.**
- **DO NOT merge JSX blocks for mobile/desktop.**
- **ALWAYS test on real devices, not just browser resize.**

---

## 3. Code Integrity & Reference Code

- **NEVER alter commented reference code unless explicitly instructed.** (See: 2024-07-12, 2024-07-13 work logs)
- **ALWAYS keep original code commented safely when making modifications.**
- **DO NOT change design/colors of commented code when only an uncomment is requested.**
- **ALWAYS document mistakes and recovery steps in real time, not just at session end.**

---

## 4. Tailwind & CSS Protocols

- **NEVER use px or outdated CSS units except where absolutely required (e.g., Swiper).** Use rem, em, %, vw, vh, vmin, vmax, clamp, min, max. (See: user preferences)
- **ONLY use manual/custom CSS when necessary.**
- **APPLY site-wide font smoothing with Tailwind’s antialiased and subpixel-antialiased classes.**
- **PRESERVE brand green (#59913d) and gradient themes for all UI elements.**

---

## 5. General Development & Workflow

- **DO NOT forget context or skip reading all relevant files before making changes.**
- **STRICTLY stick to the content and do not diverge or add unrelated information.**
- **DO NOT modify existing sections or formatting when making new improvements.**
- **RESPECT 'don’t touch' comments in code/design.**
- **ALWAYS keep a centralized work log for issue resolution across all screens.**

---

## 6. Google Maps & Third-Party Integrations

- **DO NOT spend excessive time on simple features without researching limitations first.**
- **DOCUMENT all failed attempts and technical debt in real time.**
- **PRIORITIZE working solutions and schedule improvements for later if blocked.**

---

## 7. Forms, Business Logic, and UI Feedback

- **NEVER break existing business logic or change field types/validation without explicit user confirmation.**
- **ALWAYS use the site’s custom color palette for new UI elements.**
- **ENSURE all overlays, buttons, and notifications use brand colors and gradients.**
- **MAINTAIN mobile-first, highly responsive design.**
- **CONFIRM all changes with the user at each step.**

---

## 8. Performance & Optimization

- **DO NOT prematurely optimize or add complexity before core features work.**
- **ALWAYS document performance decisions and rationale.**
- **MONITOR Core Web Vitals and bundle size after major changes.**

---

## 9. Self-Reflection & Continuous Improvement

- **REVIEW this file and general-development-notes.md before every session.**
- **ADD new mistakes and lessons learned immediately.**
- **UPDATE this checklist as protocols evolve.**

---

## 10. Ultra-Wide Screen Scaling & Layout Breakage (CRITICAL)

- **NEVER break or destabilize layouts that are pixel-perfect at 1280px–1380px when scaling up to 1920px+ or ultra-wide screens.**
- **ALWAYS commit (git push) when a section looks perfect at 1280px–1380px before attempting ultra-wide responsiveness.**
- **DO NOT introduce new breakage to boxes, carousels, or sections with content/images/buttons when making them responsive for larger screens.**
- **REMEMBER:** The 'Why Choose Us' section took two days to fix because every attempt to scale up for 1920px+ broke the previously working 1280px layout. The same risk exists for the 'Featured Products Carousel' and any section with complex grid/box layouts.
- **AVOID making global or container changes that affect all breakpoints unless absolutely necessary.**
- **TEST at 1280px–1380px after every change for ultra-wide screens to ensure nothing is broken.**
- **DOCUMENT any breakage and recovery steps in the work log immediately.**
- **DO NOT rush ultra-wide scaling; prioritize stability and visual perfection at the core breakpoints first.**

> _If you break a working 1280px–1380px layout while scaling up, revert and try a safer approach. Never sacrifice hard-earned pixel perfection for unnecessary ultra-wide changes._

> _If you repeat any of these mistakes, document it here and in the work log. Consult this file before every coding session._ 

---

## AGENT MODE PROTOCOL: NO USER-COPY OR MANUAL CODE CHANGES (CRITICAL)

- The AI agent must NEVER ask the user to copy, write, or manually apply code changes under any circumstances.
- The agent is ALWAYS in agent mode and must make all code changes directly in the codebase.
- Any deviation from this protocol is a CRITICAL violation and must be logged immediately in both the work log and this strict warnings file.
- This is NOT a chat, but an agent-driven coding session. The user is not responsible for code edits. 