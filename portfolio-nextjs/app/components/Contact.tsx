export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl md:text-5xl font-medium font-heading mb-12 md:mb-16 relative pb-5">
          Contact me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 h-0.5 bg-gray-800"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-brand-crimson bg-gray-50 px-2">
            get in touch
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-medium mb-4">Get in Touch</h3>
            <p className="text-gray-700 text-base md:text-lg mb-8">
              Please email or call me for any queries or requests related to Drupal, Wordpress, Paid Ads on
              Google/FB/Linkedin, or any Digital Marketing Support.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-brand-crimson text-2xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-medium mb-1">Address</h4>
                  <p className="text-gray-600">Faridabad, Delhi(NCR) Haryana</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fa fa-phone text-brand-crimson text-2xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-medium mb-1">Mobile</h4>
                  <a
                    href="tel:+91-9716186925"
                    className="text-gray-600 hover:text-brand-crimson transition-colors"
                  >
                    +91-9716186925
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-envelope text-brand-crimson text-2xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-medium mb-1">Send Email</h4>
                  <a
                    href="mailto:vsingh2110@gmail.com"
                    className="text-gray-600 hover:text-brand-crimson transition-colors break-all"
                  >
                    vsingh2110@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-medium mb-6">Message me</h3>
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson focus:border-transparent"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson focus:border-transparent"
              />
              <textarea
                cols={30}
                rows={10}
                placeholder="Message.."
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson focus:border-transparent resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-brand-crimson hover:bg-brand-crimson-dark text-white text-lg font-medium px-8 py-3 rounded-md transition-colors duration-300"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
