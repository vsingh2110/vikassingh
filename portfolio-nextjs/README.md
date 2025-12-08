# Vikas Singh - Portfolio & Blog Website

A modern, responsive portfolio and blog website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ **Modern Tech Stack**: Next.js 14.2.18, TypeScript, Tailwind CSS
- ✅ **Responsive Design**: Mobile-first approach, works on all devices
- ✅ **Portfolio Sections**:
  - Hero section with typing animation
  - About me with profile
  - Services showcase
  - Skills with progress bars
  - Contact form
  - Social media links
- ✅ **Blog Functionality**:
  - Blog listing page with grid layout
  - Individual blog post pages
  - Dynamic routing with [slug]
  - SEO-optimized
- ✅ **Performance Optimized**:
  - Next.js Image component for automatic optimization
  - Static site generation (SSG) for blog posts
  - Code splitting and lazy loading
- ✅ **SEO Ready**: Proper metadata, semantic HTML, OpenGraph tags
- ✅ **Accessibility**: WCAG 2.1 Level AA compliant
- ✅ **Smooth Animations**: Typing effects, hover transitions, scroll animations

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/vsingh2110/portfolio-nextjs.git
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Other Platforms

This project can also be deployed to:
- Netlify
- AWS Amplify
- Railway
- Self-hosted

## 📂 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── components/         # React components
│   ├── blog/              # Blog pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── public/
│   └── images/            # Static images
├── documentation/         # Project documentation
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change brand colors:
```ts
colors: {
  'brand-crimson': '#dc143c',
  'brand-crimson-dark': '#a00e2e',
}
```

### Content

- **Portfolio sections**: Edit component files in `app/components/`
- **Blog posts**: Add new posts to `blogPosts` object in `app/blog/[slug]/page.tsx`

## 📝 Adding Blog Posts

Currently, blog posts are stored as JavaScript objects. To add a new post:

1. Add entry to `blogPosts` in `app/blog/page.tsx` (for listing)
2. Add full content to `blogPosts` in `app/blog/[slug]/page.tsx`

## 🧪 Testing

```bash
# Type checking
npm run lint

# Build test
npm run build
```

## 📚 Documentation

Comprehensive documentation is available in the `documentation/` folder.

## 🔧 Tech Stack

- **Framework**: Next.js 14.2.18
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1
- **Fonts**: Google Fonts (Poppins, Ubuntu)
- **Icons**: Font Awesome 6.5.1
- **Animations**: react-type-animation

## 👤 Author

**Vikas Singh**

- GitHub: [@vsingh2110](https://github.com/vsingh2110)
- LinkedIn: [vikas-singh2110](https://www.linkedin.com/in/vikas-singh2110/)
- Email: vsingh2110@gmail.com

## 📞 Support

If you have any questions:
- Open an issue on GitHub
- Email: vsingh2110@gmail.com
- WhatsApp: +91-9716186925

---

**Built with ❤️ using Next.js and Tailwind CSS**
