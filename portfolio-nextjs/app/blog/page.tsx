import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Blog | Vikas Singh',
  description: 'Read articles about web development, digital marketing, and technology by Vikas Singh',
}

// Sample blog data - In a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 14: A Comprehensive Guide',
    excerpt: 'Learn how to build modern web applications with Next.js 14, including the new App Router, Server Components, and more.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Web Development',
  },
  {
    id: 2,
    slug: 'digital-marketing-trends-2025',
    title: 'Top Digital Marketing Trends to Watch in 2025',
    excerpt: 'Explore the latest digital marketing trends including AI-powered marketing, voice search optimization, and personalization strategies.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'Digital Marketing',
  },
  {
    id: 3,
    slug: 'tailwind-css-best-practices',
    title: 'Tailwind CSS Best Practices for Production',
    excerpt: 'Discover best practices for using Tailwind CSS in production applications, including optimization techniques and component patterns.',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop&q=80',
    date: '2025-01-05',
    readTime: '10 min read',
    category: 'CSS',
  },
  {
    id: 4,
    slug: 'seo-strategies-for-2025',
    title: 'Advanced SEO Strategies for Higher Rankings',
    excerpt: 'Master advanced SEO techniques including technical SEO, content optimization, and link building strategies for better search rankings.',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&auto=format&fit=crop&q=80',
    date: '2025-01-01',
    readTime: '7 min read',
    category: 'SEO',
  },
  {
    id: 5,
    slug: 'react-hooks-deep-dive',
    title: 'React Hooks: A Deep Dive into useState and useEffect',
    excerpt: 'Understand React Hooks in depth with practical examples, common pitfalls, and advanced patterns for building better components.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=80',
    date: '2024-12-25',
    readTime: '12 min read',
    category: 'React',
  },
  {
    id: 6,
    slug: 'shopify-store-optimization',
    title: 'How to Optimize Your Shopify Store for Conversions',
    excerpt: 'Learn proven strategies to optimize your Shopify store, improve user experience, and increase conversion rates.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80',
    date: '2024-12-20',
    readTime: '9 min read',
    category: 'E-commerce',
  },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights and articles about web development, digital marketing, and technology
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 bg-brand-crimson text-white text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-brand-crimson transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-brand-crimson font-medium group-hover:underline">
                      Read more
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}
