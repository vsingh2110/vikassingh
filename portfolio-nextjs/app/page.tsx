import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      {/* TODO: Add Journey, Projects, and Team components */}
      <Contact />
      <SocialLinks />
      <Footer />
      <ScrollToTop />
    </>
  )
}
