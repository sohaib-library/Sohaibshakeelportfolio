import { FaReact, FaServer, FaMobile, FaBolt, FaDatabase, FaCloud } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaReact,
      title: 'Frontend Development',
      description:
        'Building modern, responsive web applications using React, Next.js, TypeScript, and Tailwind CSS with 90+ Lighthouse performance scores.',
    },
    {
      icon: FaServer,
      title: 'Full-Stack Development',
      description:
        'Creating end-to-end applications with MERN stack, Next.js App Router, and serverless solutions like Convex with complete type safety.',
    },
    {
      icon: FaMobile,
      title: 'Responsive Design',
      description:
        'Crafting mobile-first, pixel-perfect interfaces using Tailwind CSS and Shadcn UI that work seamlessly across all devices.',
    },
    {
      icon: FaBolt,
      title: 'Performance Optimization',
      description:
        'Implementing advanced caching with TanStack Query, code-splitting, and Next.js optimizations for lightning-fast user experiences.',
    },
    {
      icon: FaDatabase,
      title: 'API Integration & State Management',
      description:
        'Building robust data layers with Redux, TanStack Query, and RESTful API integrations with proper error handling and validation.',
    },
    {
      icon: FaCloud,
      title: 'DevOps & Deployment',
      description:
        'Containerizing applications with Docker, implementing CI/CD pipelines, and deploying production-ready solutions with optimized builds.',
    },
  ]

  return (
    <section
      id="services"
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #302711 0%, #191509 100%)',
      }}
    >
      {/* Custom ambience bg from design ref image */}
      <div className="absolute inset-0 pointer-events-none z-0"
           style={{
             background: 'radial-gradient(ellipse at 40% 50%, rgba(56,48,17,0.36) 0%, #191509 100%)'
           }}
      ></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 text-white rounded-full text-4xl md:text-6xl font-bold mb-4">
            WHAT
            <span className="text-yellow-400"> I DO</span>
          </div>
          {/* <h2 className="text-4xl font-bold mb-4">
            Full-Stack AI & Automation Solutions
          </h2> */}
          <p className="text-gray-400 text-lg">
            Delivering modern, scalable web solutions with cutting-edge technologies and best practices
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon
            return (
              <div
                key={idx}
                className="group relative bg-[#191509]/95 border border-[#292211] rounded-lg p-6 hover:border-yellow-500 transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/10"
                style={{
                  background: 'linear-gradient(135deg, #1b170d 60%, #231e10 100%)',
                  boxShadow: '0 2px 20px 0 rgba(48,39,17,0.09)',
                }}
              >
                <div className="text-yellow-400   w-14 rounded-full p-2 text-4xl mb-4 flex items-center justify-start">
                  <IconComponent className="transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

