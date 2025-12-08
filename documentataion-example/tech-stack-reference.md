# Tech Stack Reference

**Project:** Phantom Medical Imaging - Next.js Migration  
**Last Updated:** November 22, 2025  
**Purpose:** Comprehensive technical documentation of all technologies, packages, and integrations

---

## 📦 CORE DEPENDENCIES

### **Next.js 15.3.5**
**Purpose:** React framework for production  
**Why Chosen:** Server-side rendering, routing, performance, image optimization

**Key Features Used:**
- App Router (modern routing system)
- Server Components
- API Routes
- Image Optimization (`next/image`)
- Third-party Scripts (`@next/third-parties`)
- Turbopack for fast development

**Configuration:** `next.config.js`
```js
module.exports = {
  images: {
    remotePatterns: [
      { hostname: 'example.com' }
    ]
  },
  // Bundle analyzer enabled
  webpack: (config) => { ... }
}
```

**Documentation:** https://nextjs.org/docs

---

### **React 18**
**Purpose:** UI library for building components  
**Version:** ^18.0.0

**Key Features Used:**
- Hooks (useState, useEffect, useCallback, useMemo)
- Server Components (via Next.js)
- Suspense boundaries
- Error boundaries

**Documentation:** https://react.dev/

---

### **TypeScript 5**
**Purpose:** Type-safe JavaScript  
**Why Chosen:** Catch errors at compile-time, better IDE support, maintainability

**Configuration:** `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",
    "strict": true,
    "moduleResolution": "bundler"
  }
}
```

**Documentation:** https://www.typescriptlang.org/docs/

---

## 🎨 STYLING & UI

### **Tailwind CSS 3.4.0**
**Purpose:** Utility-first CSS framework  
**Why Chosen:** Rapid development, consistency, no CSS file bloat

**Configuration:** `tailwind.config.js`
```js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#59913d',
        'brand-green-dark': '#255a0a',
      },
    },
  },
}
```

**Key Utilities Used:**
- Flexbox/Grid for layouts
- Responsive design (mobile-first)
- Custom colors for branding
- Transitions and animations
- Typography utilities

**PostCSS Plugins:**
- `autoprefixer` - Browser compatibility

**Documentation:** https://tailwindcss.com/docs

---

## 🔥 BACKEND & DATA

### **Firebase 10.14.1**
**Purpose:** Backend-as-a-Service (BaaS)  
**Services Used:** Firestore (NoSQL database)

**Why Chosen:**
- No backend server needed
- Real-time capabilities
- Easy form data storage
- Generous free tier
- Quick setup

**Configuration:** `src/lib/firebase.ts`
```tsx
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length === 0 
  ? initializeApp(firebaseConfig) 
  : getApps()[0];

export const db = getFirestore(app);
```

**Firestore Collections:**
- `contact_forms` - Contact page submissions
- `enquiry_forms` - Product/service enquiries

**Document Structure Example:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Interested in CT Scanner",
  "createdAt": "2025-11-22T10:30:00Z",
  "status": "pending"
}
```

**Security Note:**
- Environment variables for sensitive config
- Firestore security rules should be configured
- Client-side operations only (no admin SDK)

**Documentation:** https://firebase.google.com/docs

---

### **EmailJS (@emailjs/browser 4.4.1)**
**Purpose:** Send emails from client-side JavaScript  
**Why Chosen:** No backend needed, easy integration, free tier

**Migration Note:**
- Previously used `emailjs-com` (deprecated)
- Migrated to `@emailjs/browser` on July 16, 2025

**Configuration:** `src/lib/emailjs.ts`
```tsx
import emailjs from '@emailjs/browser';

// Initialize with public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error };
  }
}
```

**Environment Variables:**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Template Variables:**
- `{{from_name}}` - Sender name
- `{{from_email}}` - Sender email
- `{{phone}}` - Phone number
- `{{message}}` - Message content

**Documentation:** https://www.emailjs.com/docs/

---

## 🎠 UI LIBRARIES & COMPONENTS

### **Swiper 11.2.10**
**Purpose:** Modern mobile touch slider  
**Why Chosen:** Feature-rich, performant, responsive

**Used For:**
- Hero image slider
- Testimonials carousel
- Product galleries (future)

**Example Implementation:**
```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

<Swiper
  modules={[Autoplay, Pagination, Navigation, EffectFade]}
  effect="fade"
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  navigation
  loop={true}
>
  <SwiperSlide>...</SwiperSlide>
  <SwiperSlide>...</SwiperSlide>
</Swiper>
```

**Configuration Notes:**
- CSS imports required for styling
- Modules must be explicitly imported
- Mobile vs desktop configurations different

**Documentation:** https://swiperjs.com/

---

### **React-YouTube 10.1.0**
**Purpose:** React component for YouTube player  
**Why Chosen:** Easy YouTube embed with React

**Usage:**
```tsx
import YouTube from 'react-youtube';

<YouTube
  videoId="dQw4w9WgXcQ"
  opts={{
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  }}
  onReady={(event) => {
    event.target.pauseVideo();
  }}
/>
```

**Known Issues (Historical):**
- Had issues with black screen on July 21, 2025
- Resolved by simplifying to basic iframe
- May revisit if issues persist

**Documentation:** https://www.npmjs.com/package/react-youtube

---

## 🔌 THIRD-PARTY INTEGRATIONS

### **Google Maps JavaScript API**
**Purpose:** Display business location on website  
**Implementation:** Footer map

**Configuration:**
```tsx
import { GoogleMapsEmbed } from '@next/third-parties/google';

<GoogleMapsEmbed
  apiKey="YOUR_API_KEY"
  height={400}
  width="100%"
  mode="place"
  q="Your Business Name, Address"
/>
```

**Special Note:**
- API key is hardcoded (not in env vars)
- Reason: Performance issues with lazy loading + environment variables
- Security managed via Google Cloud Platform restrictions
- Decision made July 11, 2025

**Documentation:** https://developers.google.com/maps/documentation

---

### **Google Analytics 4**
**Purpose:** Website analytics and user tracking  
**Implementation:** Via `@next/third-parties`

**Configuration:**
```tsx
import { GoogleAnalytics } from '@next/third-parties/google';

<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

**Documentation:** https://developers.google.com/analytics

---

### **Font Awesome**
**Purpose:** Icon library  
**Implementation:** CDN link in HTML

**Usage:**
```tsx
<i className="fas fa-phone"></i>
<i className="fab fa-facebook"></i>
<i className="fas fa-envelope"></i>
```

**Known Issues (Historical):**
- Icons not loading on July 21, 2025
- Caused by Content Security Policy blocking CDN
- Resolved by fixing CSP headers

**Alternative Consideration:**
- Could switch to React Icons for better bundle optimization
- Current CDN approach works, no immediate need to change

**Documentation:** https://fontawesome.com/

---

## 🛠️ DEVELOPMENT TOOLS

### **ESLint (Next.js Config)**
**Purpose:** Code linting and quality checks  
**Configuration:** `eslint-config-next 15.3.5`

**Rules Enabled:**
- React hooks rules
- Next.js specific rules
- TypeScript ESLint

**Run Linting:**
```bash
npm run lint
```

---

### **Bundle Analyzer (@next/bundle-analyzer 15.3.5)**
**Purpose:** Analyze JavaScript bundle sizes  
**Why Important:** Identify large dependencies, optimize performance

**Usage:**
```bash
npm run analyze
```

**Opens two HTML reports:**
- Client bundle analysis
- Server bundle analysis

**What to Look For:**
- Large dependencies (can they be lazy-loaded?)
- Duplicate packages
- Unused code

---

### **Critters 0.0.20**
**Purpose:** Inline critical CSS  
**Why Useful:** Faster initial page load

**Configuration:** Part of Next.js optimization

---

## 📝 DEPENDENCY MANAGEMENT

### **Package.json Overview**

```json
{
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "@next/third-parties": "^15.4.1",
    "firebase": "^10.14.1",
    "next": "15.3.5",
    "react": "^18",
    "react-dom": "^18",
    "react-youtube": "^10.1.0",
    "swiper": "^11.2.10",
    "typescript": "^5"
  },
  "devDependencies": {
    "@next/bundle-analyzer": "^15.3.5",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0"
  },
  "overrides": {
    "undici": "^6.21.1"
  }
}
```

### **Dependency Override Explanation**

**undici Override:**
- **Why:** Firebase dependencies had vulnerable undici version
- **Solution:** Force newer version via override
- **Date Added:** July 16, 2025
- **Safe:** Only updates transitive dependency, doesn't change Firebase API

---

## 🔒 ENVIRONMENT VARIABLES

### **Required Variables:**

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### **Variable Naming Convention:**
- `NEXT_PUBLIC_` prefix for client-side accessible vars
- Without prefix for server-side only vars

### **Security Notes:**
- Never commit `.env.local` to Git
- Use different values for development/production
- Rotate keys if exposed

---

## 🚀 SCRIPTS & COMMANDS

### **Development:**
```bash
npm run dev          # Start dev server with Turbopack
npm run dev --turbo  # Explicit Turbopack usage
```

### **Production:**
```bash
npm run build        # Build for production
npm run start        # Start production server
npm run analyze      # Build with bundle analysis
```

### **Code Quality:**
```bash
npm run lint         # Run ESLint
npm run type-check   # TypeScript checking (if configured)
```

### **Testing:**
```bash
npm test             # Run tests (when configured)
npm run test:watch   # Watch mode
```

---

## 🔄 VERSION UPDATE STRATEGY

### **Major Version Updates:**
- Read migration guides thoroughly
- Test in separate branch
- Check for breaking changes
- Update types if needed
- Test all features

### **Minor/Patch Updates:**
- Generally safe to update
- Still test critical features
- Review changelog for gotchas

### **Security Updates:**
- Apply immediately
- Use `npm audit` to check vulnerabilities
- Use overrides for transitive dependencies

**Check for Updates:**
```bash
npm outdated         # Show outdated packages
npm audit            # Security vulnerabilities
npm audit fix        # Auto-fix if possible
```

---

## 📊 PERFORMANCE CONSIDERATIONS

### **Bundle Size Targets:**
- Initial JS bundle: < 500KB
- First Load JS: < 200KB
- Total page weight: < 2MB

### **Optimization Techniques:**
- Code splitting (automatic via Next.js)
- Dynamic imports for heavy components
- Image optimization (Next.js Image)
- Lazy loading below-the-fold content
- Tree shaking (remove unused code)

### **Monitoring:**
- Regular Lighthouse audits
- Bundle analysis before major releases
- Monitor Core Web Vitals

---

## 🔮 FUTURE CONSIDERATIONS

### **Potential Additions:**
- **CMS:** Payload CMS, Sanity, or Contentful
- **Testing:** Jest, React Testing Library, Playwright
- **State Management:** Zustand or Jotai (if needed)
- **Forms:** React Hook Form for complex forms
- **Animation:** Framer Motion for advanced animations
- **i18n:** next-intl for internationalization
- **SEO:** next-seo for advanced SEO features

### **Alternatives to Current Stack:**
- **Styling:** Could use Styled Components, but Tailwind works well
- **Backend:** Could use Next.js API routes instead of Firebase
- **Email:** Could use SendGrid, but EmailJS is simpler

---

## 🆘 TROUBLESHOOTING

### **Common Issues:**

#### **Firebase "not defined" Error:**
- **Cause:** Scripts blocked by Content Security Policy
- **Fix:** Update CSP headers, ensure proper script loading

#### **EmailJS Not Sending:**
- **Check:** Service ID, Template ID, Public Key
- **Check:** Email template configuration in dashboard
- **Check:** Network tab for API errors

#### **Swiper Not Working:**
- **Check:** CSS imports included
- **Check:** Modules explicitly imported
- **Check:** Swiper version compatibility

#### **Build Errors:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

#### **Type Errors:**
```bash
# Regenerate types
npm run build  # Next.js generates types during build
```

---

## 📚 DOCUMENTATION LINKS

### **Official Docs:**
- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Firebase](https://firebase.google.com/docs)
- [EmailJS](https://www.emailjs.com/docs/)
- [Swiper](https://swiperjs.com/)

### **Community Resources:**
- [Next.js GitHub](https://github.com/vercel/next.js)
- [Stack Overflow - Next.js](https://stackoverflow.com/questions/tagged/next.js)
- [Tailwind GitHub](https://github.com/tailwindlabs/tailwindcss)

---

**Last Updated:** November 22, 2025  
**Next Review:** When major dependency updates needed
