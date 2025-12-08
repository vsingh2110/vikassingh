import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'

// Sample blog data - In a real app, this would come from a CMS or database
interface BlogPost {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  author: string
  content: string
}

const blogPosts: Record<string, BlogPost> = {
  'getting-started-with-nextjs': {
    title: 'Getting Started with Next.js 14: A Comprehensive Guide',
    excerpt: 'Learn how to build modern web applications with Next.js 14',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop&q=80',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Web Development',
    author: 'Vikas Singh',
    content: `
      <h2>Introduction</h2>
      <p>Next.js 14 has revolutionized the way we build web applications. With the introduction of the App Router, Server Components, and improved performance features, it's become the go-to framework for React developers.</p>
      
      <h2>Why Next.js?</h2>
      <p>Next.js provides several key benefits that make it stand out:</p>
      <ul>
        <li><strong>Server-Side Rendering (SSR)</strong>: Improves SEO and initial page load performance</li>
        <li><strong>Static Site Generation (SSG)</strong>: Pre-render pages at build time for maximum speed</li>
        <li><strong>API Routes</strong>: Build your backend and frontend in one place</li>
        <li><strong>Image Optimization</strong>: Automatic image optimization and lazy loading</li>
        <li><strong>TypeScript Support</strong>: Built-in TypeScript support out of the box</li>
      </ul>

      <h2>Getting Started</h2>
      <p>To create a new Next.js project, run:</p>
      <pre><code>npx create-next-app@latest my-app --typescript --tailwind</code></pre>
      
      <h2>App Router vs Pages Router</h2>
      <p>Next.js 14 introduces the App Router, which provides several improvements over the traditional Pages Router:</p>
      <ul>
        <li>React Server Components by default</li>
        <li>Improved layouts and nested routing</li>
        <li>Built-in loading and error states</li>
        <li>Streaming and Suspense support</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Next.js 14 is a powerful framework that combines the best of server-side and client-side rendering. Whether you're building a simple blog or a complex web application, Next.js provides the tools and flexibility you need.</p>
    `,
  },
  'digital-marketing-trends-2025': {
    title: 'Top Digital Marketing Trends to Watch in 2025',
    excerpt: 'Explore the latest digital marketing trends for 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'Digital Marketing',
    author: 'Vikas Singh',
    content: `
      <h2>Introduction</h2>
      <p>Digital marketing is constantly evolving, and staying ahead of the trends is crucial for success. Here are the top trends to watch in 2025.</p>
      
      <h2>1. AI-Powered Marketing</h2>
      <p>Artificial Intelligence is transforming digital marketing in several ways:</p>
      <ul>
        <li>Personalized content recommendations</li>
        <li>Automated customer service chatbots</li>
        <li>Predictive analytics for customer behavior</li>
        <li>AI-generated content and copy</li>
      </ul>

      <h2>2. Voice Search Optimization</h2>
      <p>With the rise of smart speakers and voice assistants, optimizing for voice search is more important than ever. Focus on:</p>
      <ul>
        <li>Natural language keywords</li>
        <li>Question-based content</li>
        <li>Local SEO optimization</li>
        <li>Featured snippets</li>
      </ul>

      <h2>3. Video Marketing Dominance</h2>
      <p>Video content continues to dominate, with short-form videos leading the charge:</p>
      <ul>
        <li>TikTok and Instagram Reels for brand awareness</li>
        <li>YouTube Shorts for educational content</li>
        <li>Live streaming for real-time engagement</li>
        <li>Interactive video content</li>
      </ul>

      <h2>4. Privacy-First Marketing</h2>
      <p>With increasing privacy concerns and regulations, marketers must adapt to a cookieless future:</p>
      <ul>
        <li>First-party data collection</li>
        <li>Contextual advertising</li>
        <li>Transparent data practices</li>
        <li>Customer consent management</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Staying ahead of these trends will help you maintain a competitive edge in 2025. Focus on creating value for your audience while respecting their privacy and preferences.</p>
    `,
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Vikas Singh Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      
      <article className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/blog" className="text-brand-crimson hover:underline">
              ← Back to Blog
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-brand-crimson text-white px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="text-gray-600">
                By <span className="font-medium text-gray-900">{post.author}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:font-semibold
              prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:my-4 prose-li:text-gray-700
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-a:text-brand-crimson prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/images/profile-pic.png"
                  alt={post.author}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{post.author}</h3>
                <p className="text-gray-600">
                  Frontend Developer & Digital Marketing Expert
                </p>
              </div>
            </div>
          </div>

          {/* Back to Blog Link */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-block bg-brand-crimson hover:bg-brand-crimson-dark text-white font-medium px-8 py-3 rounded-md transition-colors duration-300"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </article>

      <Footer />
      <ScrollToTop />
    </>
  )
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
