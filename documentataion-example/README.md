# Documentation — Phantom Medical Imaging Next.js Project

**Welcome to the project documentation!** This folder contains all the information you need to understand, work on, and contribute to the Phantom Medical Imaging website migration project.

**Last Updated:** November 27, 2025

---

## 🚀 QUICK START FOR NEW AI AGENTS

**If you're an AI agent starting fresh, read these files IN THIS ORDER:**

1. **[AI-AGENT-CRITICAL-GUIDELINES.md](./AI-AGENT-CRITICAL-GUIDELINES.md)** ⚠️ **START HERE** ⚠️
   - Absolute rules you MUST follow
   - Research-first methodology
   - Mobile/desktop separation rule
   - Unauthorized changes prohibition
   - Documentation protocols

2. **[CURRENT-STATUS.md](./CURRENT-STATUS.md)** 📊
   - What's working right now
   - What's broken or in progress
   - Recent fixes and known issues
   - Immediate next steps

3. **[SESSION-HANDOVER-2025-11-27.md](./SESSION-HANDOVER-2025-11-27.md)** 🔄 **LATEST HANDOVER**
   - Complete context from last session
   - Unresolved issues and next steps
   - Key files modified
   - User communication style

4. **[project-overview.md](./project-overview.md)** 📋
   - Project background and goals
   - Tech stack overview
   - Migration journey and history
   - Key features and implementations

5. **[Latest Daily Log](./daily-logs/)** 📅
   - Most recent work session
   - Current context and decisions
   - What was attempted, what worked, what failed

**Time Investment:** 20-30 minutes to read the above  
**Result:** You'll avoid 90% of common mistakes and save 8+ hours of debugging

---

## 📂 DOCUMENTATION STRUCTURE

### **🚨 Critical Guidelines (Read First)**

| File | Purpose | When to Read |
|------|---------|--------------|
| **AI-AGENT-CRITICAL-GUIDELINES.md** | Mandatory rules for all AI agents | Every session start |
| **CURRENT-STATUS.md** | Real-time project status | Every session start |
| **SESSION-HANDOVER-*.md** | Context from previous AI session | Every session start |
| **precautions-and-guardrails.md** | Development restrictions & safety rules | Before major changes |

### **📖 Project Information**

| File | Purpose | When to Read |
|------|---------|--------------|
| **project-overview.md** | Complete project context & history | First time, or when confused |
| **development-roadmap.md** | Future plans & milestones | Planning new features |
| **tech-stack-reference.md** | All technologies & configurations | Working with specific tech |
| **FINAL-ARCHITECTURE.md** | Three-layer site structure explanation | Understanding site structure |
| **GOOGLE-MAPS-ISSUE-COMPLETE-HISTORY.md** | 🗺️ Map marker positioning issue history | Before ANY map-related work |

### **💻 Development Guides**

| File | Purpose | When to Read |
|------|---------|--------------|
| **best-practices.md** | Coding standards & conventions | During development |
| **general-development-notes.md** | Compiled technical knowledge | When stuck or researching |
| **strict-warnings-to-ai-assistant.md** | Historical mistakes to avoid | Periodically for reminders |

### **📁 Folders**

| Folder | Contents | Purpose |
|--------|----------|---------|
| **daily-logs/** | Session-specific work logs | Historical context, debugging |
| **dev-notes/** | Feature-specific technical notes | Deep dives on implementations |
| **international-plan/** | ⚠️ **DO NOT TOUCH** | Future international expansion |
| **documentation-example/** | Reference from another project | Inspiration, not for editing |

---

## 📚 FILE DESCRIPTIONS

### **🔴 AI-AGENT-CRITICAL-GUIDELINES.md**
**The most important file in this entire repository.**

Contains:
- The Golden Rule (research-first methodology)
- Mobile/desktop separation (absolute rule)
- Unauthorized changes prohibition
- Documentation protocols
- Work session workflow
- Past failures and lessons learned

**Why it exists:** Historical incidents where AI agents broke working features, wasted hours on trial-and-error, or lost valuable context through poor documentation.

---

### **📊 CURRENT-STATUS.md**
**Real-time snapshot of the project.**

Contains:
- Current focus (what we're working on right now)
- Working features (what's stable)
- In-progress items (what's being built)
- Known issues (what's broken)
- Recent activity log (what just happened)
- Immediate next steps (what to do next)

**Updated:** After every significant work session  
**Read before:** Starting any new work

---

### **📋 project-overview.md**
**The complete story of this project.**

Contains:
- Executive summary
- Project goals and business requirements
- Technical architecture
- Migration journey (timeline of decisions)
- Key implementations (Firebase, EmailJS, etc.)
- Current status and future vision
- Documentation maintenance schedule

**Length:** ~15 minutes to read  
**When to read:** First time joining project, or need context on decisions

---

### **🛣️ development-roadmap.md**
**Where we've been, where we're going.**

Contains:
- Project history and decision log
- Current phase milestones
- Future phases (3-6 months)
- Success metrics and KPIs
- Risk factors and contingencies
- Review schedule

**Updated:** Bi-weekly or when priorities change  
**When to read:** Planning new features, estimating timelines

---

### **⚠️ precautions-and-guardrails.md**
**The safety manual for development.**

Contains:
- Absolute rules (zero tolerance policies)
- Technical guardrails (CSS, components, performance)
- Security guardrails (environment variables, API keys)
- Workflow checklists
- Common mistakes to avoid
- Success patterns

**When to read:** Before making significant changes, or when uncertain

---

### **✅ best-practices.md**
**How to write good code for this project.**

Contains:
- UI/UX best practices
- Code style and conventions
- TypeScript standards
- Component structure
- Tailwind CSS patterns
- Performance optimization
- Accessibility guidelines
- Testing checklists

**When to read:** During active development, code reviews

---

### **🔧 tech-stack-reference.md**
**Complete technical documentation.**

Contains:
- All dependencies with versions
- Configuration examples
- Environment variables
- API integrations
- Troubleshooting common issues
- Version update strategy

**When to read:** Working with specific technology, debugging integrations

---

### **📝 general-development-notes.md**
**Compiled knowledge from all sessions.**

Contains:
- Technical decisions and rationale
- Best practices discovered
- Resources and tools
- Performance optimizations
- Common patterns
- Lessons learned

**Updated:** During development (real-time)  
**When to read:** Researching approaches, need context on decisions

---

### **⚠️ strict-warnings-to-ai-assistant.md**
**Self-critical checklist of repeated mistakes.**

Contains:
- Documentation protocols
- UI/UX separation rules
- Code preservation rules
- Tailwind conventions
- Common repeated errors

**Purpose:** Quick reference for rules that are frequently violated  
**When to read:** Session start, or as reminder

---

## 📅 DAILY LOGS

### **Purpose:**
- Document each work session chronologically
- Preserve decision-making process
- Enable debugging ("What changed yesterday?")
- Provide context for future developers/AI agents

### **Naming Convention:**
```
daily-logs/
├── 2024-05-21-footer-refactor.md
├── 2025-07-10-hero-section-separation-critical.md
├── 2025-07-11-google-maps-integration.md
├── 2025-07-21-work-log.md
└── 2025-11-22-[today's-work].md
```

### **Structure:**
```markdown
# Work Log: [Date]

## Session Context
- Time: Morning/Evening, Office/Home
- Goal: What we're trying to accomplish

## Work Completed
- Feature 1 implemented
- Bug fixed
- Decision made (with rationale)

## Issues Encountered
- Problem description
- Attempted solutions
- Final resolution

## Next Steps
- Pending tasks
- Blockers to address
```

### **When to Create:**
- Start of each work session
- When returning after a break

### **When to Update:**
- **In real-time** as you work (not at end!)
- After each significant decision
- When encountering issues
- When completing tasks

---

## 🌍 INTERNATIONAL PLAN FOLDER

⚠️ **DO NOT MODIFY THIS FOLDER** ⚠️

**Contents:** Future plans for international expansion (multi-language, country-specific content)

**Status:** Planning phase only, not immediate priority

**Files:**
- `2025-07-25-country-redirect-solutions.md`
- `2025-07-25-folder-structure-visual.md`
- `2025-07-25-international-seo-implementation-guide.md`
- `2025-07-25-website-migration-international-expansion-strategy.md`

**When relevant:** Phase 6 of roadmap (May 2026+)

---

## 🔄 DOCUMENTATION MAINTENANCE

### **Who Updates What:**

| File | Updated By | Frequency |
|------|-----------|-----------|
| **AI-AGENT-CRITICAL-GUIDELINES.md** | After major incidents | As needed |
| **CURRENT-STATUS.md** | Every work session | Real-time |
| **project-overview.md** | Major milestones | Monthly |
| **development-roadmap.md** | Planning changes | Bi-weekly |
| **precautions-and-guardrails.md** | New patterns emerge | As needed |
| **best-practices.md** | New standards adopted | As needed |
| **tech-stack-reference.md** | Dependency changes | As needed |
| **general-development-notes.md** | During development | Real-time |
| **daily-logs/[date].md** | Every work session | Real-time |

### **Real-Time Documentation Rule:**
> **Update documentation DURING work, not after.** AI agents forget 90% of details when asked to recall at session end.

---

## 🎯 COMMON SCENARIOS

### **Scenario 1: "I'm a new AI agent starting work"**
1. Read **AI-AGENT-CRITICAL-GUIDELINES.md** (10 min)
2. Read **CURRENT-STATUS.md** (5 min)
3. Read **project-overview.md** (15 min)
4. Scan latest **daily-logs/** entry (5 min)
5. Create new daily log entry
6. Start work with full context ✅

---

### **Scenario 2: "User reported a bug"**
1. Check **CURRENT-STATUS.md** - Is this a known issue?
2. Check recent **daily-logs/** - Did we work on this recently?
3. Check **precautions-and-guardrails.md** - Any related rules?
4. Research official documentation (15 min)
5. Implement fix
6. Update **CURRENT-STATUS.md** and daily log
7. Document solution in **general-development-notes.md** ✅

---

### **Scenario 3: "Implementing a new feature"**
1. Check **development-roadmap.md** - Is this planned?
2. Read **best-practices.md** - Coding standards
3. Read **tech-stack-reference.md** - Relevant technologies
4. Check **precautions-and-guardrails.md** - Any restrictions?
5. Document plan in daily log
6. Implement with real-time documentation
7. Test thoroughly
8. Update **CURRENT-STATUS.md** ✅

---

### **Scenario 4: "Something broke unexpectedly"**
1. Check **daily-logs/** - What changed recently?
2. Check **strict-warnings-to-ai-assistant.md** - Common mistakes?
3. Check **precautions-and-guardrails.md** - Did we violate a rule?
4. Review Git history - When did it break?
5. Debug and fix
6. Document incident and solution
7. Update guidelines if needed ✅

---

### **Scenario 5: "Need to understand a decision"**
1. Search **general-development-notes.md** for context
2. Check **project-overview.md** for historical decisions
3. Search **daily-logs/** for the timeframe
4. Ask user if still unclear ✅

---

## 🚫 WHAT NOT TO DO

### **❌ Don't:**
- Skip reading AI-AGENT-CRITICAL-GUIDELINES.md
- Modify code without reading CURRENT-STATUS.md
- Touch international-plan/ folder
- Overwrite existing daily logs (append only!)
- Wait until session end to document
- Modify components not in user's request
- Merge mobile and desktop code
- Delete reference code
- Skip testing on real mobile devices

### **✅ Do:**
- Read documentation before starting
- Document in real-time as you work
- Update multiple files concurrently
- Ask questions when uncertain
- Test thoroughly before committing
- Only modify requested components
- Keep mobile/desktop separate
- Preserve reference code

---

## 📞 NEED HELP?

### **If Documentation Doesn't Answer Your Question:**
1. Search official technology documentation
2. Search GitHub issues for the technology
3. Ask user for clarification
4. Document the question for future reference

### **If You Find a Gap in Documentation:**
1. Note what information was missing
2. Add it to the relevant file
3. Update this README if needed

---

## 🎓 LESSONS LEARNED

### **Why This Documentation Exists:**

**July 21, 2025:** AI agent broke footer map while fixing YouTube embed (unauthorized changes)  
→ Created "UNAUTHORIZED CHANGES" rule

**Multiple Sessions:** Work logs overwritten, context lost  
→ Created "APPEND ONLY" rule

**Multiple Sessions:** AI agents forgot details when asked to document at session end  
→ Created "REAL-TIME DOCUMENTATION" rule

**July 10, 2025:** Mobile and desktop hero sections conflicted  
→ Created "MOBILE/DESKTOP SEPARATION" rule

**Every incident taught us something. These docs prevent history from repeating.**

---

## 🔮 FUTURE IMPROVEMENTS

### **Planned Documentation Enhancements:**
- [ ] Video walkthrough of project structure
- [ ] Architecture diagrams
- [ ] Component relationship map
- [ ] Decision matrix for common choices
- [ ] FAQ section
- [ ] Contribution guide for external developers

---

## 📊 DOCUMENTATION STATS

**Total Files:** 10 core documentation files  
**Total Daily Logs:** 10+ entries  
**Last Major Update:** November 22, 2025  
**Next Review:** December 2025

---

## 🏆 SUCCESS CHECKLIST

**You're ready to work on this project when you can answer:**

- [ ] What are the 3 absolute rules for this project?
- [ ] Where is the current status documented?
- [ ] What's the difference between mobile and desktop hero sections?
- [ ] Why is documentation done in real-time?
- [ ] Where do I find Firebase configuration?
- [ ] What's the primary brand color?
- [ ] What should I read before starting any work?
- [ ] Where do I document today's work?

**If you can answer these, you're good to go! 🚀**

---

## 📝 META

**This README Last Updated:** November 22, 2025  
**Maintained By:** AI Agents and Human Developer  
**Purpose:** Onboarding new developers and AI agents  
**Next Review:** When documentation structure changes

---

**Ready to start? Begin with [AI-AGENT-CRITICAL-GUIDELINES.md](./AI-AGENT-CRITICAL-GUIDELINES.md) → Good luck! 💪**
