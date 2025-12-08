export default function Services() {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Front End Development',
      description: 'HTML, CSS, JavaScript, Tailwind, React Js/Next Js, Etc.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Digital Marketing & Paid Ads',
      description: 'SEO, SMO, SMM, Website Optimization, Paid Ads on Google/FB/Linkedin',
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Wordpress and Shopify Design',
      description: 'Designing of websites on wordpress and shopify platforms',
    },
  ]

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl md:text-5xl font-medium font-heading mb-12 md:mb-16 relative pb-5">
          My services
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 h-0.5 bg-gray-800"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-brand-crimson bg-gray-50 px-2">
            what i provide
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="mb-4">
                <i className={`${service.icon} text-5xl text-brand-crimson`}></i>
              </div>
              <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
