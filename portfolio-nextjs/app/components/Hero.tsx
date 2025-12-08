'use client'

import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/banner1.png')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-white font-heading">
          <div className="text-2xl md:text-3xl mb-2">Hello, my name is</div>
          <div className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 -ml-1">
            Vikas Singh
          </div>
          <div className="text-3xl md:text-4xl lg:text-5xl mb-6">
            And I&apos;m a{' '}
            <span className="text-brand-crimson">
              <TypeAnimation
                sequence={[
                  'Front End Developer',
                  2000,
                  'Digital Marketer',
                  2000,
                  'Wordpress and Shopify Designer',
                  2000,
                  'Paid Ads Google/FB',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>
          <a
            href="#contact"
            className="inline-block bg-brand-crimson hover:bg-brand-crimson-dark text-white text-lg font-medium px-8 py-3 rounded-md transition-colors duration-300 mt-4"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  )
}
