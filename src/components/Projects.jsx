const Projects = () => {
  const projects = [
    {
      title: 'AI Powered Interview Portal',
      description: 'A space for AI-driven candidate screening with automated evaluations and real-time feedback for seamless hiring processes.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop',
      tech: ['FASTAPI', 'REACT', 'OPENAI', 'POSTGRESQL', 'PYTHON', 'REDUX', 'TAILWIND CSS', 'TYPESCRIPT', 'GIT'],
      gradient: ['#ec4899', '#e11d48'] // Pink to Rose
    },
    {
      title: 'Finote App',
      description: 'An intuitive mobile companion for organizing your digital wallets and analyzing your financial health with smart insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      tech: ['REACT NATIVE', 'TYPESCRIPT', 'FIREBASE', 'ZOD', 'ZUSTAND', 'TAILWIND CSS', 'API'],
      gradient: ['#9333ea', '#a855f7'] // Purple gradient
    },
    {
      title: 'Zenith Minds',
      description: 'A platform connecting students and instructors for enhanced learning experiences with interactive courses and mentorship.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop',
      tech: ['NEXT.JS', 'REACT', 'MUI', 'EXPRESS.JS', 'TYPESCRIPT', 'POSTGRESQL', 'PRISMA', 'TAILWIND CSS', 'JWT', 'REDUX'],
      gradient: ['#2563eb', '#60a5fa'] // Blue gradient
    },
    {
      title: 'Snippix',
      description: 'A platform for creating and sharing code snippets with a clean and intuitive design for developers worldwide.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      tech: ['NEXT.JS', 'REACT', 'ZUSTAND', 'TYPESCRIPT', 'SHADCN/UI', 'TAILWIND CSS', 'CODE MIRROR', 'REACT-HOOK-FORM'],
      gradient: ['#14b8a6', '#06b6d4'] // Teal to Cyan
    },
    {
      title: 'StarForge',
      description: 'A sleek AI chatbot landing page with a user-friendly design that enhances engagement and showcases AI capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      tech: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'FRAMER', 'ZOD'],
      gradient: ['#ec4899', '#e11d48'] // Pink to Rose
    },
    {
      title: 'Personal Portfolio',
      description: 'A captivating portfolio showcasing innovative web development and UI/UX with modern design principles and smooth animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop',
      tech: ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'THREE.JS', 'FRAMER MOTION'],
      gradient: ['#9333ea', '#a855f7'] // Purple gradient
    }
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming ideas into high-impact intelligent systems and digital experiences
          </p>
        </div>
        
        {/* Projects Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                background: `linear-gradient(to bottom, ${project.gradient[0]}, ${project.gradient[1]})`,
                boxShadow: `0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 20px -5px ${project.gradient[0]}40`
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x400/1a1a1a/ffd700?text=${encodeURIComponent(project.title)}`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 bg-white/5 backdrop-blur-sm relative z-10">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold rounded-lg border border-white/20 hover:border-white/40 hover:bg-black/70 transition-all uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gradient Overlay on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


