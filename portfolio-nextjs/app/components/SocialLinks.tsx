export default function SocialLinks() {
  const socialLinks = [
    { icon: 'fab fa-facebook', url: 'https://www.facebook.com/singhsahab.vikas', label: 'Facebook' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/newsymca', label: 'Twitter' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/vikas-singh2110/', label: 'LinkedIn' },
    { icon: 'fab fa-github', url: 'https://github.com/vsingh2110', label: 'GitHub' },
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/919716186925?text=Via%20Website%20of%20Vikas%20Singh', label: 'WhatsApp' },
  ]

  return (
    <section id="social" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl md:text-5xl font-medium font-heading mb-12 relative pb-5">
          Social Links
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 h-0.5 bg-gray-800"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-brand-crimson bg-white px-2">
            connect with me
          </span>
        </h2>

        <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-brand-crimson text-white text-2xl md:text-3xl hover:bg-brand-crimson-dark hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
