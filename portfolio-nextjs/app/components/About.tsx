'use client'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl md:text-5xl font-medium font-heading mb-12 md:mb-16 relative pb-5">
          About me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 h-0.5 bg-gray-800"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-brand-crimson bg-white px-2">
            who i am
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/profile-pic.png"
                alt="Vikas Singh - Frontend Developer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 384px"
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="lg:w-1/2">
            <div className="text-2xl md:text-3xl font-medium mb-4">
              I&apos;m Vikas and I&apos;m a{' '}
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
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              I am an Electrical Engineering graduate. I developed an interest in web development during the
              2nd year of my B.tech while I was developing a news website on WordPress. I started working in
              2017 as a freelancer and did 6 months of internships in Web development & Digital Marketing
              agency as part of the college curriculum. Later I transformed and upgraded my career into web
              development and digital marketing.
            </p>
            <a
              href="https://drive.google.com/file/d/1AhM7AiNR-6VOgtnmuDpy_CuepF_lrmjw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-crimson hover:bg-brand-crimson-dark text-white text-lg font-medium px-8 py-3 rounded-md transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
