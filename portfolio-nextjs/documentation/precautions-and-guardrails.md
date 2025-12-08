# Precautions and Guardrails

**Project:** Vikas Singh Portfolio & Blog Website  
**Last Updated:** December 9, 2025  
**Purpose:** Critical restrictions and safety measures

---

## 🚨 WHAT NOT TO DO

### **1. Never Break Existing Functionality**
- ✅ Always test before and after changes
- ✅ Ask user before removing features
- ✅ Keep backups of working code

### **2. Never Skip Testing**
- ❌ Don't assume it works
- ✅ Test on mobile AND desktop
- ✅ Test all interactive elements
- ✅ Run `npm run build` before considering complete

### **3. Never Commit Sensitive Data**
- ❌ Don't commit `.env.local`
- ❌ Don't commit API keys
- ❌ Don't commit passwords
- ✅ Use environment variables
- ✅ Keep `.gitignore` updated

### **4. Never Make Giant Changes**
- ❌ Don't refactor entire codebase at once
- ✅ Make small, incremental changes
- ✅ Test after each change
- ✅ Commit frequently with clear messages

### **5. Never Ignore Accessibility**
- ❌ Don't skip alt text
- ❌ Don't use poor color contrast
- ❌ Don't break keyboard navigation
- ✅ Follow WCAG 2.1 Level AA guidelines

### **6. Never Sacrifice Performance**
- ❌ Don't use large unoptimized images
- ❌ Don't load unnecessary JavaScript
- ❌ Don't skip lazy loading
- ✅ Keep Lighthouse scores above 90

---

## ⚠️ CRITICAL WARNINGS

### **Package Updates**
- Only update for security patches
- Always test after updates
- Never update blindly with `npm update`
- Get user approval for major version changes

### **Breaking Changes**
- Never rename files without user permission
- Never change routing structure without approval
- Never modify existing components drastically
- Always document breaking changes

### **Data Loss Prevention**
- Never delete files without backing up
- Never overwrite content without checking
- Keep Git history clean but preserved

---

## ✅ SAFETY CHECKLIST

Before pushing code:
- ✅ No TypeScript errors
- ✅ No ESLint errors  
- ✅ Build succeeds
- ✅ Tested responsively
- ✅ No console errors
- ✅ Documentation updated
- ✅ User approved (if major change)

---

**Last Updated:** December 9, 2025
